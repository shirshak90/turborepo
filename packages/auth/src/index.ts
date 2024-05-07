import NextAuth from "next-auth";
import { signIn as signInReact } from "next-auth/react";

import { authConfig } from "./config";

export type { Session } from "next-auth";

const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);

export { GET, POST, auth, signIn, signOut, signInReact };
