import { prisma } from "@/lib/prisma";

// TODO: Change based your id database or user test if necessary
const DEFAULT_USER_ID = "cmae2dxdf002dvnm8gqpth4s2";

export async function getAllUsers() {
  return prisma.user.findMany({
    orderBy: { createdAt: "asc" },
  });
}

export async function getUserById(userId?: string) {
  return prisma.user.findUnique({
    where: { id: userId ?? DEFAULT_USER_ID },
  });
}

export async function getUserBalances(userId?: string) {
  return prisma.balance.findMany({
    where: { userId: userId ?? DEFAULT_USER_ID },
  });
}

export async function getUserTransactions(userId?: string) {
  const balances = await prisma.balance.findMany({
    where: { userId: userId ?? DEFAULT_USER_ID },
    select: { id: true },
  });

  const balanceIds = balances.map((b) => b.id);

  return prisma.transaction.findMany({
    where: { balanceId: { in: balanceIds } },
    orderBy: { timestamp: "desc" },
    include: {
      balance: {
        select: {
          accountType: true,
          currency: true,
        },
      },
    },
  });
}
