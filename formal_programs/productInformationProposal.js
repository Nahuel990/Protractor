let commonNavigationButtons = new require('../POM/commonNavigationButtons.js');

describe("Product Information Proposal", function () {

    let pageCommonButtons = new commonNavigationButtons();

    it("Information", function () {
        pageCommonButtons.clickNext();
    });
    it("Justification and Pertinence", function () {
        pageCommonButtons.clickNext();
    });
    it("Competitor - Characterisitcs", function () {
        pageCommonButtons.clickNext();
    });
    it("Competitor - USP's", function () {
        pageCommonButtons.clickNext();
    });
    it("Competitor - Prices", function () {
        pageCommonButtons.clickNext();
    });
    it("Employability Inputs", function () {
        pageCommonButtons.clickNext();
    });
    it("Projection to 5 Years", function () {
        pageCommonButtons.clickNext();
        pageCommonButtons.clickFinisTask();
        pageCommonButtons.clickYesSend();
        pageCommonButtons.clickRegisterCommitteeEvaluationResults();
    });
});