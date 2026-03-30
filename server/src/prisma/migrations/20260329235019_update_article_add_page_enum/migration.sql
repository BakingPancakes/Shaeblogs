/*
  Warnings:

  - The primary key for the `article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `date` on the `article` table. All the data in the column will be lost.
  - Changed the type of `page` on the `article` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Page" AS ENUM ('SIPS', 'FLICS', 'SIGHTS');

-- AlterTable
ALTER TABLE "article" DROP CONSTRAINT "article_pkey",
DROP COLUMN "date",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "publishedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "summary" DROP NOT NULL,
DROP COLUMN "page",
ADD COLUMN     "page" "Page" NOT NULL,
ADD CONSTRAINT "article_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE INDEX "article_publishedAt_idx" ON "article"("publishedAt");

-- CreateIndex
CREATE INDEX "article_page_idx" ON "article"("page");
