import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  const hashed = await hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password: hashed },
  });

  return NextResponse.json({ id: user.id });
}
