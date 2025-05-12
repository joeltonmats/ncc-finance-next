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

## How to Install

### 1 - Install Dependencies

```bash
npm install -D prisma @prisma/client ts-node @faker-js/faker
```

### 2 - Initialize Prisma (first-time only)

```bash
npx prisma init --datasource-provider sqlite --output ../generated/prisma
```

### 3 - If necessary, see our schema model defined in `prisma/schema.prisma`

Define or Review Your Schema in `prisma/schema.prisma`

### 4 - Run Migration and Generate Client

```bash
npx prisma migrate dev --name init
```

### 5 - Seed the Database

```bash
npx prisma db seed
```

### 6 - Test data via endpoints

```bash
http://localhost:3000/api/debug/transactions
```

### 7 - Reset DB (Optional)

```bash
npx prisma  migrate reset
```

## Help & Conventions

- All database queries live in src/services/
- The Prisma client is created once in src/lib/prisma.ts
- Use @faker-js/faker for consistent mock data

## Local API Debug Endpoints

> All routes fallback to a default user if no ID is provided(but change it based on database)

- GET `/api/debug/users` — get all users (useful for finding valid user IDs)
- GET `/api/debug/user` — get mock user. Ex: `/api/debug/user?id=<userId>`
- GET `/api/debug/balances` — get balances for user. Ex:`/api/debug/balances?id=<userId>`
- GET `/api/debug/user-transactions` — get transactions across all balances. E: `/api/debug/user-transactions?id=<userId>`

These routes hit real Prisma + SQLite data and reflect your mock seed. Use them for testing or early frontend integration.
