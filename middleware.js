import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// ovo je deo clerk.js
//https://clerk.com/

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/events(.*)",
  "/meetings(.*)",
  "/availability(.*)",
]);


// ako user nije ulogovan "!auth().userId" i ako je protectedRoute onda ga saljemo nazad na signIn
export default clerkMiddleware((auth, req) => {
  if (!auth().userId && isProtectedRoute(req)) {
    return auth().redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
