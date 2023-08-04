// Without a defined matcher, this one line applies next-auth
// to the entire project
// export { default } from "next-auth/middleware";
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    // ? THIS WILL DENIED ACCESS IF THE ROLE IS NOT ADMIN
    if (
      (req.nextUrl.pathname.startsWith("/Users") ||
        req.nextUrl.pathname.startsWith("/Products")) &&
      req.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/Denied", req.url));
    }

    // // ? @desc THIS Will allowed the employee only
    // if (
    //   req.nextUrl.pathname.startsWith("/Products") &&
    //   req.nextauth.token?.role !== "employee"
    // ) {
    //   return NextResponse.rewrite(new URL("/Denied", req.url));
    // }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/", "/Products/:path*", "/Users/:path*"],
};
