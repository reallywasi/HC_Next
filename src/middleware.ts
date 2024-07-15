import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

 //enabling that someone who has token should not see the login/signup pages
 // someone who does not have token should not see protected pages like profile 
 
export function middleware(request: NextRequest) {
    const path=request.nextUrl.pathname;
    const isPublicPath=path==='/login' || path==='/signup'

    const token=request.cookies.get('token')?.value||'';

    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
      }
      if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
      }
  }
  
//__________________________________________________________________________________________
//__________________________________________________________________________________________
//__________________________________________________________________________________________
//__________________________________________________________________________________________
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    // '/verifyemail'
  ]
}


/*
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
  
    const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'
  
    const token = request.cookies.get('token')?.value || ''
  
    if(isPublicPath && token) {
      return NextResponse.redirect(new URL('/', request.nextUrl))
    }
  
    if (!isPublicPath && !token) {
      return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
      
  }
  */