/*
  Warnings:

  - You are about to drop the column `whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNati` on the `buildingDetails` table. All the data in the column will be lost.
  - You are about to drop the column `whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBA` on the `questionnaire` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `storage_Ids` table. All the data in the column will be lost.
  - Added the required column `whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms` to the `buildingDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA` to the `questionnaire` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "storage_Ids" DROP CONSTRAINT "storage_Ids_userId_fkey";

-- AlterTable
ALTER TABLE "buildingDetails" DROP COLUMN "whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNati",
ADD COLUMN     "whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "questionnaire" DROP COLUMN "whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBA",
ADD COLUMN     "whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "storage_Ids" DROP COLUMN "userId";
