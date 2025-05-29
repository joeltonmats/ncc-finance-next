import {
  createTransaction,
  getTransactionsByBalanceId,
} from "@/service/transactionService";
import { NextRequest, NextResponse } from "next/server";

/* example: /api/back/transactions/[balanceId]
 * This route retrieves all transactions associated with a specific balance ID.
 * It expects the balance ID to be provided in the URL parameters.
 * Returns a JSON response containing the transactions or an error message if the balance ID is missing.
 * @param req - The NextRequest object representing the incoming request.
 * @param params - An object containing the URL parameters, specifically the balance ID.
 * @returns A NextResponse object containing the transactions in JSON format or an error message.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ balanceId: string }> }
) {
  const { balanceId } = await params;
  if (!balanceId) {
    return NextResponse.json({ error: "Missing balance ID" }, { status: 400 });
  }
  const balances = await getTransactionsByBalanceId(balanceId);
  return NextResponse.json(balances);
}

/* example: /api/back/transactions/[balanceId]
 * This route creates a new transaction associated with a specific balance ID.
 * It expects the balance ID to be provided in the URL parameters and the transaction data in the request body.
 * Returns a JSON response containing the newly created transaction or an error message if the creation fails.
 * @param req - The NextRequest object representing the incoming request.
 * @param params - An object containing the URL parameters, specifically the balance ID.
 * @returns A NextResponse object containing the newly created transaction in JSON format or an error message.
 * @throws Will throw an error if the transaction creation fails.
 * @example
 * POST /api/back/transactions/[balanceId]
 * Request body:
 * {
 *  "transactionType": "deposit",
 *  "amount": 100,
 *  "description": "Grocery shopping"
 * }
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ balanceId: string }> }
) {
  const { balanceId } = await params;
  if (!balanceId) {
    return NextResponse.json({ error: "Missing balance ID" }, { status: 400 });
  }

  const transactionData = await req.json();
  transactionData.balanceId = balanceId;

  try {
    const newTransaction = await createTransaction(transactionData);
    return NextResponse.json(newTransaction, { status: 201 });
  } catch (error) {
    console.error("Error creating transaction:", error);
    return NextResponse.json(
      { error: "Failed to create transaction" },
      { status: 500 }
    );
  }
}
