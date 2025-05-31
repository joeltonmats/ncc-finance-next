import { prisma } from "@/lib/prisma";
import { ERROR_CONSTANTS } from "@/constants";

export async function getAllTransactions() {
  const transactions = await prisma.transaction.findMany({
    orderBy: { timestamp: "desc" },
  });

  return transactions;
}
export async function getTransactionById(
  transactionId?: string,
  balanceId?: string
) {
  return prisma.transaction.findUnique({
    where: {
      id: transactionId ?? "DEFAULT_TRANSACTION_ID",
      AND: { balanceId: balanceId ?? "DEFAULT_BALANCE_ID" },
    },
  });
}

export async function deleteTransactionById(
  transactionId?: string,
  balanceId?: string
) {
  try {
    return await prisma.transaction.delete({
      where: {
        id: transactionId ?? "DEFAULT_TRANSACTION_ID",
        AND: { balanceId: balanceId ?? "DEFAULT_BALANCE_ID" },
      },
    });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    return { error: "Failed to delete transaction" };
  }
}

export async function updateTransactionById(
  transactionId: string,
  balanceId: string,
  transactionData: Partial<{
    type: string;
    amount: number;
    timestamp: Date;
    description: string;
  }>
) {
  try {
    return await prisma.transaction.update({
      where: { id: transactionId, AND: { balanceId: balanceId } },
      data: transactionData,
    });
  } catch (error) {
    console.error("Error updating transaction:", error);
    return { error: "Failed to update transaction" };
  }
}

export type NewTransactionRequest = {
  balanceId: string;
  transactionType: string;
  amount: number;
  description: string;
};

export async function createTransaction(
  transactionInput: NewTransactionRequest
) {
  try {
    const transactionToInput = await getTransactionInput(transactionInput);
    const transaction = await prisma.transaction.create({
      data: transactionToInput,
    });
    return transaction;
  } catch {
    return { error: ERROR_CONSTANTS.createTransaction };
  }
}

async function getTransactionInput(input: NewTransactionRequest) {
  return {
    balanceId: input.balanceId,
    type: input.transactionType,
    amount: input.amount,
    timestamp: new Date(),
    description: `${input.transactionType} no valor de ${input.amount}`,
  };
}

export async function getTransactionsByBalanceId(balanceId?: string) {
  try {
    return await prisma.transaction.findMany({
      where: { balanceId: balanceId ?? " " },
    });
  } catch {
    throw new Error("Balance not found or database error");
  }
}
