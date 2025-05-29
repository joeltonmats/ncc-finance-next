import { NextRequest, NextResponse } from "next/server";
import { getAmountBalance } from "@/service/balanceService";

/* example: /api/debug/balance/USER_ID/amount
 * getAmountBalance
 * Retrieves the amount of a user's balance by their ID.
 * @param {NextRequest} req - The incoming request object.
 * @param {Object} params - The route parameters containing the balance ID.
 * @returns {Promise<NextResponse>} JSON response containing the user's balance amount.
 * @throws {Error} If the balance ID is missing or if there is an issue retrieving the amount.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ balanceId: string }> }
) {
  const { balanceId } = await params;
  if (!balanceId) {
    return NextResponse.json({ error: "Missing balance ID" }, { status: 400 });
  }
  const amount = await getAmountBalance(balanceId);
  return NextResponse.json({ amount });
}
