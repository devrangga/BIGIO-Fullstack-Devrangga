-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Financial', 'Technology', 'Health');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Draft', 'Publish');

-- CreateTable
CREATE TABLE "Story" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "writers" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "keyword" TEXT[],
    "status" "Status" NOT NULL,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "lastUpdated" TIMESTAMP(3) NOT NULL,
    "storyId" TEXT NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
