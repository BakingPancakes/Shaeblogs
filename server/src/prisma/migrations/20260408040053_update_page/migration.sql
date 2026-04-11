/*
  Warnings:

  - The values [SIGHTS] on the enum `Page` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Page_new" AS ENUM ('SIPS', 'FLICS', 'FRIENDS', 'EATS');
ALTER TABLE "article" ALTER COLUMN "page" TYPE "Page_new" USING ("page"::text::"Page_new");
ALTER TYPE "Page" RENAME TO "Page_old";
ALTER TYPE "Page_new" RENAME TO "Page";
DROP TYPE "public"."Page_old";
COMMIT;
