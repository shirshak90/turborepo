import jwt from "jsonwebtoken";

export default async function verifyToken(token: string) {
  const isVerified = jwt.verify(token, process.env.NEXTAUTH_SECRET ?? "");

  return isVerified;
}
