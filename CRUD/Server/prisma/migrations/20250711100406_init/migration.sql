-- CreateTable
CREATE TABLE "Student" (
    "roll_no" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "std" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "marks" INTEGER NOT NULL,
    "percentage" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("roll_no")
);
