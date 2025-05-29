import { NextRequest, NextResponse } from "next/server";
import { getAmountBalance } from "@/service/balanceService";

/* example: /api/debug/balance/amount?id=USER_ID */
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("id") ?? undefined;
  if (!userId) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  const amount = await getAmountBalance(userId);
  return NextResponse.json({ amount });
}
