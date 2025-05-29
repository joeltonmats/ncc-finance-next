import { getAllTransactions } from "@/service/transactionService";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getAllTransactions();
  return NextResponse.json(data);
}
