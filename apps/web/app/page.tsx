import { api } from "./trpc/server";
import CreatePost from "./components/create-post";

export default async function IndexPage() {
  const data = await api.post.all();

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <pre>{JSON.stringify(data)}</pre>
      </div>
      <CreatePost />
    </>
  );
}
