//BriefdeProgramaAcdemico
let commonNavigationButtons = new require('../POM/commonNavigationButtons.js'),
    academicProgramBrief = new require('../POM/pomAcademicProgramBrief.js'),
    data = require('../languages/español.json');

describe("Create Academic Program Brief", function () {
    let pageCommonButtons = new commonNavigationButtons();
    let pageAcademicProgramBrief = new academicProgramBrief();

    it("Proposer", function () {
        pageAcademicProgramBrief.sendProposalSubmittedBy("Test");
        pageAcademicProgramBrief.sendEmail("test@test.com");
        pageAcademicProgramBrief.sendPosition("Test");
        pageAcademicProgramBrief.clickDate();
        pageAcademicProgramBrief.sendDate("7/12/17");
        pageCommonButtons.clickSave();
        pageCommonButtons.clickNext();
    });
    it("Program", function () {

        pageAcademicProgramBrief.sendProgramName(data.academicProgramBrief.programName);
        pageAcademicProgramBrief.clickTypeOfEducation();
        pageAcademicProgramBrief.clickOptionsEducation(data.academicProgramBrief.optionsEducation);
        pageAcademicProgramBrief.clickModality();
        pageAcademicProgramBrief.clickOptionsModality(data.academicProgramBrief.optionsModality);
        pageAcademicProgramBrief.clickScope();
        pageAcademicProgramBrief.clickOptionsScope(data.academicProgramBrief.optionsScope);
        pageCommonButtons.clickSave();
        pageCommonButtons.clickNext();
    });
    it("Knowledge", function () {
        pageAcademicProgramBrief.selectKnowledge(data.academicProgramBrief.optionsKnowledge);
        pageAcademicProgramBrief.clickDuration();
        pageAcademicProgramBrief.clickOptionsDuration(data.academicProgramBrief.optionsDuration );
        pageAcademicProgramBrief.clickLevel();
        pageAcademicProgramBrief.clickOptionsLevel(data.academicProgramBrief.optionsLevel);
        pageAcademicProgramBrief.clickFacultySchool();
        pageAcademicProgramBrief.clickOptionsFacultySchool(data.academicProgramBrief.optionsFacultySchool);
        pageAcademicProgramBrief.selectPeriod(data.academicProgramBrief.optionsPeriod);
        pageAcademicProgramBrief.clickSchedule();
        pageAcademicProgramBrief.clickOptionsSchedule(data.academicProgramBrief.optionsSchedule);
        pageCommonButtons.clickSave();
    });
    it("Geography", function () {
        pageAcademicProgramBrief.enabledTab4().then(done=>{
            if(done){
                pageAcademicProgramBrief.clickTab4();
                pageAcademicProgramBrief.clickDepartmentState();
                pageAcademicProgramBrief.clickOptionsDepartmentState(data.academicProgramBrief.optionsDepartmentState);
                pageCommonButtons.clickNext();
            }else{
                pageAcademicProgramBrief.clickTab5();
            }
        });
    });
    it("Proposal", function () {
        pageAcademicProgramBrief.clickOriginProposal();
        pageAcademicProgramBrief.clickOptionsOriginProposal(data.academicProgramBrief.optionsProposal );
        pageCommonButtons.clickNext();
    });
    it("Opportunity", function () {
        pageAcademicProgramBrief.clickOpportunityAnalysis();
        pageAcademicProgramBrief.clickOptionsOpportunityAnalysis(data.academicProgramBrief.optionsOpportunityAnalysis);
        pageCommonButtons.clickNext();
    });
    it("Pros", function () {
        pageAcademicProgramBrief.clickPros();
        pageAcademicProgramBrief.clickOptionsPros(data.academicProgramBrief.optionsPros);
        pageCommonButtons.clickNext();
    });
    it("Challenges", function () {
        pageAcademicProgramBrief.clickChallenges();
        pageAcademicProgramBrief.clickOptionsChallenges(data.academicProgramBrief.optionsChallenge);
        pageCommonButtons.clickNext();
    });
    it("Positioning", function () {
        pageAcademicProgramBrief.sendProgramJustification("Test");
        pageAcademicProgramBrief.sendGeneralObjectives("Test");
        pageCommonButtons.clickNext();
    });
    it("Files", function () {
       //TODO
    });
    it("Finalize Task", function () {
        pageCommonButtons.clickFinisTask();
        pageCommonButtons.clickNextTask();
    });
});
