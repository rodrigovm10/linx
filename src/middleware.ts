import {
  authRoutes,
  apiAuthPrefix,
  protectedRoutes,
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT_URL
} from '@/routes'
import authConfig from '@/auth.config'
import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'
import { redirectUrl } from '@/server/middleware/redirect'

export const { auth } = NextAuth(authConfig)

export default auth(async req => {
  const { nextUrl } = req

  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  const shortLink = req.nextUrl.pathname.split('/').pop()

  // Is API auth route:
  if (isApiAuthRoute) return

  // Is Auth Route and is authenticated, return to DEFAULT_LOGIN_REDIRECT_URL:
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT_URL, nextUrl))
    }
  }

  // Is not logged and is protectedRoute, redirect to /login
  if (!isLoggedIn && isProtectedRoute) {
    let callbackUrl = nextUrl.pathname
    if (nextUrl.search) {
      callbackUrl += nextUrl.search
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl)

    return NextResponse.redirect(new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl))
  }

  // Redirect to the url from shortlink
  if (!isPublicRoute && !isProtectedRoute) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const getDataApi = await redirectUrl({ shortLink: shortLink! })

    console.log({ getDataApi })

    if (getDataApi.redirect404) {
      console.log('Error - Redirect 404: ', shortLink)
    }

    if (getDataApi.error) {
      return NextResponse.json({ error: getDataApi.message }, { status: 500 })
    }

    if (getDataApi.url) {
      return NextResponse.redirect(new URL(getDataApi.url).toString())
    }
  }
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
