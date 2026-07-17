import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      
      if (isOnAdmin) {
        // Protect /admin routes, but allow /admin/login to be accessed
        if (nextUrl.pathname === "/admin/login") {
          if (isLoggedIn) return Response.redirect(new URL("/admin", nextUrl));
          return true;
        }
        
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && nextUrl.pathname === "/admin/login") {
        return Response.redirect(new URL("/admin", nextUrl));
      }
      return true;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    }
  },
  providers: [],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        });
        
        if (!user) return null;
        
        const passwordsMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        );
        
        if (passwordsMatch) {
          return { id: user.id, email: user.email, name: user.name, role: user.role };
        }
        
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt"
  },
});
