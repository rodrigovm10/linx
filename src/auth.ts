import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'

import { db } from '@/server/db/db'
import authConfig from '@/auth.config'
import { getUserById } from '@/server/data/users'

export const {
  handlers: { GET, POST },
  auth,
  signOut
} = NextAuth({
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== 'credentials') return true

      return false
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (session.user) {
        session.user.limitLinks = token.limitLinks as number
      }
      return session
    },
    async jwt({ token }) {
      if (!token) return token

      const user = await getUserById({ id: token.sub })

      if (!user) return token

      token.limitLinks = user.limitLinks

      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  basePath: '/api/auth',
  secret: process.env.AUTH_SECRET,
  ...authConfig
})
