import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

const regions: Record<string, string> = {
  brazilian: "BRL",
  american: "USD",
  european: "EUR",
};

const accountTypes = ["checking", "savings", "investment"];
const transactionTypes = ["deposit", "withdrawal", "transfer"];

function randomTransaction(balanceId: string) {
  return {
    balanceId,
    type: faker.helpers.arrayElement(transactionTypes),
    amount: parseFloat(faker.finance.amount({ min: 10, max: 1000 })),
    timestamp: faker.date.recent({ days: 365 }),
    description: faker.lorem.words(),
  };
}

async function main() {
  console.log("[Seeding database...]");

  const passwordHash = await hash("test12", 10);

  for (let i = 0; i < 5; i++) {
    const region = faker.helpers.arrayElement(Object.keys(regions));
    const currency = regions[region];

    // create  users
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: passwordHash,
        createdAt: new Date(),
      },
    });

    // create balance
    const numBalances = faker.helpers.arrayElement([1, 2, 3]);
    for (let j = 0; j < numBalances; j++) {
      const balance = await prisma.balance.create({
        data: {
          userId: user.id,
          accountType: faker.helpers.arrayElement(accountTypes),
          amount: parseFloat(faker.finance.amount({ min: 500, max: 10000 })),
          currency,
        },
      });

      // create transactions
      const numTransactions = faker.helpers.arrayElement([1, 5, 15, 30, 50]);
      const txs = Array.from({ length: numTransactions }).map(() =>
        randomTransaction(balance.id)
      );

      await prisma.transaction.createMany({
        data: txs,
      });
    }
  }

  console.log("[Done seeding.]");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
