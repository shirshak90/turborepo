import type { TRPCRouterRecord } from "@trpc/server";

import { publicProcedure } from "../trpc";
import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt-ts";

export const authRouter = {
  login: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const user = await ctx.db.user.findUnique({
          where: { email: input.email },
        });

        if (!user) {
          return null;
        }

        if (user) {
          const token = jwt.sign(
            { userId: user.id },
            "oAD3rDvy3ACyJaDzi7TFXmuiqtFFs0ogAcJdr2VIxfw=",
            {
              expiresIn: "1h",
            }
          );

          delete user.hashedPassword;
          return { user, token };
        }
      } catch (error) {
        throw new Error("No user found.");
      }
    }),
} satisfies TRPCRouterRecord;
