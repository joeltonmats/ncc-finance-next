import { prisma } from "@/lib/prisma";

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
