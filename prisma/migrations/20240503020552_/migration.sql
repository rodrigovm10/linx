-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" TEXT,
ADD COLUMN     "username" TEXT,
ALTER COLUMN "email" DROP NOT NULL;
