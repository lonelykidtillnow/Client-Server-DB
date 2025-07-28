/*
  Warnings:

  - Added the required column `father_age` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `father_name` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `father_occupation` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mother_age` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mother_name` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mother_occupation` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_income` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "father_age" INTEGER NOT NULL,
ADD COLUMN     "father_name" TEXT NOT NULL,
ADD COLUMN     "father_occupation" TEXT NOT NULL,
ADD COLUMN     "mother_age" INTEGER NOT NULL,
ADD COLUMN     "mother_name" TEXT NOT NULL,
ADD COLUMN     "mother_occupation" TEXT NOT NULL,
ADD COLUMN     "total_income" TEXT NOT NULL;
