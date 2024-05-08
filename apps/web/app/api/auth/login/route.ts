import { loginController } from "@repo/api";

export async function POST(request: Request) {
  try {
    const req = await request.json();
    const res = await loginController({
      email: req.email,
      password: req.password,
    });
    return Response.json(res);
  } catch (error) {
    return Response.json({ message: "Error Authenticating" }, { status: 500 });
  }
}
