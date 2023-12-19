// const project =require('../model/project');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createNewInstitute = async (req, res) => {
  
    try {
        const newStorageIds = await prisma.storage_Ids.create({
            data: {
             
            },
          });
      
        const {
            currentApplicationNumber,
            applicationType,
            currentStatus,
            subStstus,
            academicYear,
            applicationOpenedDate,
            applicationSubmittedDate,
            reopenedApplicationDate,
            appealRequestDate,
            applicationDontRecieved,
           
           
          
           
        } = req.body;
         
         
        // Check if required fields are missing
        // if (!authorId) {
        //     return res.status(400).json({ 'message': 'Author ID is required' });
        // }

        // Creating a new entry for Institute
        await prisma.institute.create({
            data: {
                currentApplicationNumber,
                applicationType,
                currentStatus,
                subStstus,
                academicYear,
                applicationOpenedDate,
                applicationSubmittedDate,
                reopenedApplicationDate,
                appealRequestDate,
                applicationDontRecieved,
                authorId: newStorageIds.id
               
                }
        
         
  });

  
        // await prisma.institute.create({
        //     data: {
        //         currentApplicationNumber,
        //         applicationType,
        //         currentStatus,
        //         subStstus,
        //         academicYear,
        //         applicationOpenedDate,
        //         applicationSubmittedDate,
        //         reopenedApplicationDate,
        //         appealRequestDate,
        //         applicationDontRecieved,
        //         author: {
        //             connect: {
        //                 id: authorId
        //             }
        //         }
        //     }
        // });

        console.log('New Institute entry created successfully.');
        res.status(201).json({ 'message': 'New Institute entry created successfully.' });
    } catch (error) {
        console.error('Error creating Institute:', error);
        res.status(500).json({ 'error': 'Error creating Institute' });
    } finally {
        await prisma.$disconnect();
    }
};

const createNewInstituteMoreDetails = async (req, res) => {
    try {
        const {
            name,
            yearOfEstablishment,
            instituteType,
            addressOfInstitute,
            state_Ut,
            district,
            town,
            pin,
            primaryEmail,
            percentGrantRecievedFromGovernment,
            forPWD,
            womenInstitute,
            LOIorLOIwithLOA,
            selfFinancedCourses,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!name || !yearOfEstablishment || !instituteType || !addressOfInstitute || !state_Ut || !district || !town || !pin || !primaryEmail || !percentGrantRecievedFromGovernment || !LOIorLOIwithLOA) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for InstituteMoreDetails
        await prisma.instituteMoreDetails.create({
            data: {
                name,
                yearOfEstablishment,
                instituteType,
                addressOfInstitute,
                state_Ut,
                district,
                town,
                pin,
                primaryEmail,
                percentGrantRecievedFromGovernment,
                forPWD,
                womenInstitute,
                LOIorLOIwithLOA,
                selfFinancedCourses,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New InstituteMoreDetails entry created successfully.');
        res.status(201).json({ 'message': 'New InstituteMoreDetails entry created successfully.' });
    } catch (error) {
        console.error('Error creating InstituteMoreDetails:', error);
        res.status(500).json({ 'error': 'Error creating InstituteMoreDetails' });
    } finally {
        await prisma.$disconnect();
    }
};
const createNewSubSection = async (req, res) => {
    try {
        const {
            minorityInstitute,
            typeOfMinistry,
            nameOfMinority,
            nameOfMinorityOfLinguistic,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing when minorityInstitute is true
        if (minorityInstitute && (!typeOfMinistry || !nameOfMinority || !nameOfMinorityOfLinguistic)) {
            return res.status(400).json({ 'message': 'Required fields for minority institute are missing' });
        }

        // Creating a new entry for subSection
        await prisma.subSection.create({
            data: {
                minorityInstitute,
                typeOfMinistry: minorityInstitute ? typeOfMinistry : null,
                nameOfMinority: minorityInstitute ? nameOfMinority : null,
                nameOfMinorityOfLinguistic: minorityInstitute ? nameOfMinorityOfLinguistic : null,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New subSection entry created successfully.');
        res.status(201).json({ 'message': 'New subSection entry created successfully.' });
    } catch (error) {
        console.error('Error creating subSection:', error);
        res.status(500).json({ 'error': 'Error creating subSection' });
    } finally {
        await prisma.$disconnect();
    }
};
const createNewOrganisationDetails = async (req, res) => {
    try {
        const {
            nameOfInstitute,
            typeOfInstitute,
            registeredWith,
            registrationDate,
            organisationAddress,
            pin,
            PAN,
            state,
            district,
            town,
            organisationWebsite,
            STDcode,
            landlineNumber,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!nameOfInstitute || !typeOfInstitute || !registeredWith || !registrationDate || !organisationAddress || !pin || !PAN || !state || !district || !town || !organisationWebsite || !STDcode || !landlineNumber) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for organisationDetails
        await prisma.organisationDetails.create({
            data: {
                nameOfInstitute,
                typeOfInstitute,
                registeredWith,
                regidtrationDate: registrationDate, // Ensure the correct property name
                organisationAddress,
                pin,
                PAN,
                state,
                district,
                town,
                organisationWebsite,
                STDcode,
                landlineNumber,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New organisationDetails entry created successfully.');
        res.status(201).json({ 'message': 'New organisationDetails entry created successfully.' });
    } catch (error) {
        console.error('Error creating organisationDetails:', error);
        res.status(500).json({ 'error': 'Error creating organisationDetails' });
    } finally {
        await prisma.$disconnect();
    }
};
const createNewTrusteeDetails = async (req, res) => {
    try {
        const {
            name,
            designation,
            since,
            till,
            mobileNo,
            email,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!name || !designation || !since || !till || !mobileNo || !email) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Regular expression to validate email (ending with @gmail.com)
        const emailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;

        // Check if the email format is valid
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 'message': 'Invalid email format. Please use Gmail.' });
        }

        // Creating a new entry for trusteeDetails
        await prisma.trusteeDetails.create({
            data: {
                name,
                designation,
                since, // Ensure this field accepts a date format
                till, // Ensure this field accepts a date format
                mobileNo,
                email,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New trusteeDetails entry created successfully.');
        res.status(201).json({ 'message': 'New trusteeDetails entry created successfully.' });
    } catch (error) {
        console.error('Error creating trusteeDetails:', error);
        res.status(500).json({ 'error': 'Error creating trusteeDetails' });
    } finally {
        await prisma.$disconnect();
    }
};
const createNewContactPerson = async (req, res) => {
    try {
        const {
            Title,
            firstName,
            middleName,
            lastName,
            address,
            state,
            district,
            town,
            postalCode,
            designation,
            STDcode,
            landlineNumber,
            mobileNumber,
            alternateMobileNumber,
            emailAddress,
            alternativeEmailAddress,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!Title || !firstName || !address || !state || !district || !town || !postalCode || !designation || !STDcode || !mobileNumber || !emailAddress) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Regular expression to validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if the email format is valid
        if (!emailRegex.test(emailAddress)) {
            return res.status(400).json({ 'message': 'Invalid email format.' });
        }

        // Check if postal code length is not 6
        if (String(postalCode).length !== 6) {
            return res.status(400).json({ 'message': 'Postal code should be of length 6.' });
        }

        // Creating a new entry for contactPerson
        await prisma.contactPerson.create({
            data: {
                Title,
                firstName,
                middleName: middleName || null,
                lastName: lastName || null,
                address,
                state,
                district,
                town,
                postalCode,
                designation,
                STDcode,
                landlineNumber: landlineNumber || null,
                mobileNumber,
                alternateMobileNumber: alternateMobileNumber || null,
                emailAddress,
                alternativeEmailAddress: alternativeEmailAddress || null,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New contactPerson entry created successfully.');
        res.status(201).json({ 'message': 'New contactPerson entry created successfully.' });
    } catch (error) {
        console.error('Error creating contactPerson:', error);
        res.status(500).json({ 'error': 'Error creating contactPerson' });
    } finally {
        await prisma.$disconnect();
    }
};
const createNewQuestionnaire = async (req, res) => {
    try {
        const {
            whetherTheInstituteIsHavingApprovalFromCOAorPCIorAAC,
            ifYesPleaseSelectApprovedProgram,
            whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA,
            ifYouAreOnExistingInstitutionRunningPGDMorPGCM,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Creating a new entry for questionnaire
        await prisma.questionnaire.create({
            data: {
                whetherTheInstituteIsHavingApprovalFromCOAorPCIorAAC,
                ifYesPleaseSelectApprovedProgram: whetherTheInstituteIsHavingApprovalFromCOAorPCIorAAC ? ifYesPleaseSelectApprovedProgram : null,
                whetheTheInstituteIsANonTechnicalInstituteSeekingApprovalForMBAorMCA,
                ifYouAreOnExistingInstitutionRunningPGDMorPGCM: ifYouAreOnExistingInstitutionRunningPGDMorPGCM || null,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New questionnaire entry created successfully.');
        res.status(201).json({ 'message': 'New questionnaire entry created successfully.' });
    } catch (error) {
        console.error('Error creating questionnaire:', error);
        res.status(500).json({ 'error': 'Error creating questionnaire' });
    } finally {
        await prisma.$disconnect();
    }
};
const createNewProgramDetails = async (req, res) => {
    try {
        const {
            programme,
            anyOtherNewProgram,
            yearOfStart,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!programme || !yearOfStart) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for programDetails
        await prisma.programDetails.create({
            data: {
                programme,
                anyOtherNewProgram: anyOtherNewProgram || null,
                yearOfStart, // Ensure this field accepts a date format
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New programDetails entry created successfully.');
        res.status(201).json({ 'message': 'New programDetails entry created successfully.' });
    } catch (error) {
        console.error('Error creating programDetails:', error);
        res.status(500).json({ 'error': 'Error creating programDetails' });
    } finally {
        await prisma.$disconnect();
    }
};
const createNewCourseDetails = async (req, res) => {
    try {
        const {
            programme,
            affiliatingUniversity,
            department,
            nameOfTheCourse,
            duration,
            levelOfCourse,
            yearStarted,
            shift,
            fullTimeorPartTime,
            intakeApplicableFor,
            applyingFor,
            modeOFCounduct,
            courseType,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!programme || !affiliatingUniversity || !department || !nameOfTheCourse || !duration || !levelOfCourse || !yearStarted || !modeOFCounduct || !courseType || !applyingFor || !fullTimeorPartTime) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for courseDetails
        await prisma.courseDetails.create({
            data: {
                programme,
                affiliatingUniversity,
                department,
                nameOfTheCourse,
                duration,
                levelOfCourse,
                yearStarted,
                shift: modeOFCounduct === 'regular' ? shift || null : null,
                fullTimeorPartTime,
                intakeApplicableFor,
                applyingFor,
                modeOFCounduct,
                courseType,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New courseDetails entry created successfully.');
        res.status(201).json({ 'message': 'New courseDetails entry created successfully.' });
    } catch (error) {
        console.error('Error creating courseDetails:', error);
        res.status(500).json({ 'error': 'Error creating courseDetails' });
    } finally {
        await prisma.$disconnect();
    }
};
const createNewLandDetails = async (req, res) => {
    try {
        const {
            location,
            latitude,
            longitude,
            totalAreaInAcres,
            numberOfPieces,
            lattitudeDegree,
            londitudeDegree,
            landRestrictedWith,
            landPieceArea1InAcres,
            latitudeMinute,
            longitudeMinute,
            ownwershipDetails,
            landPieceArea2InAcres,
            landUseCertificateIssuedBy,
            landUseCertificateIssueDate,
            landInNorthernHillyArea,
            isLandMortgated,
            mortgatedPurpose,
            dateIFRegistration,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!location || !latitude || !longitude || !totalAreaInAcres || !numberOfPieces || !lattitudeDegree || !londitudeDegree || !landRestrictedWith || !landPieceArea1InAcres || !latitudeMinute || !longitudeMinute || !ownwershipDetails) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for landDetails
        await prisma.landDetails.create({
            data: {
                location,
                latitude,
                longitude,
                totalAreaInAcres,
                numberOfPieces,
                lattitudeDegree,
                londitudeDegree,
                landRestrictedWith,
                landPieceArea1InAcres,
                latitudeMinute,
                longitudeMinute,
                ownwershipDetails,
                landPieceArea2InAcres: numberOfPieces === 2 ? landPieceArea2InAcres || null : null,
                landUseCertificateIssuedBy,
                landUseCertificateIssueDate,
                landInNorthernHillyArea,
                isLandMortgated,
                mortgatedPurpose: isLandMortgated ? mortgatedPurpose || null : null,
                dateIFRegistration: isLandMortgated ? dateIFRegistration || null : null,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New landDetails entry created successfully.');
        res.status(201).json({ 'message': 'New landDetails entry created successfully.' });
    } catch (error) {
        console.error('Error creating landDetails:', error);
        res.status(500).json({ 'error': 'Error creating landDetails' });
    } finally {
        await prisma.$disconnect();
    }
};
const createMoreLandInformation = async (req, res) => {
    try {
        const {
            landRegistrationNumber,
            dateOfRegistration,
            areaOfLand,
            khosraNumbers,
            plotNumber,
            landSituatedAt,
            landRegisteredInTheNameOf,
            ownershiporGovernanentLease,
            landUseCertificateIssued,
            landUseCertificationAuthority,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!landRegistrationNumber || !dateOfRegistration || !areaOfLand || !khosraNumbers || !plotNumber || !landSituatedAt || !landRegisteredInTheNameOf || !ownershiporGovernanentLease || !landUseCertificateIssued) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for moreLandInformation
        await prisma.moreLandInformation.create({
            data: {
                landRegistrationNumber,
                dateOfRegistration,
                areaOfLand,
                khosraNumbers,
                plotNumber,
                landSituatedAt,
                landRegisteredInTheNameOf,
                ownershiporGovernanentLease,
                landUseCertificateIssued,
                landUseCertificationAuthority: landUseCertificateIssued ? landUseCertificationAuthority || null : null,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New moreLandInformation entry created successfully.');
        res.status(201).json({ 'message': 'New moreLandInformation entry created successfully.' });
    } catch (error) {
        console.error('Error creating moreLandInformation:', error);
        res.status(500).json({ 'error': 'Error creating moreLandInformation' });
    } finally {
        await prisma.$disconnect();
    }
};
const createNewBuildingDetails = async (req, res) => {
    try {
        const {
            buildingDetails,
            totalBuiltUpAreaReady,
            activitiesInTheBuildingOtherThanCoursesApprovedByAICTE,
            whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms,
            totalCarpetAreaInstructionalReady,
            totalCarpetAreaAdministrativeReady,
            accessAndCirculationArea,
            totalBuiltUpAreaPlanned,
            totalCarpetAreaAmenitiesReady,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!buildingDetails || !totalBuiltUpAreaReady || !activitiesInTheBuildingOtherThanCoursesApprovedByAICTE || !whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms || !totalCarpetAreaInstructionalReady || !totalCarpetAreaAdministrativeReady || !accessAndCirculationArea || !totalBuiltUpAreaPlanned || !totalCarpetAreaAmenitiesReady) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for buildingDetails
        await prisma.buildingDetails.create({
            data: {
                buildingDetails,
                totalBuiltUpAreaReady,
                activitiesInTheBuildingOtherThanCoursesApprovedByAICTE,
                whetherAccessCirculationAreaAndToiletAreaAreMaintainedAsPerNationalBuildingCodeNorms,
                totalCarpetAreaInstructionalReady,
                totalCarpetAreaAdministrativeReady,
                accessAndCirculationArea,
                totalBuiltUpAreaPlanned,
                totalCarpetAreaAmenitiesReady,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New buildingDetails entry created successfully.');
        res.status(201).json({ 'message': 'New buildingDetails entry created successfully.' });
    } catch (error) {
        console.error('Error creating buildingDetails:', error);
        res.status(500).json({ 'error': 'Error creating buildingDetails' });
    } finally {
        await prisma.$disconnect();
    }
};
const createBuildingDetailsMoreDetails = async (req, res) => {
    try {
        const {
            buildingName,
            buildingApprovalNumber,
            sanctiondBuildUpArea,
            constructedBuildUpArea,
            approvedCarpetAreaInstructional,
            constructedCarpetAreaInstructional,
            approvedCarpetAreaAdministrative,
            constructiveCorpetAreaAdministrative,
            approvedCarpetAreaAmenities,
            constructedCarpetAreaAmenities,
            totalAreaApproved,
            totalAreaConstructed,
            activitiesConductedInTheBuilding,
            NonAICTEApprovedCoursesRunInTheBuilding,
            buildingPlanApprovalAuthority,
            buildingPlanApprovalDate,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!buildingName || !buildingApprovalNumber || !sanctiondBuildUpArea || !constructedBuildUpArea || !approvedCarpetAreaInstructional || !constructedCarpetAreaInstructional || !approvedCarpetAreaAdministrative || !constructiveCorpetAreaAdministrative || !approvedCarpetAreaAmenities || !constructedCarpetAreaAmenities || !totalAreaApproved || !totalAreaConstructed || !activitiesConductedInTheBuilding || !buildingPlanApprovalAuthority || !buildingPlanApprovalDate) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for buildingDetailsMoreDetails
        await prisma.buildingDetailsMoreDetails.create({
            data: {
                buildingName,
                buildingApprovalNumber,
                sanctiondBuildUpArea,
                constructedBuildUpArea,
                approvedCarpetAreaInstructional,
                constructedCarpetAreaInstructional,
                approvedCarpetAreaAdministrative,
                constructiveCorpetAreaAdministrative,
                approvedCarpetAreaAmenities,
                constructedCarpetAreaAmenities,
                totalAreaApproved,
                totalAreaConstructed,
                activitiesConductedInTheBuilding,
                NonAICTEApprovedCoursesRunInTheBuilding: NonAICTEApprovedCoursesRunInTheBuilding || null,
                buildingPlanApprovalAuthority,
                buildingPlanApprovalDate,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New buildingDetailsMoreDetails entry created successfully.');
        res.status(201).json({ 'message': 'New buildingDetailsMoreDetails entry created successfully.' });
    } catch (error) {
        console.error('Error creating buildingDetailsMoreDetails:', error);
        res.status(500).json({ 'error': 'Error creating buildingDetailsMoreDetails' });
    } finally {
        await prisma.$disconnect();
    }
};
const createLaboratoryDetails = async (req, res) => {
    try {
        const {
            Programme,
            department,
            Course,
            Level,
            isItResearchCabForPGCourses,
            nameOfTheLaboratory,
            lobMeyerEquipments,
            buildingName,
            buildingNumber,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!Programme || !department || !Course || !Level || !isItResearchCabForPGCourses || !nameOfTheLaboratory || !lobMeyerEquipments || !buildingName || !buildingNumber) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for laboratoryDetails
        await prisma.laboratoryDetails.create({
            data: {
                Programme,
                department,
                Course,
                Level,
                isItResearchCabForPGCourses,
                nameOfTheLaboratory,
                lobMeyerEquipments,
                buildingName,
                buildingNumber,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New laboratoryDetails entry created successfully.');
        res.status(201).json({ 'message': 'New laboratoryDetails entry created successfully.' });
    } catch (error) {
        console.error('Error creating laboratoryDetails:', error);
        res.status(500).json({ 'error': 'Error creating laboratoryDetails' });
    } finally {
        await prisma.$disconnect();
    }
};
const createAdministrativeArea = async (req, res) => {
    try {
        const {
            roomID,
            roomType,
            area,
            buildingName,
            buildingNumber,
            readinessofFlooring,
            readinessofWallAndPainting,
            readinessofElectrificationAndLightning,
            readinessofFurniture,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!roomID || !roomType || !area || !buildingName || !buildingNumber || !readinessofFlooring || !readinessofWallAndPainting || !readinessofElectrificationAndLightning || !readinessofFurniture) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for administrativeArea
        await prisma.administrativeArea.create({
            data: {
                roomID,
                roomType,
                area,
                buildingName,
                buildingNumber,
                readinessofFlooring,
                readinessofWallAndPainting,
                readinessofElectrificationAndLightning,
                readinessofFurniture,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New administrativeArea entry created successfully.');
        res.status(201).json({ 'message': 'New administrativeArea entry created successfully.' });
    } catch (error) {
        console.error('Error creating administrativeArea:', error);
        res.status(500).json({ 'error': 'Error creating administrativeArea' });
    } finally {
        await prisma.$disconnect();
    }
};
const createAmetiesArea = async (req, res) => {
    try {
        const {
            roomID,
            roomType,
            area,
            buildingName,
            buildingNumber,
            readinessOfFlooring,
            readinessOfWallandPainting,
            readinessOfElectrificationAndLighting,
            readinessOfFurniture,
            airConditioning,
            siteChangeFlag,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!roomID || !roomType || !area || !buildingName || !buildingNumber || !readinessOfFlooring || !readinessOfWallandPainting || !readinessOfElectrificationAndLighting || !readinessOfFurniture || !airConditioning || !siteChangeFlag) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for ametiesArea
        await prisma.ametiesArea.create({
            data: {
                roomID,
                roomType,
                area,
                buildingName,
                buildingNumber,
                readinessOfFlooring,
                readinessOfWallandPainting,
                readinessOfElectrificationAndLighting,
                readinessOfFurniture,
                airConditioning,
                siteChangeFlag,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New ametiesArea entry created successfully.');
        res.status(201).json({ 'message': 'New ametiesArea entry created successfully.' });
    } catch (error) {
        console.error('Error creating ametiesArea:', error);
        res.status(500).json({ 'error': 'Error creating ametiesArea' });
    } finally {
        await prisma.$disconnect();
    }
};
const createCirculationArea = async (req, res) => {
    try {
        const {
            areaType,
            averageCarpetArea,
            flooring,
            paintingDone,
            electrifcationAndLightning,
            buildingName,
            buildingNumber,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!areaType || !averageCarpetArea || flooring === undefined || !paintingDone || !electrifcationAndLightning || !buildingName || !buildingNumber) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for circulationArea
        await prisma.circulationArea.create({
            data: {
                areaType,
                averageCarpetArea,
                flooring,
                paintingDone,
                electrifcationAndLightning,
                buildingName,
                buildingNumber,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New circulationArea entry created successfully.');
        res.status(201).json({ 'message': 'New circulationArea entry created successfully.' });
    } catch (error) {
        console.error('Error creating circulationArea:', error);
        res.status(500).json({ 'error': 'Error creating circulationArea' });
    } finally {
        await prisma.$disconnect();
    }
};
const createInstructionalArea = async (req, res) => {
    try {
        const {
            programme,
            level,
            roomType,
            roomID,
            areaOfRoom,
            buildingName,
            readinessOfFlooring,
            readinessOfWallAndPainting,
            readinessOfElectrificationAndLighting,
            readinessOfFurnitureOrFixtures,
            airConditioning,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!programme || !level || !roomType || !roomID || !areaOfRoom || !buildingName || !readinessOfFlooring || !readinessOfWallAndPainting || !readinessOfElectrificationAndLighting || !readinessOfFurnitureOrFixtures || !airConditioning) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for instructionalArea
        await prisma.instructionalArea.create({
            data: {
                programme,
                level,
                roomType,
                roomID,
                areaOfRoom,
                buildingName,
                readinessOfFlooring,
                readinessOfWallAndPainting,
                readinessOfElectrificationAndLighting,
                readinessOfFurnitureOrFixtures,
                airConditioning,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New instructionalArea entry created successfully.');
        res.status(201).json({ 'message': 'New instructionalArea entry created successfully.' });
    } catch (error) {
        console.error('Error creating instructionalArea:', error);
        res.status(500).json({ 'error': 'Error creating instructionalArea' });
    } finally {
        await prisma.$disconnect();
    }
};
const createInfrastructuralArea = async (req, res) => {
    try {
        const {
            roomType,
            roomID,
            areaOfRoom,
            readinessOfFlooring,
            readinessOfWallAndPainting,
            readinessOfElectrificationAndLighting,
            readinessOfFurnitureOrFixtures,
            airConditioning,
            buildingName,
            buildingNumber,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (!roomType || !roomID || !areaOfRoom || !readinessOfFlooring || !readinessOfWallAndPainting || !readinessOfElectrificationAndLighting || !readinessOfFurnitureOrFixtures || !airConditioning || !buildingName || !buildingNumber) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for infrastructuralArea
        await prisma.infrastructuralArea.create({
            data: {
                roomType,
                roomID,
                areaOfRoom,
                readinessOfFlooring,
                readinessOfWallAndPainting,
                readinessOfElectrificationAndLighting,
                readinessOfFurnitureOrFixtures,
                airConditioning,
                buildingName,
                buildingNumber,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New infrastructuralArea entry created successfully.');
        res.status(201).json({ 'message': 'New infrastructuralArea entry created successfully.' });
    } catch (error) {
        console.error('Error creating infrastructuralArea:', error);
        res.status(500).json({ 'error': 'Error creating infrastructuralArea' });
    } finally {
        await prisma.$disconnect();
    }
};
const createHostelFacilities = async (req, res) => {
    try {
        const {
            whetherTheHostelFacilitiyIsAvailable,
            girlsHostel,
            numberOfRooms,
            hostelCapacity,
            boysHostel,
            numberOfRoomsForBoys,
            totalCapacity,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (
            whetherTheHostelFacilitiyIsAvailable === undefined ||
            (whetherTheHostelFacilitiyIsAvailable && (girlsHostel === undefined || numberOfRooms === undefined || hostelCapacity === undefined || boysHostel === undefined || numberOfRoomsForBoys === undefined || totalCapacity === undefined))
        ) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for hostelFacilities
        await prisma.hostelFacilities.create({
            data: {
                whetherTheHostelFacilitiyIsAvailable,
                girlsHostel: girlsHostel || false,
                numberOfRooms: girlsHostel ? numberOfRooms : null,
                hostelCapacity: girlsHostel ? hostelCapacity : null,
                boysHostel: boysHostel || false,
                numberOfRoomsForBoys: boysHostel ? numberOfRoomsForBoys : null,
                totalCapacity: totalCapacity || null,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New hostelFacilities entry created successfully.');
        res.status(201).json({ 'message': 'New hostelFacilities entry created successfully.' });
    } catch (error) {
        console.error('Error creating hostelFacilities:', error);
        res.status(500).json({ 'error': 'Error creating hostelFacilities' });
    } finally {
        await prisma.$disconnect();
    }
};
const createComputationalFacilities = async (req, res) => {
    try {
        const {
            PClaptopsExclusivelyAvailableToStudents,
            PClaptopsAvailableInLibrary,
            PClaptopsAvailableInAdministrativeOffice,
            PClaptopsAvailableForFacultyMember,
            numberOfPcInLanguageLab,
            internetBandwidthInMbps,
            numberOfLegalApplicationSoftware,
            printersAvailableToStudents,
            numberOfA1SizeColorPrinter,
            numberOfLegalSystemSoftware,
            numberOfOpenSourceSoftware,
            numberOfPropsitory,
            authorId // Assuming authorId is provided in the request body
        } = req.body;

        // Check if required fields are missing
        if (
            PClaptopsExclusivelyAvailableToStudents === undefined ||
            PClaptopsAvailableInLibrary === undefined ||
            PClaptopsAvailableInAdministrativeOffice === undefined ||
            PClaptopsAvailableForFacultyMember === undefined ||
            numberOfPcInLanguageLab === undefined ||
            internetBandwidthInMbps === undefined ||
            numberOfLegalApplicationSoftware === undefined ||
            printersAvailableToStudents === undefined ||
            numberOfA1SizeColorPrinter === undefined ||
            numberOfLegalSystemSoftware === undefined ||
            numberOfOpenSourceSoftware === undefined ||
            numberOfPropsitory === undefined
        ) {
            return res.status(400).json({ 'message': 'Required fields are missing' });
        }

        // Creating a new entry for computationalFacilities
        await prisma.computationalFacilites.create({
            data: {
                PClaptopsExclusivelyAvailableToStudents,
                PClaptopsAvailableInLibrary,
                PClaptopsAvailableInAdministrativeOffice,
                PClaptopsAvailableForFacultyMember,
                numberOfPcInLanguageLab,
                internetBandwidthInMbps,
                numberOfLegalApplicationSoftware,
                printersAvailableToStudents,
                numberOfA1SizeColorPrinter,
                numberOfLegalSystemSoftware,
                numberOfOpenSourceSoftware,
                numberOfPropsitory,
                author: {
                    connect: {
                        id: authorId // Replace with the actual author ID
                    }
                }
            }
        });

        console.log('New computationalFacilities entry created successfully.');
        res.status(201).json({ 'message': 'New computationalFacilities entry created successfully.' });
    } catch (error) {
        console.error('Error creating computationalFacilities:', error);
        res.status(500).json({ 'error': 'Error creating computationalFacilities' });
    } finally {
        await prisma.$disconnect();
    }
};





                                                                            
module.exports = {
    createNewInstitute,
    createNewInstituteMoreDetails,
    createNewSubSection,
    createNewOrganisationDetails,
    createNewTrusteeDetails,
    createNewContactPerson,
    createNewQuestionnaire,
    createNewProgramDetails,
    createNewCourseDetails,
    createNewLandDetails,
    createMoreLandInformation,
    createNewBuildingDetails,
    createBuildingDetailsMoreDetails,
    createLaboratoryDetails,
    createAdministrativeArea,
    createAmetiesArea,
    createCirculationArea,
    createAdministrativeArea,
    createInstructionalArea,
    createInfrastructuralArea,
    createHostelFacilities,
    createComputationalFacilities



}