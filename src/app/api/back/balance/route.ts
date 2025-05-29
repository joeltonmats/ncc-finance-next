import { NextResponse } from "next/server";

import { getAllBalances } from "@/service/balanceService";

/* example: /api/back/balance
 * getAllBalances
 * Retrieves all user balances.
 * @returns {Promise<NextResponse>} JSON response containing all balances
 * @throws {Error} If there is an issue retrieving balances.
 */
export async function GET() {
  const balances = await getAllBalances();
  return NextResponse.json(balances);
}
