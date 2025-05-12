"use server";

import { ERROR_CONSTANTS, ROUTE_CONSTANTS } from "@/constants";
import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import { redirect } from "next/navigation";

export async function createUser(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const hashed = await hash(password, 10);

    await prisma.user.create({
      data: { name, email, password: hashed },
    });
  } catch (error) {
    console.log(ERROR_CONSTANTS.createUser, error);
    return;
  }

  redirect(ROUTE_CONSTANTS.signin);
}
