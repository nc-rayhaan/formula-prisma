# Formula Prisma 🏎️ 🏁

This sprint is designed to help you get hands-on experience with **Prisma** by working with real world Formula 1 data from last year's season!

You'll build queries and explore relationships in a database full of F1 drivers, teams, circuits, and race results!

---

## 🚀 Setup Instructions

Follow these steps to get your environment ready:

### 1. Clone the Repository

First, clone the project onto your local machine:

```bash
git clone https://github.com/nc-rayhaan/formula-prisma.git
cd formula-prisma
```

### 2. Install Dependencies

Install all necessary dependencies by running:

```bash
npm install
```

### 3. Create a .env File

You'll need a PostgreSQL database connection.
Create a .env file in the root of the project and add the following:

```
DATABASE_URL="postgresql://username:password@localhost:5432/f1db?schema=public"
```

Be sure to replace the `username` and `password` with your own PostgreSQL details. If you are on a Mac, your password should be the same as your username.

### 4. Run Migrations

```
npx prisma migrate dev
```

This sets up all the tables needed for teams, drivers, races, circuits, and results.

## How to use

Tests have been written to help you work towards the correct solutions. Please remove the `.skip` as you work your way through them. The tests can be run with:

```
npm test
```

To help you with the exercises, you should keep the `prisma.schema` file open which shows the models and relations. These will become tables after the migrations. Please also use the Prisma docs to help you choose the appropriate querying method:

https://www.prisma.io/docs/orm/prisma-client/queries/crud#read

There are 6 exercises so far in `sprint.ts`, but please do check again in the future as there will be more!

🔴🔴🔴🔴🔴
**Lights out and away you go!** 🏎️💨
