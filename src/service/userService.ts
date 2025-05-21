import { ERROR_CONSTANTS } from "@/constants";
import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";

// TODO: Change based your id database or user test if necessary
const DEFAULT_USER_ID = "cmae2dxdf002dvnm8gqpth4s2";

export type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};

export async function createUser(data: CreateUserInput) {
  const { name, email, password } = data;

  if (!name || !email || !password) {
    return { error: "Missing required fields" };
  }

  const hashed = await hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { name, email, password: hashed },
    });
    return { id: user.id };
  } catch (error) {
    console.log(ERROR_CONSTANTS.createUser, error);
    return { error: "Could not create user" };
  }
}

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
