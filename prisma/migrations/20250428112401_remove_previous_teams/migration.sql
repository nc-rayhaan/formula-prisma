/*
  Warnings:

  - You are about to drop the `PreviousTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PreviousTeam" DROP CONSTRAINT "PreviousTeam_driverId_fkey";

-- DropTable
DROP TABLE "PreviousTeam";
