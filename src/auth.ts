import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { NextAuthConfig } from "next-auth";
import { authConfig } from "./auth.config";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface User {
    role?: string;
  }
  interface Session {
    user: User & {
      id: string;
      role?: string;
    };
  }
}

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
