const express = require('express');
const router = express.Router();
const projectsController = require('../../controllers/projectsController');


router.route('/institute')
   .post(projectsController.createNewInstitute);

router.route('/InstituteMoreDetails')
   .post(projectsController.createNewInstituteMoreDetails);

router.route('/SubSection')
   .post(projectsController.createNewSubSection);

    router.route('/OrganisationDetails')
   
    .post(projectsController.createNewOrganisationDetails);

    router.route('/TrusteeDetails')
   
    .post(projectsController.createNewTrusteeDetails);

    router.route('/ContactPerson')
   
    .post(projectsController.createNewContactPerson);

    router.route('/Questionnaire')
   
    .post(projectsController.createNewQuestionnaire);

    router.route('/ProgramDetails')
   
    .post(projectsController.createNewProgramDetails);

    router.route('/CourseDetails')
   
    .post(projectsController.createNewCourseDetails);

    router.route('/NewLandDetails')
   
    .post(projectsController.createNewLandDetails);

    router.route('/MoreLandInformation')
   
    .post(projectsController.createMoreLandInformation);

    router.route('/BuildingDetails')
   
    .post(projectsController.createNewBuildingDetails);

    router.route('/BuildingDetailsMoreDetails')
   
    .post(projectsController.createBuildingDetailsMoreDetails);

    router.route('/LaboratoryDetails')
   
    .post(projectsController.createLaboratoryDetails);

    router.route('/AdministrativeArea')
   
    .post(projectsController.createAdministrativeArea);

    router.route('/AmetiesArea')
   
    .post(projectsController.createAmetiesArea);

    router.route('/CirculationArea')
   
    .post(projectsController.createCirculationArea);

    router.route('/AdministrativeArea')
   
    .post(projectsController.createAdministrativeArea);
    router.route('/createInstructionalArea')
   
    .post(projectsController.createInstructionalArea);
    router.route('/InfrastructuralArea')
   
    .post(projectsController.createInfrastructuralArea);

    router.route('/createHostelFacilities')
   
    .post(projectsController.createHostelFacilities);
    
 router.route('/ComputationalFacilities')
   
    .post(projectsController.createComputationalFacilities);
    router.route('/createHostelFacilities')
   
    .post(projectsController.createHostelFacilities);


   


module.exports = router;