import type { TRPCRouterRecord } from "@trpc/server";

import { publicProcedure } from "../trpc";

export const postRouter = {
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({});
  }),
  create: publicProcedure.mutation(({ ctx }) => {
    return ctx.db.post.create({ data: { name: "test" } });
  }),
} satisfies TRPCRouterRecord;
