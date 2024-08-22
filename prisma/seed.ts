import { PrismaClient, Category, Status } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const categoryValues = Object.values(Category);
  const statusValues = Object.values(Status);

  const stories = Array.from({ length: 10 }, (_, index) => ({
    title: `Story Title ${index + 1}`,
    writers: `Writer ${index + 1}`,
    category: categoryValues[Math.floor(Math.random() * categoryValues.length)],
    keyword: [`Keyword${index + 1}`],
    status: statusValues[Math.floor(Math.random() * statusValues.length)],
    chapter: [
      {
        title: `Chapter Title ${index + 1}`,
        lastUpdated: new Date().toISOString(),
        story: `Story content for chapter ${index + 1}.`,
      },
    ],
  }));

  for (const story of stories) {
    await prisma.story.create({
      data: {
        ...story,
        chapter: {
          create: story.chapter,
        },
      },
    });
  }

  console.log("Seeding completed");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
