import { NextRequest, NextResponse } from "next/server";
import { addBalance } from "@/service/balanceService";

/* example: /api/back/balance/USER_ID/add*/
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ balanceId: string }> }
) {
  const { balanceId } = await params;
  if (!balanceId) {
    return NextResponse.json({ error: "Missing balance ID" }, { status: 400 });
  }
  const { amount } = await req.json();
  if (typeof amount !== "number") {
    return NextResponse.json({ error: "Missing amount" }, { status: 400 });
  }
  const result = await addBalance(balanceId, amount);
  return NextResponse.json(result);
}
