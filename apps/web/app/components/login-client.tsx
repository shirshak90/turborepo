"use client";

import { signInReact } from "@repo/auth";
import { api } from "app/trpc/react";

export default function LoginClientPage() {
  const query = api.post.all.useQuery();
  return (
    <div>
      <button
        onClick={() =>
          signInReact("credentials", {
            email: "admin@ithivesolutions.com",
            password: "User@123$.",
          })
        }
      >
        Sign In Client
      </button>
    </div>
  );
}
