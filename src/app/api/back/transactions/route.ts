import { getAllTransactions } from "@/service/transactionService";
import { NextResponse } from "next/server";

/* Example: /api/back/transactions
 * This route retrieves all transactions from the database.
 * It returns a JSON response containing the transactions.
 * @returns A NextResponse object containing the transactions in JSON format.
 * @throws Will throw an error if the transaction retrieval fails.
 */
export async function GET() {
  const data = await getAllTransactions();
  return NextResponse.json(data);
}
