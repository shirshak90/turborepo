import { api } from "./trpc/server";
import CreatePost from "./components/create-post";
import LoginPage from "./components/login";
import { auth } from "@repo/auth";

export default async function IndexPage() {
  const data = await api.post.all();

  const session = await auth();

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <pre>{JSON.stringify(data)}</pre>
      </div>

      <CreatePost />

      <p>{JSON.stringify(session)}</p>
      <LoginPage />
    </>
  );
}
