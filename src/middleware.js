import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  // Check if the URL has query parameters
  if (url.search) {
    // Remove query parameters by creating a new URL without `search`
    const cleanUrl = new URL(url.origin + url.pathname);

    // Redirect to the clean URL
    return NextResponse.redirect(cleanUrl);
  }

  // Allow request to proceed if no query parameters exist
  return NextResponse.next();
}

 // Apply middleware to specific routes
export const config = {
  matcher: ["/donateNow"],  
};