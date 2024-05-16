/*
  Warnings:

  - A unique constraint covering the columns `[shortLink]` on the table `Links` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Links_shortLink_key" ON "Links"("shortLink");
