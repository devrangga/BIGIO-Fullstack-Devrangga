/*
  Warnings:

  - You are about to drop the column `content` on the `Story` table. All the data in the column will be lost.
  - Added the required column `content` to the `Chapter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Story" DROP COLUMN "content";
