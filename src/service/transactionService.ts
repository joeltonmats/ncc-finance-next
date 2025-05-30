import { prisma } from "@/lib/prisma";
import { ERROR_CONSTANTS } from "@/constants";

export async function getAllTransactions() {
  const transactions = await prisma.transaction.findMany({
    orderBy: { timestamp: "desc" },
    include: {
      balance: {
        select: {
          accountType: true,
          currency: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      },
    },
  });

  return transactions;
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
  } catch (error) {
    console.log(ERROR_CONSTANTS.createTransaction, error);
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
