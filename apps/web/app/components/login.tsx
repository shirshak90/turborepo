import { signIn, signOut, signInReact } from "@repo/auth";

export default async function LoginPage() {
  return (
    <div>
      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button>Sign In</button>
      </form>

      <form>
        <button
          formAction={async () => {
            "use server";
            await signOut();
          }}
        >
          Sign Out
        </button>
      </form>
    </div>
  );
}
