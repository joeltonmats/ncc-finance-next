import { prisma } from "@/lib/prisma";
import { getUserBalances, getUserById } from "@/service/userService";
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
  userId: string;
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
  const userBalance = (await getUserBalances(input.userId))[0];
  const user = await getUserById(input.userId);
  if (!user) {
    throw new Error(`Usuário com ID ${input.userId} não encontrado`);
  }
  return {
    balanceId: userBalance.id,
    type: input.transactionType,
    amount: input.amount,
    timestamp: new Date(),
    description: `${input.transactionType} de ${user.name} no valor de ${input.amount}`,
  };
}
