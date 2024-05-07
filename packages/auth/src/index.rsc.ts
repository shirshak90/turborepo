import NextAuth from "next-auth";

import { authConfig } from "./config";
import React from "react";

export type { Session } from "next-auth";

const {
  handlers: { GET, POST },
  auth: defaultAuth,
  signIn,
  signOut,
} = NextAuth(authConfig);

/**
 * This is the main way to get session data for your RSCs.
 * This will de-duplicate all calls to next-auth's default `auth()` function and only call it once per request
 */
const auth = defaultAuth;

export { GET, POST, auth, signIn, signOut };
