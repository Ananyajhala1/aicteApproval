/*
  Warnings:

  - You are about to drop the column `whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNati` on the `buildingDetails` table. All the data in the column will be lost.
  - You are about to drop the column `whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBA` on the `questionnaire` table. All the data in the column will be lost.
  - Added the required column `whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms` to the `buildingDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA` to the `questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `storage_Ids` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "buildingDetails" DROP COLUMN "whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNati",
ADD COLUMN     "whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "questionnaire" DROP COLUMN "whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBA",
ADD COLUMN     "whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "storage_Ids" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "designation" TEXT,
    "address" TEXT,
    "email" TEXT NOT NULL,
    "contactNumber" BIGINT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "storage_Ids" ADD CONSTRAINT "storage_Ids_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
