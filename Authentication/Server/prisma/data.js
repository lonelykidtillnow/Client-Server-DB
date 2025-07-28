// seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: 'alice@example.com',
        password: 'alice123',
        name: 'Alice',
        phoneno: '9876543210'
      },
      {
        email: 'bob@example.com',
        password: 'bob123',
        name: 'Bob',
        phoneno: '9123456789'
      },
      {
        email: 'charlie@example.com',
        password: 'charlie123',
        name: 'Charlie',
        phoneno: '9012345678'
      }
    ],
    skipDuplicates: true,
  });

  console.log('✅ Users seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
