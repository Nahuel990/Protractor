let commonNavigationButtons = new require('../POM/commonNavigationButtons.js'),
    pomInitialAnalysis = new require('../POM/pomInitialAnalysis');

describe("Create Initial Analysis", function () {
    let pageCommonButtons = new commonNavigationButtons(),
        pageInitialAnalysis = new pomInitialAnalysis();
    it("Positioning", function () {
        pageInitialAnalysis.sendOccupationalProfile("Test");
        pageInitialAnalysis.sendProfessionalProfile("Test");
        pageInitialAnalysis.sendApplicantProfile("Test");
        pageCommonButtons.clickNext();
    });
    it("Files", function () {
        pageCommonButtons.clickNext();
    });
    it("Competitive Analysis", function () {
        pageCommonButtons.clickNext();
    });
    it("Summary Analysis", function () {
        pageInitialAnalysis.sendPMConcept("Test");
    });
    it("Finalize Task", function () {
        pageCommonButtons.clickFinisTask();
        pageCommonButtons.clickYesSend();
        pageCommonButtons.clickRegisterCommitteeEvaluationResults();
    });
});
