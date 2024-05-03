import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'

import { prisma } from '@/server/db/db'
import authConfig from '@/auth.config'

export const {
  handlers: { GET, POST },
  auth,
  signOut
} = NextAuth({
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account === null) return
      // Allow OAuth without email verification
      if (account.provider !== 'credentials') return true
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  basePath: '/api/auth',
  secret: process.env.AUTH_SECRET,
  ...authConfig
})
