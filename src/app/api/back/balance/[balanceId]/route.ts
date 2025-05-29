import { getBalanceById } from "@/service/balanceService";
import { NextRequest, NextResponse } from "next/server";

/* example: /api/back/balance/[balanceId]/
 * getUserBalance
 *
 * Retrieves the balance for a specific user by their ID.
 * @param {NextRequest} req - The incoming request object.
 * @param {Object} params - The route parameters containing the balance ID.
 * @returns {Promise<NextResponse>} JSON response containing the user's balance.
 * @throws {Error} If the balance ID is missing or if there is an issue retrieving the balance.
 */
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
