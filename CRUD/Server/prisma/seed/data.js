const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
  const sections = ['A', 'B', 'C'];
  const standards = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  const occupations = ['Teacher', 'Engineer', 'Doctor', 'Driver', 'Farmer', 'Shopkeeper', 'Tailor'];
  const incomes = ['₹10,000', '₹15,000', '₹20,000', '₹25,000', '₹30,000', '₹35,000', '₹40,000+'];

  for (let i = 0; i < 50; i++) {
    const marks = faker.number.int({ min: 200, max: 500 });
    const percentage = Math.round((marks / 500) * 100);

    await prisma.student.create({
      data: {
        name: faker.person.fullName(),
        std: faker.helpers.arrayElement(standards),
        section: faker.helpers.arrayElement(sections),
        marks: marks,
        percentage: percentage,
        father_name: faker.person.fullName(),
        father_age: faker.number.int({ min: 35, max: 60 }),
        father_occupation: faker.helpers.arrayElement(occupations),
        mother_name: faker.person.fullName(),
        mother_age: faker.number.int({ min: 30, max: 55 }),
        mother_occupation: faker.helpers.arrayElement(occupations),
        total_income: faker.helpers.arrayElement(incomes),
      },
    });
  }
}

main()
  .then(() => {
    console.log('✅ Seeded 50 students with parent info');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
