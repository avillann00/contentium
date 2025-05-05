import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        })

        const user = await res.json()

        if (res.ok && user) {
          return user; 
        }

        return null
      }
    })
  ],

  pages: {
    signIn: '/login', 
  },

  session: {
    strategy: 'jwt', 
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user; 
      return token
    },
    async session({ session, token }) {
      if (token?.user) session.user = token.user;
      return session
    },
  },

  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET, 
})

export { handler as GET, handler as POST }
