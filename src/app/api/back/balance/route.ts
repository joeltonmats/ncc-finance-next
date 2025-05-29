import { NextRequest, NextResponse } from "next/server";

import {
  createBalanceForUserId,
  getAllBalances,
} from "@/service/balanceService";

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

export async function POST(req: NextRequest) {
  const balanceData = await req.json();
  try {
    await createBalanceForUserId(balanceData.userId);

    return NextResponse.json(
      { message: "Balance created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating balance:", error);
    return NextResponse.json(
      { error: "Failed to create balance" },
      { status: 500 }
    );
  }
}
