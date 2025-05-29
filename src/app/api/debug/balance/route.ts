import { getUserBalance } from "@/service/balanceService";
import { NextRequest, NextResponse } from "next/server";

/* example: /api/debug/balance?id=USER_ID */
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("id") ?? undefined;
  const balances = await getUserBalance(userId);
  return NextResponse.json(balances);
}
