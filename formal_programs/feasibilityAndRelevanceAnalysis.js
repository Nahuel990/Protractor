let commonNavigationButtons = new require('../POM/commonNavigationButtons.js'),
    pomFeasibilityAndRelevanceAnalysis = new require('../POM/pomFeasibilityAndRelevanceAnalysis.js'),
    data = require('../languages/español.json');

describe("Feasibility and Relevance Analysis", function () {
    let pageCommonButtons = new commonNavigationButtons(),
        pageFeasibilityAndRelevanceAnalysis = new pomFeasibilityAndRelevanceAnalysis();

    it("Market", function () {
        pageCommonButtons.clickNext();
    });
    it("Competitors", function () {
        pageCommonButtons.clickNext();
    });
    it("Program Details", function () {
        pageCommonButtons.clickNext();
    });
    it("Differential Predefinition for Our Program", function () {
        pageFeasibilityAndRelevanceAnalysis.sendUSP1("Test");
        pageFeasibilityAndRelevanceAnalysis.sendUSP2("Test");
        pageCommonButtons.clickNext();
    });
    it("Marketing General Information", function () {
        pageFeasibilityAndRelevanceAnalysis.sendLeads("20");
        pageFeasibilityAndRelevanceAnalysis.sendConvertionRate("20");
        pageFeasibilityAndRelevanceAnalysis.sendEstimatedEnrollments("20");
        pageFeasibilityAndRelevanceAnalysis.clickMarketResearch();
        pageFeasibilityAndRelevanceAnalysis.clickOptionsMarketResearch(data.feasibilityAndRelevanceAnalysis.optionsMarketResearch);
        pageFeasibilityAndRelevanceAnalysis.sendJustificationNotMarketResearch("Test");
        pageCommonButtons.clickNext();
    });
    
    it("Outputs", function () {
        for (let id = 0; id<=9; id++){
            pageFeasibilityAndRelevanceAnalysis.sendEstimatedStudent(id, 45);
            pageFeasibilityAndRelevanceAnalysis.sendEstimatedMarketGrowth(id,34);
            pageFeasibilityAndRelevanceAnalysis.sendEstimatedProgramGrowth(id,22);
        }
        pageCommonButtons.clickNext();
    });
    it("Suggested Price", function(){
        pageFeasibilityAndRelevanceAnalysis.clickSalesLeadership(data.feasibilityAndRelevanceAnalysis.optionsSalesLeadership);
        pageFeasibilityAndRelevanceAnalysis.clickIntensityDirectCompetitor(data.feasibilityAndRelevanceAnalysis.optionsIntensityDirectCompetitor);
        pageFeasibilityAndRelevanceAnalysis.clickPerceivedBrand(data.feasibilityAndRelevanceAnalysis.optionsPerceivedBrand);
        pageFeasibilityAndRelevanceAnalysis.clickNumberOfNegativeUSP(data.feasibilityAndRelevanceAnalysis.optionsNumberOfNegativeUSP);
        pageFeasibilityAndRelevanceAnalysis.clickNumberOfPositiveUSP(data.feasibilityAndRelevanceAnalysis.optionsNumberOfPositiveUSP);
        pageFeasibilityAndRelevanceAnalysis.clickDesiredMarketShare(data.feasibilityAndRelevanceAnalysis.optionsDesiredMarketShare);
        pageFeasibilityAndRelevanceAnalysis.sendFinalDefinedPrice("35");
        pageFeasibilityAndRelevanceAnalysis.sendPriceJustification("Test");
        pageCommonButtons.clickFinisTask();
        pageCommonButtons.clickNextTask();
    });
});
