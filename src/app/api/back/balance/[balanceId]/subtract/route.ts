import { NextRequest, NextResponse } from "next/server";
import { subtractBalance } from "@/service/balanceService";

/* example: /api/debug/balance/subtract?id=USER_ID&amount=50 */
export async function PUT(req: NextRequest) {
  const { id, amount } = await req.json();
  if (!id || typeof amount !== "number") {
    return NextResponse.json(
      { error: "Missing id or amount" },
      { status: 400 }
    );
  }
  const result = await subtractBalance(id, amount);
  return NextResponse.json(result);
}
