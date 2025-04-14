/*
  Warnings:

  - Added the required column `gotFastestLap` to the `RaceResult` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RaceResult" ADD COLUMN     "gotFastestLap" BOOLEAN NOT NULL;
