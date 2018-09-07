let commonNavigationButtons = new require('../POM/commonNavigationButtons.js'),
    pomAcademicProgramDesign = new require('../POM/pomAcademicProgramDesign.js');

describe("Academic Program Design", function () {

    let pageCommonButtons = new commonNavigationButtons(),
        pageAcademicProgramDesign = new pomAcademicProgramDesign();

    it("Information", function () {
        pageAcademicProgramDesign.sendSubectsPerPeriod("10");
        pageAcademicProgramDesign.sendSubjectHourPerPeriod("10");
        pageAcademicProgramDesign.sendCreditsPerPeriod("10");
        pageCommonButtons.clickNext();
    });
    it("Subjects", function () {
        pageCommonButtons.clickNext();
    });
    it("OnCampus and Virtual Subject", function () {
        pageCommonButtons.clickNext();
    });
    it("Teachers", function () {
        pageCommonButtons.clickNext();
    });
    it("Investment", function () {
        pageCommonButtons.clickFinisTask();
    });
    it("Finalize Task", function () {
        pageCommonButtons.clickNextTask();
    });
});