/**
 * 🌱 These routes are public.
 * 🔓 Not required authentication.
 * @type {string[]}
 */
export const publicRoutes = ['/']

/**
 * 🌱 These routes that are use for authentication.
 * 🔓 Not required authentication.
 * @type {string[]}
 */
export const authRoutes = ['/login']

/**
 * 🌱 These routes are protected.
 * 🔒 Required authentication.
 * @type {string[]}
 */
export const protectedRoutes = ['/dashboard', '/settings']

/**
 * 🌱 These prefix for API authentication routes.
 * ✍️ Routes that start with this prefix are used for API authentication purposes.
 * 🔓 Not required for authentication.
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * 🌱 The default redirect URL after logging in.
 * 🔓 Not required for authentication.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT_URL = '/dashboard'
