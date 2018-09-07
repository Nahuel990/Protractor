let commonNavigationButtons = new require('../POM/commonNavigationButtons.js'),
    pomInitialFinancialAnalysis = new require('../POM/pomInitialFinancialAnalysis.js');

describe("Initial Financial Analysis", function () {
    let pageCommonButtons = new commonNavigationButtons(),
        pageInitialFinancialAnalysis = new pomInitialFinancialAnalysis();

    it("Program Information", function () {
        pageCommonButtons.clickNext();
    });
    it("Financial Assumption", function () {
        pageInitialFinancialAnalysis.sendListPrice("500");
        pageCommonButtons.clickNext();
    });
    it("Projected Inflation", function () {
        pageCommonButtons.clickNext();
    });
    it("Projected Enrollment Increase", function () {
        pageCommonButtons.clickNext();
    });
    it("Permanence", function () {
        pageInitialFinancialAnalysis.allPermanenceFields().then(function (item) {
            for (let count=0, index= 0, permanence = item.length; count<(permanence/2);count++ ) {
                pageInitialFinancialAnalysis.sendFieldPermanence(index, 20);
                index++;
            }
        });
        pageCommonButtons.clickNext();
    });
    it("Growth New Student", function () {
        pageInitialFinancialAnalysis.allGrowthNewStudent().then(function (item) {
            for (let count=0,index = 0, permanence = item.length; count<permanence;count++ ) {
                pageInitialFinancialAnalysis.sendGrowthNewStudent(index, 20);
                index++;
            }
        });
        pageCommonButtons.clickNext();
    });
    it("New Projected Student", function () {
        pageInitialFinancialAnalysis.allNewProjectedStudent().then(function (item) {
            for (let count=0,index = 0,permanence = item.length; count<permanence;count++ ) {
               pageInitialFinancialAnalysis.sendNewProjectedStudent(index, 22);
                index++;
            }
        });
        pageCommonButtons.clickNext();
    });
    it("Academic Support", function () {
        pageCommonButtons.clickNext();
    });
    it("Professors", function () {
        pageCommonButtons.clickNext();
    });
    it("Distance Variables", function () {
        pageCommonButtons.clickNext();
    });
    it("OnCampus and SemiVirtual Variables", function () {
        pageInitialFinancialAnalysis.sendHsPerSbjtPerWeek("20");
        pageCommonButtons.clickNext();
    });
    it("SubjectsOnCampus", function () {
            pageInitialFinancialAnalysis.allSubjects().then(function (item) {
                for (let count = 0, index = 0, permanence = item.length; count < permanence; count++) {
                    pageInitialFinancialAnalysis.sendNumberSubjectsOnCampus(index, 20);
                    pageInitialFinancialAnalysis.sendMaxSizeOnCampus(index, 20);
                    index++;
                }
                pageCommonButtons.clickNext();
            });
    });
    it("SubjectsOnLine", function () {
            pageInitialFinancialAnalysis.allSubjects().then(function (item) {
                for (let count=0, index = 0,permanence = item.length ; count<permanence;count++ ) {
                    pageInitialFinancialAnalysis.sendNumberSubectsOnline(index, 20);
                    pageInitialFinancialAnalysis.sendMaxSizeOnLine(index, 20);
                    index++;
                }
                pageCommonButtons.clickNext();
            });
    });
    it("Expenses", function () {
        pageCommonButtons.clickNext();
    });
    it("CAPEX", function () {
        pageCommonButtons.clickSeeCalculationsAndDiagrams();
    });
    it("Finalizar", function () {
        pageCommonButtons.clickFinisTask();
        pageCommonButtons.clickYesSend();
        pageCommonButtons.clickRegisterCommitteeEvaluationResults();
    });
});