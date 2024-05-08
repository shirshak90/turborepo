import { headers } from "next/headers";

import { createCaller, createTRPCContext } from "@repo/api";
import { auth } from "@repo/auth";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = async () => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

  return createTRPCContext({
    session: await auth(),
    headers: heads,
  });
};

export const api = createCaller(createContext);
