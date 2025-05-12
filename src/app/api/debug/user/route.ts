import { getUserById } from "@/service/userService";
import { NextRequest, NextResponse } from "next/server";

/* example: /api/debug/user?id=USER_ID */
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("id") ?? undefined;
  const user = await getUserById(userId);
  return NextResponse.json(user);
}
