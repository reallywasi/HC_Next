// // import { NextResponse } from 'next/server'
// // import type { NextRequest } from 'next/server'
 

// // export function middleware(request: NextRequest) {
// //   const path = request.nextUrl.pathname

// //   const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

// //   const token = request.cookies.get('token')?.value || ''

// //   if(isPublicPath && token) {
// //     return NextResponse.redirect(new URL('/', request.nextUrl))
// //   }

// //   if (!isPublicPath && !token) {
// //     return NextResponse.redirect(new URL('/login', request.nextUrl))
// //   }
    
// // }

 
// // // See "Matching Paths" below to learn more
// // export const config = {
// //   matcher: [
// //     '/',
// //     '/profile',
// //     '/login',
// //     '/signup',
// //     '/verifyemail'
// //   ]
// // }







// // import { NextResponse } from 'next/server'
// // import type { NextRequest } from 'next/server'
 
// // export function middleware(request: NextRequest) {
// //   const path = request.nextUrl.pathname
// //   const token = request.cookies.get('token')?.value || ''
// // const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'
// //   if(isPublicPath && token) {
// //     return NextResponse.redirect(new URL('/', request.nextUrl))
// //   }
// //   if (!isPublicPath && !token) {
// //     return NextResponse.redirect(new URL('/login', request.nextUrl))
// //   }
    
// // }
 
// // // See "Matching Paths" below to learn more
// // export const config = {
// //   matcher: [
// //     '/',
// //     '/profile',
// //     '/login',
// //     '/signup',
// //   ]
// // }
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;
//   const token = request.cookies.get('token')?.value || '';
//   const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail';

//   console.log(`Path: ${path}`);
//   console.log(`Token: ${token}`);
//   console.log(`Is Public Path: ${isPublicPath}`);

//   // If the user is authenticated and trying to access a public path, redirect to home page
//   if (isPublicPath && token) {
//     console.log('Redirecting authenticated user from public path to home page');
//     return NextResponse.redirect(new URL('/', request.nextUrl));
//   }

//   // If the user is not authenticated and trying to access a protected path, redirect to login page
//   if (!isPublicPath && !token) {
//     console.log('Redirecting unauthenticated user from protected path to login page');
//     return NextResponse.redirect(new URL('/login', request.nextUrl));
//   }

//   // Allow the request to proceed if it doesn't match the above conditions
//   return NextResponse.next();
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     '/',
//     '/profile',
//     '/login',
//     '/signup',
//     '/verifyemail',
//   ]
// };


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value || '';
  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail';

  console.log(`Path: ${path}`);
  console.log(`Token: ${token}`);
  console.log(`Is Public Path: ${isPublicPath}`);

  // If the user is authenticated and trying to access a public path, redirect to home page
  if (isPublicPath && token) {
    console.log('Redirecting authenticated user from public path to home page');
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  // If the user is not authenticated and trying to access a protected path, redirect to login page
  if (!isPublicPath && !token) {
    console.log('Redirecting unauthenticated user from protected path to login page');
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // Allow the request to proceed if it doesn't match the above conditions
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/verifyemail', // Add this to matcher to ensure it's considered
  ]
};

