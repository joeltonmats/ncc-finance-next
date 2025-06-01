import { NextResponse } from "next/server";

import { getAllBalances } from "@/service/balanceService";

/* example: /api/debug/balance/all */
export async function GET() {
  const balances = await getAllBalances();
  return NextResponse.json(balances);
}
