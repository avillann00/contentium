import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import * as jwt from 'jsonwebtoken'

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
        });

        const data = await res.json();

        if (res.ok && data) {
          return {
            ...data.user,
            accessToken: data.access,
            refreshToken: data.refresh,
          };
        }

        return null; 
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
      if (user) {
        const payload = {
          id: user.id,
          email: user.email,
        }

        token.accessToken = jwt.sign(payload, process.env.NEXTAUTH_SECRET!, {
          algorithm: 'HS256',
          expiresIn: '1h',
        })
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    }
  },

  secret: process.env.NEXTAUTH_SECRET, 
});

export { handler as GET, handler as POST };
