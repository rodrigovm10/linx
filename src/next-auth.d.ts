import { type DefaultSession } from 'next-auth'

export type ExtendedUser = DefaultSession['user'] & {
  limitLinks: number
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user?: {
      limitLinks: number
    } & DefaultSession['user']
  }
}
