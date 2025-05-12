import { getUserTransactions } from "@/service/userService";
import { NextRequest, NextResponse } from "next/server";

/* example: /api/debug/user-transactions?id=USER_ID */
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("id") ?? undefined;
  const transactions = await getUserTransactions(userId);
  return NextResponse.json(transactions);
}
