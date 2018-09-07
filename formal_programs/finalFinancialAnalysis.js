let commonNavigationButtons = new require('../POM/commonNavigationButtons.js');

describe("Final Financial Analysis", function () {
    let pageCommonButtons = new commonNavigationButtons();

    it("Program Information", function () {
        pageCommonButtons.clickNext();
    });
    it("Financial Assumptions", function () {
        pageCommonButtons.clickNext();
    });
    it("Projected Inflation", function () {
        pageCommonButtons.clickNext();
    });
    it("Projected Enrollment Increase", function () {
        pageCommonButtons.clickNext();
    });
    it("Permanence", function () {
        pageCommonButtons.clickNext();
    });
    it("Growth New Student", function () {
        pageCommonButtons.clickNext();
    });

    it("New Projected Student", function () {
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
        pageCommonButtons.clickNext();
    });
    it("Subjects", function () {
        pageCommonButtons.clickNext();
    });
    it("Expenses", function () {
        pageCommonButtons.clickNext();
    });
    it("CAPEX", function () {
        pageCommonButtons.clickSeeCalculationsAndDiagrams();
    });
    it("Finalizar", function () {
        pageCommonButtons.clickFinisTask();
        pageCommonButtons.clickNextTask();
    });
});