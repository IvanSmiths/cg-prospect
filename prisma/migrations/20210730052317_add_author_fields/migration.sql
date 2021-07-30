/*
  Warnings:

  - Added the required column `desc` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "artstation" TEXT,
ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "img" TEXT NOT NULL,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "web" TEXT,
ALTER COLUMN "name" SET NOT NULL;
