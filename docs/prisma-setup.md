# NCC Finance – Prisma & Local Mock DB Setup Guide

This guide helps get Prisma + SQLite + seed data working locally.

## Folder Structure Overview

```js
prisma/
├── schema.prisma # DB schema
├── seed.ts # Seed data with Faker
src/
├── lib/prisma.ts # Shared Prisma client
├── services/ # Data queries
│ └── transactionService.ts
```

## 1 - Install Dependencies

```bash
npm install -D prisma @prisma/client ts-node @faker-js/faker
```

## 2 - Initialize Prisma (first-time only)

```bash
npx prisma init --datasource-provider sqlite --output ../generated/prisma
```

## 3 - If necessary, see our schema model defined in `prisma/schema.prisma`

Define or Review Your Schema in `prisma/schema.prisma`

## 4 - Run Migration and Generate Client

```bash
npx prisma migrate dev --name init
```

## 5 - Seed the Database

```bash
npx prisma db seed
```

## 6 - Test data via endpoints

```bash
http://localhost:3000/api/debug/transactions
```

## 7 - Reset DB (Optional)

```bash
npx prisma  migrate reset
```

## Help & Conventions

- All database queries live in src/services/
- The Prisma client is created once in src/lib/prisma.ts
- Use @faker-js/faker for consistent mock data
