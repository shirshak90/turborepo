import { prisma as db } from "@repo/database";
import jwt from "jsonwebtoken";
import { compareSync } from "bcrypt-ts";

export async function loginController({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user) throw new Error("User Not Found");

  if (!compareSync(password, user.hashedPassword))
    throw new Error("Username or Password is Incorrect");

  const token = jwt.sign(
    { userId: user.id },
    `${process.env.NEXTAUTH_SECRET}`,
    {
      expiresIn: "1h",
    }
  );

  delete user.hashedPassword;
  return { user, token };
}
