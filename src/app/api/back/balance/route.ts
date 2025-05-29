import { NextResponse } from "next/server";

import { getAllBalances } from "@/service/balanceService";

/* example: /api/back/balance */
export async function GET() {
  const balances = await getAllBalances();
  return NextResponse.json(balances);
}
