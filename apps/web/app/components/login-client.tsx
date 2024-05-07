"use client";

import { signInReact } from "@repo/auth";

export default function LoginClientPage() {
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
