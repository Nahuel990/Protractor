let data = require("../languages/español.json"),
    pomAcademicProgramBrief = new require("../POM/pomAcademicProgramBrief.js"),
    pomInitialAnalysis = new require("../POM/pomInitialAnalysis.js"),
    pomIPAllyFiles = new require ("../POM/IP/pomIPAllyFile.js"),
    commonNavigationButtons = new require('../POM/commonNavigationButtons.js');

describe ("Ally File", function () {
    let pageAcademicProgramBrief = new pomAcademicProgramBrief(),
        pageInitialAnalysis = new pomInitialAnalysis(),
        pageIPAllyFiles = new pomIPAllyFiles(),
        pageCommonButtons = new commonNavigationButtons();

    it("Basic Program Information", function () {
        pageIPAllyFiles.sendProposer(data.internationalProgram.allyFile.proposer);
        pageIPAllyFiles.sendInternationalAlly(data.internationalProgram.allyFile.ally);
        pageAcademicProgramBrief.sendProgramName(data.internationalProgram.allyFile.IPName);
        pageIPAllyFiles.selectCountry(data.internationalProgram.allyFile.country1);
        pageIPAllyFiles.selectCountry(data.internationalProgram.allyFile.country2);
        pageIPAllyFiles.selectUniversity(data.internationalProgram.allyFile.university1);
        pageIPAllyFiles.selectUniversity(data.internationalProgram.allyFile.university2);
        pageIPAllyFiles.ipSelectKnowledge(data.internationalProgram.allyFile.knowledge1);
        pageIPAllyFiles.ipSelectKnowledge(data.internationalProgram.allyFile.knowledge2);
        pageIPAllyFiles.selectTimeduration("Meses");
        pageIPAllyFiles.sendProgramCourses("34");
        pageIPAllyFiles.sendPeriod("22");
        pageIPAllyFiles.sendDeliveryDate("12/7/17");
        pageIPAllyFiles.sendAllyDate("23/7/17");
        pageIPAllyFiles.sendPriceRange(100, 200);
        pageCommonButtons.clickNext();
    });
    it("Justification and Relevance", function () {
        pageIPAllyFiles.sendProgramJustification("Test");
        pageIPAllyFiles.sendProgramOverview("Test");
        pageCommonButtons.clickNext();
    });
    it("USP's", function () {
        pageCommonButtons.clickNext();
    });
    it("Files", function () {
        pageCommonButtons.clickFinisTask();
        pageCommonButtons.clickYesSend();
    });
});