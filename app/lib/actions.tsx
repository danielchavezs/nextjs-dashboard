'use server';
  
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
//The amount field is specifically set to coerce (change) from a string to a number while also validating its type.
// Updated in chapter 14 to validate the form in the server:

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.'}),
  status: z.enum(['pending', 'paid'],{
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });

// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
    errors?: {
      customerId?: string[];
      amount?: string[];
      status?: string[];
    };
    message?: string | null;
  };

 
export async function createInvoice(prevState: State, formData: FormData) {
    
    // Added in chapter 14 for accessibility and types validation.
    // Validate form using Zod. 
    const validatedFields = CreateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Failed to create invoice.'
        };
    };

    // Prepare data for insertion into the database
    // const {customerId, amount, status } = CreateInvoice.parse({
    //     customerId: formData.get('customerId'),
    //     amount: formData.get('amount'),
    //     status: formData.get('status'),
    // });
    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    try {  
        await sql`
            INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
            `;
        } catch (error) {
            console.log(error)
            return {
                message: 'Database Error: Failed to Create Invoice.',
              };
        };
        // after updating the data in the invoices and its DB, we want to re-validate the route (fetching the new data from the server).
        revalidatePath('/dashboard/invoices');
        // redirecting user to the updated route.
        redirect('/dashboard/invoices');
};

export async function updateInvoice(id: string, formData: FormData) {
    const { customerId, amount, status } = UpdateInvoice.parse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
   
    const amountInCents = amount * 100;

    try {
        await sql`
          UPDATE invoices
          SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
          WHERE id = ${id}
        `;
    } catch (error) {
        console.log(error)
        return {
            message: 'Database Error: Failed to Update Invoice.',
        };
    };

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  };

//   server-side validation version
//   export async function updateInvoice(
//     id: string,
//     prevState: State,
//     formData: FormData,
//   ) {
//     const validatedFields = UpdateInvoice.safeParse({
//       customerId: formData.get('customerId'),
//       amount: formData.get('amount'),
//       status: formData.get('status'),
//     });
   
//     if (!validatedFields.success) {
//       return {
//         errors: validatedFields.error.flatten().fieldErrors,
//         message: 'Missing Fields. Failed to Update Invoice.',
//       };
//     }
   
//     const { customerId, amount, status } = validatedFields.data;
//     const amountInCents = amount * 100;
   
//     try {
//       await sql`
//         UPDATE invoices
//         SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
//         WHERE id = ${id}
//       `;
//     } catch (error) {
//       return { message: 'Database Error: Failed to Update Invoice.' };
//     }
   
//     revalidatePath('/dashboard/invoices');
//     redirect('/dashboard/invoices');
//   }



export async function deleteInvoice(id: string) {
    // throw new Error('Failed to Delete Invoice');
    try {
        await sql`DELETE FROM invoices WHERE id = ${id}`;        
        revalidatePath('/dashboard/invoices');
        return { message: 'Deleted Invoice.' };
    } catch (error) {
        console.log(error)
        return {
            message: 'Database Error: Failed to Delete Invoice.',
        };
    };
};