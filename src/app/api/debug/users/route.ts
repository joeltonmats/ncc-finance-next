import { getAllUsers } from "@/service/userService";
import { NextResponse } from "next/server";

/* example: /api/debug/users */
export async function GET() {
  const users = await getAllUsers();
  return NextResponse.json(users);
}
