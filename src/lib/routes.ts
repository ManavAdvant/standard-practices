// Route constants for the application

// Public routes that don't require authentication
export const PUBLIC_ROUTES = ['/', '/sign-in', '/sign-up'] as const;

// Protected routes that require authentication
export const PROTECTED_ROUTES = ['/overview', '/details', '/settings'] as const;

// API routes that should be handled by the middleware
export const API_ROUTES = ['/api/webhooks'] as const;

// After authentication redirect URLs
export const REDIRECT_URLS = {
  AFTER_SIGN_IN: '/overview',
  AFTER_SIGN_UP: '/overview',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
} as const;

// Helper functions
export const isPublicRoute = (pathname: string): boolean => {
  return PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + '/'),
  );
};

export const isProtectedRoute = (pathname: string): boolean => {
  return PROTECTED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + '/'),
  );
};

export const isApiRoute = (pathname: string): boolean => {
  return API_ROUTES.some((route) => pathname.startsWith(route));
};
