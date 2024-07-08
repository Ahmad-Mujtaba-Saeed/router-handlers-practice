import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
    const response = NextResponse.next(); 

    const Email = request.cookies.get('/Email');
    if(!Email){
        response.cookies.set('Email','ahmadmujtabap70@gmail.com');
        return response;
    }

    if(request.nextUrl.pathname == "/profile"){
        // return NextResponse.redirect(new URL("/hello", request.url))
        return NextResponse.rewrite(new URL("/hello", request.url))
    }
}

// export const config = {
//     matcher : "/profile"
// } 