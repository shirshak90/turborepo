import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type DefaultSession, type NextAuthOptions } from "next-auth";
import { prisma as db } from "@repo/database";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authConfig: NextAuthOptions = {
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session(opts) {
      return { ...opts.session };
    },
  },
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        // if (!credentials?.email || !credentials?.password) {
        //   throw new Error("Invalid credentials");
        // }

        const user = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        // if (!user || !user) {
        //   throw new Error("Invalid credentials");
        // }

        // const isCorrectPassword = await compare(
        //   credentials.password,
        //   user.hashedPassword
        // );

        // if (!isCorrectPassword) {
        //   throw new Error("Invalid credentials");
        // }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions;
