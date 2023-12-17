-- CreateTable
CREATE TABLE "storage_Ids" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "storage_Ids_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Institute" (
    "id" SERIAL NOT NULL,
    "currentApplicationNumber" INTEGER,
    "applicationType" TEXT,
    "currentStatus" TEXT,
    "subStstus" TEXT,
    "academicYear" INTEGER,
    "applicationOpenedDate" INTEGER,
    "applicationSubmittedDate" INTEGER,
    "reopenedApplicationDate" INTEGER,
    "appealRequestDate" INTEGER,
    "applicationDontRecieved" BOOLEAN,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Institute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstituteMoreDetails" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "yearOfEstablishment" INTEGER NOT NULL,
    "instituteType" TEXT NOT NULL,
    "addressOfInstitute" TEXT NOT NULL,
    "state_Ut" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "pin" VARCHAR(6) NOT NULL,
    "primaryEmail" TEXT NOT NULL,
    "percentGrantRecievedFromGovernment" INTEGER NOT NULL,
    "forPWD" BOOLEAN NOT NULL,
    "womenInstitute" BOOLEAN NOT NULL,
    "LOIorLOIwithLOA" TEXT NOT NULL,
    "selfFinancedCourses" BOOLEAN NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "InstituteMoreDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subSection" (
    "id" SERIAL NOT NULL,
    "minorityInstitute" BOOLEAN NOT NULL,
    "typeOfMinistry" TEXT NOT NULL,
    "nameOfMinority" TEXT NOT NULL,
    "nameOfMinorityOfLinguistic" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "subSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organisationDetails" (
    "id" SERIAL NOT NULL,
    "nameOfInstitute" TEXT NOT NULL,
    "typeOfInstitute" TEXT NOT NULL,
    "registeredWith" TEXT NOT NULL,
    "regidtrationDate" TEXT NOT NULL,
    "organisationAddress" TEXT NOT NULL,
    "pin" INTEGER NOT NULL,
    "PAN" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "organisationWebsite" TEXT NOT NULL,
    "STDcode" INTEGER NOT NULL,
    "landlineNumber" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "organisationDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trusteeDetails" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "since" TEXT NOT NULL,
    "till" TEXT NOT NULL,
    "mobileNo" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "trusteeDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contactPerson" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT,
    "address" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "postalCode" INTEGER NOT NULL,
    "designation" TEXT NOT NULL,
    "STDcode" INTEGER NOT NULL,
    "landlineNumber" INTEGER,
    "mobileNumber" INTEGER NOT NULL,
    "alternateMobileNumber" INTEGER,
    "emailAddress" TEXT NOT NULL,
    "alternativeEmailAdress" TEXT,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "contactPerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questionnaire" (
    "id" SERIAL NOT NULL,
    "whetherTheInstituteIsHavingApprovalFromCOAorPCIorAAC" BOOLEAN NOT NULL,
    "ifYesPleaseSelectApprovedProgram" TEXT NOT NULL,
    "whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA" BOOLEAN NOT NULL,
    "ifYouAreOnExistingInstitutionRunningPGDMorPGCM" INTEGER,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "questionnaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "programDetails" (
    "id" SERIAL NOT NULL,
    "programme" TEXT NOT NULL,
    "anyOtherNewProgram" TEXT,
    "yearOfStart" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "programDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courseDetails" (
    "id" SERIAL NOT NULL,
    "programme" TEXT NOT NULL,
    "affiliatingUniversity" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "nameOfTheCourse" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "levelOfCourse" TEXT NOT NULL,
    "yearStarted" TEXT NOT NULL,
    "shift" TEXT NOT NULL,
    "fullTimeorPartTime" TEXT NOT NULL,
    "intakeApplicableFor" INTEGER NOT NULL,
    "applyingFor" TEXT NOT NULL,
    "modeOFCounduct" TEXT NOT NULL,
    "courseType" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "courseDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "landDetails" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "totalAreaInAcres" INTEGER NOT NULL,
    "numberOfPieces" INTEGER NOT NULL,
    "lattitudeDegree" INTEGER NOT NULL,
    "londitudeDegree" INTEGER NOT NULL,
    "landRestrictedWith" TEXT NOT NULL,
    "landPieceArea1InAcres" DOUBLE PRECISION NOT NULL,
    "latitudeMinute" INTEGER NOT NULL,
    "longitudeMinute" INTEGER NOT NULL,
    "ownwershipDetails" TEXT NOT NULL,
    "landPieceArea2InAcres" DOUBLE PRECISION NOT NULL,
    "landUseCertificateIssuedBy" TEXT NOT NULL,
    "landUseCertificateIssueDate" TEXT NOT NULL,
    "landInNorthernHillyArea" BOOLEAN NOT NULL,
    "isLandMortgated" BOOLEAN NOT NULL,
    "mortgatedPurpose" TEXT NOT NULL,
    "dateIFRegistration" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "landDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moreLandInformation" (
    "id" SERIAL NOT NULL,
    "landRegistrationNumber" INTEGER NOT NULL,
    "dateOfRegistration" TEXT NOT NULL,
    "areaOfLand" DOUBLE PRECISION NOT NULL,
    "khosraNumbers" INTEGER NOT NULL,
    "plotNumber" INTEGER NOT NULL,
    "landSituatedAt" TEXT NOT NULL,
    "landRegisteredInTheNameOf" TEXT NOT NULL,
    "ownershiporGovernanentLease" TEXT NOT NULL,
    "landUseCertificateIssued" BOOLEAN NOT NULL,
    "landUseCertificationAuthority" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "moreLandInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buildingDetails" (
    "id" SERIAL NOT NULL,
    "buildingDetails" TEXT NOT NULL,
    "totalBuiltUpAreaReady" DOUBLE PRECISION NOT NULL,
    "activitiesInTheBuildingOtherThanCoursesApprovedByAICTE" TEXT NOT NULL,
    "whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms" BOOLEAN NOT NULL,
    "totalCarpetAreaInstructionalReady" DOUBLE PRECISION NOT NULL,
    "totalCarpetAreaAdministrativeReady" DOUBLE PRECISION NOT NULL,
    "accessAndCirculationArea" DOUBLE PRECISION NOT NULL,
    "totalBuiltUpAreaPlanned" DOUBLE PRECISION NOT NULL,
    "totalCarpetAreaAmenitiesReady" DOUBLE PRECISION NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "buildingDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buildingDetailsMoreDetails" (
    "id" SERIAL NOT NULL,
    "buildingName" TEXT NOT NULL,
    "buildingApprovalNumber" INTEGER NOT NULL,
    "sanctiondBuildUpArea" INTEGER NOT NULL,
    "constructedBuildUpArea" INTEGER NOT NULL,
    "approvedCarpetAreaInstructional" INTEGER NOT NULL,
    "constructedCarpetAreaInstructional" INTEGER NOT NULL,
    "approvedCarpetAreaAdministrative" INTEGER NOT NULL,
    "constructiveCorpetAreaAdministrative" INTEGER NOT NULL,
    "approvedCarpetAreaAmenities" INTEGER NOT NULL,
    "constructedCarpetAreaAmenities" INTEGER NOT NULL,
    "totalAreaApproved" INTEGER NOT NULL,
    "totalAreaConstructed" INTEGER NOT NULL,
    "activitiesConductedInTheBuilding" TEXT NOT NULL,
    "NonAICTEApprovedCoursesRunInTheBuilding" TEXT,
    "buildingPlanApprovalAuthority" TEXT NOT NULL,
    "buildingPlanApprovalDate" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "buildingDetailsMoreDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "laboratoryDetails" (
    "id" SERIAL NOT NULL,
    "Programme" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "Course" TEXT NOT NULL,
    "Level" TEXT NOT NULL,
    "isItResearchCabForPGCourses" BOOLEAN NOT NULL,
    "nameOfTheLaboratory" TEXT NOT NULL,
    "lobMeyerEquipments" TEXT NOT NULL,
    "buildingName" TEXT NOT NULL,
    "buildingNumber" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "laboratoryDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "administrativeArea" (
    "id" SERIAL NOT NULL,
    "roomID" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "buildingName" TEXT NOT NULL,
    "buildingNumber" INTEGER NOT NULL,
    "readinessofFlooring" TEXT NOT NULL,
    "readinessofWallAndPainting" TEXT NOT NULL,
    "readinessofElectrificationAndLightning" TEXT NOT NULL,
    "readinessofFurniture" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "administrativeArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ametiesArea" (
    "id" SERIAL NOT NULL,
    "roomID" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "bildingName" TEXT NOT NULL,
    "buildingNumber" INTEGER NOT NULL,
    "readinessOfFlooring" TEXT NOT NULL,
    "readinessOfWallandPainting" TEXT NOT NULL,
    "readinessOfElectrificationAndLighting" TEXT NOT NULL,
    "readinessOfFurniture" TEXT NOT NULL,
    "airConditioning" TEXT NOT NULL,
    "siteChangeFlag" BOOLEAN NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "ametiesArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "circulationArea" (
    "id" SERIAL NOT NULL,
    "areaType" TEXT NOT NULL,
    "averageCarpetArea" DOUBLE PRECISION NOT NULL,
    "flooring" BOOLEAN NOT NULL,
    "paintingDone" TEXT NOT NULL,
    "electrifcationAndLightning" TEXT NOT NULL,
    "buildingName" TEXT NOT NULL,
    "buildingNumber" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "circulationArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instructionalArea" (
    "id" SERIAL NOT NULL,
    "programme" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "roomID" TEXT NOT NULL,
    "areaOfRoom" INTEGER NOT NULL,
    "buildingName" TEXT NOT NULL,
    "readinessOfFlooring" TEXT NOT NULL,
    "readinessOfWallAndPainting" TEXT NOT NULL,
    "readinessOfElectrificationAndLighting" TEXT NOT NULL,
    "readinessOfFurnitureOrFixtures" TEXT NOT NULL,
    "airConditioning" TEXT NOT NULL,

    CONSTRAINT "instructionalArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "infrastructuralArea" (
    "id" SERIAL NOT NULL,
    "roomType" TEXT NOT NULL,
    "roomID" TEXT NOT NULL,
    "areaOfRoom" INTEGER NOT NULL,
    "readinessOfFlooring" TEXT NOT NULL,
    "readinessOfWallAndPainting" TEXT NOT NULL,
    "readinessOfElectrificationAndLighting" TEXT NOT NULL,
    "readinessOfFurnitureOrFixtures" TEXT NOT NULL,
    "airConditioning" TEXT NOT NULL,
    "buildingName" TEXT NOT NULL,
    "buildingNumber" INTEGER NOT NULL,

    CONSTRAINT "infrastructuralArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hostelFacilities" (
    "id" SERIAL NOT NULL,
    "whetherTheHostelFacilitiyIsAvailable" BOOLEAN NOT NULL,
    "girlsHostel" BOOLEAN NOT NULL,
    "numberOfRooms" INTEGER NOT NULL,
    "hostelCapacity" INTEGER NOT NULL,
    "boysHostel" BOOLEAN NOT NULL,
    "numberOfRoomsForBoys" INTEGER NOT NULL,
    "totalCapacity" INTEGER NOT NULL,

    CONSTRAINT "hostelFacilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "computationalFacilites" (
    "id" SERIAL NOT NULL,
    "PClaptopsExclusivelyAvailableToStudents" INTEGER NOT NULL,
    "PClaptopsAvailableInLibrary" INTEGER NOT NULL,
    "PClaptopsAvailableInAdministrativeOffice" INTEGER NOT NULL,
    "PClaptopsAvailableForFacultyMember" INTEGER NOT NULL,
    "numberOfPcInLanguageLab" INTEGER NOT NULL,
    "internetBandwidthInMbps" INTEGER NOT NULL,
    "numberOfLegalApplicationSoftware" INTEGER NOT NULL,
    "printersAvailableToStudents" INTEGER NOT NULL,
    "numberOfA1SizeColorPrinter" INTEGER NOT NULL,
    "numberOfLegalSystemSoftware" INTEGER NOT NULL,
    "numberOfOpenSourceSoftware" INTEGER NOT NULL,
    "numberOfPropsitory" INTEGER NOT NULL,

    CONSTRAINT "computationalFacilites_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Institute" ADD CONSTRAINT "Institute_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteMoreDetails" ADD CONSTRAINT "InstituteMoreDetails_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subSection" ADD CONSTRAINT "subSection_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organisationDetails" ADD CONSTRAINT "organisationDetails_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trusteeDetails" ADD CONSTRAINT "trusteeDetails_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contactPerson" ADD CONSTRAINT "contactPerson_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questionnaire" ADD CONSTRAINT "questionnaire_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programDetails" ADD CONSTRAINT "programDetails_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseDetails" ADD CONSTRAINT "courseDetails_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landDetails" ADD CONSTRAINT "landDetails_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moreLandInformation" ADD CONSTRAINT "moreLandInformation_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buildingDetails" ADD CONSTRAINT "buildingDetails_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buildingDetailsMoreDetails" ADD CONSTRAINT "buildingDetailsMoreDetails_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laboratoryDetails" ADD CONSTRAINT "laboratoryDetails_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "administrativeArea" ADD CONSTRAINT "administrativeArea_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ametiesArea" ADD CONSTRAINT "ametiesArea_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "circulationArea" ADD CONSTRAINT "circulationArea_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "storage_Ids"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
