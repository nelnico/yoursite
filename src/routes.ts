/**
 * An array of routes that are accessible to the public.
 * These routes does not require authentication.
 * @type {string[]}
 */
export const publicRoutes = ["/", "/about-us", "/contact-us", "/join-us"];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/new-verification",
];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after a successful login.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
