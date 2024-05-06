"use client";

import { api } from "../trpc/react";

export default function CreatePost() {
  const create = api.post.create.useMutation();
  return <button onClick={() => create.mutate()}>Create New Post</button>;
}
