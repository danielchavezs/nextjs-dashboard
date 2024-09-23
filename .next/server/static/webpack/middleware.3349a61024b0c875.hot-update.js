"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./auth.config.ts":
/*!************************!*\
  !*** ./auth.config.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        authorized ({ auth, request: { nextUrl } }) {\n            const isLoggedIn = !!auth?.user;\n            const isOnDashboard = nextUrl.pathname.startsWith(\"/dashboard\");\n            if (isOnDashboard) {\n                if (isLoggedIn) return true;\n                return false; // Redirect unauthenticated users to login page\n            } else if (isLoggedIn) {\n                return Response.redirect(new URL(\"/dashboard\", nextUrl));\n            }\n            return true;\n        }\n    },\n    providers: []\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXV0aC5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU1BLGFBQWE7SUFDeEJDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVEMsWUFBVyxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFFLEVBQUU7WUFDdkMsTUFBTUMsYUFBYSxDQUFDLENBQUNILE1BQU1JO1lBQzNCLE1BQU1DLGdCQUFnQkgsUUFBUUksUUFBUSxDQUFDQyxVQUFVLENBQUM7WUFDbEQsSUFBSUYsZUFBZTtnQkFDakIsSUFBSUYsWUFBWSxPQUFPO2dCQUN2QixPQUFPLE9BQU8sK0NBQStDO1lBQy9ELE9BQU8sSUFBSUEsWUFBWTtnQkFDckIsT0FBT0ssU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksY0FBY1I7WUFDakQ7WUFDQSxPQUFPO1FBQ1Q7SUFDRjtJQUNBUyxXQUFXLEVBQUU7QUFDZixFQUEyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hdXRoLmNvbmZpZy50cz80MzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEF1dGhDb25maWcgfSBmcm9tICduZXh0LWF1dGgnO1xyXG4gXHJcbmV4cG9ydCBjb25zdCBhdXRoQ29uZmlnID0ge1xyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46ICcvbG9naW4nLFxyXG4gIH0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhdXRob3JpemVkKHsgYXV0aCwgcmVxdWVzdDogeyBuZXh0VXJsIH0gfSkge1xyXG4gICAgICBjb25zdCBpc0xvZ2dlZEluID0gISFhdXRoPy51c2VyO1xyXG4gICAgICBjb25zdCBpc09uRGFzaGJvYXJkID0gbmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgIGlmIChpc09uRGFzaGJvYXJkKSB7XHJcbiAgICAgICAgaWYgKGlzTG9nZ2VkSW4pIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gUmVkaXJlY3QgdW5hdXRoZW50aWNhdGVkIHVzZXJzIHRvIGxvZ2luIHBhZ2VcclxuICAgICAgfSBlbHNlIGlmIChpc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9kYXNoYm9hcmQnLCBuZXh0VXJsKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbXSwgLy8gQWRkIHByb3ZpZGVycyB3aXRoIGFuIGVtcHR5IGFycmF5IGZvciBub3dcclxufSBzYXRpc2ZpZXMgTmV4dEF1dGhDb25maWc7Il0sIm5hbWVzIjpbImF1dGhDb25maWciLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImF1dGhvcml6ZWQiLCJhdXRoIiwicmVxdWVzdCIsIm5leHRVcmwiLCJpc0xvZ2dlZEluIiwidXNlciIsImlzT25EYXNoYm9hcmQiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJSZXNwb25zZSIsInJlZGlyZWN0IiwiVVJMIiwicHJvdmlkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./auth.config.ts\n");

/***/ })

});