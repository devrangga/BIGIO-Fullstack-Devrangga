// prisma/seed.ts

import { PrismaClient, Category, Status } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const stories = await Promise.all(
    Array.from({ length: 15 }).map((_, index) =>
      prisma.story.create({
        data: {
          title: `Story Title ${index + 1}`,
          writers: `Writer ${index + 1}`,
          category:
            index % 3 === 0
              ? Category.Financial
              : index % 3 === 1
              ? Category.Technology
              : Category.Health,
          keyword: [`keyword${index + 1}`, `keyword${index + 2}`],
          status: index % 2 === 0 ? Status.Draft : Status.Publish,
          chapter: {
            create: Array.from({ length: 3 }).map((_, chapterIndex) => ({
              title: `Chapter ${chapterIndex + 1} of Story ${index + 1}`,
              content: "BlaBlaBlaBlaBlaBla",
              lastUpdated: new Date(),
            })),
          },
        },
      })
    )
  );
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
