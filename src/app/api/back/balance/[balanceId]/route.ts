import { getBalanceById } from "@/service/balanceService";
import { NextRequest, NextResponse } from "next/server";

/* example: /api/back/balance/USER_ID/ */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ balanceId: string }> }
) {
  const { balanceId } = await params;
  if (!balanceId) {
    return NextResponse.json({ error: "Missing balance ID" }, { status: 400 });
  }
  const balances = await getBalanceById(balanceId);
  return NextResponse.json(balances);
}
