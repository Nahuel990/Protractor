//MarketMap

let pomMarketMap = new require('../POM/pomMarketMap.js'),
    data = require('../languages/español.json'),
    commonNavigationButtons = new require('../POM/commonNavigationButtons.js');

describe('Market Map', function () {

    let pageCommonButtons = new commonNavigationButtons(),
        pageMarketMap = new pomMarketMap();


    it('Have you completed the Environment Phase?', function () {
        pageMarketMap.selectedEnvironmentPhase().then(function(selected) {
            if (!selected) {
                expect(pageMarketMap.clickEnvironmentPhase()).toEqual(data.marketMap.environmentCompleted);
            }
        });
    });

    it('Have you completed the Regulatory Topics Phase?', function () {
        pageMarketMap.selectedRegulatoryTopicsPhase().then(function(selected) {
            if (!selected) {
                pageMarketMap.clickRegulatoryTopicsPhase();
            }
        });
    });

    it('Have you completed the Market Offering Phase?', function () {
        pageMarketMap.selectedMarketOfferingPhaseNo().then(function(selected) {
            if (!selected) {
                pageMarketMap.sendJustificationMarketOfferingPhase("Test");
            }
        });
    });

    it('Have you completed the Competency Phase?', function () {
        pageMarketMap.selectedCompetencyPhaseYes().then(function(selected) {
            if (!selected) {
                pageMarketMap.clickCompetencyPhaseYes();
            }
        });
    });

    it('Have you completed the Employability Phase?', function () {
        pageMarketMap.selectedEmployabilityPhaseNo().then(function(selected) {
            if (!selected) {
                pageMarketMap.sendJustificationEmployabilityPhase("Test");
            }
        });
    });

    it('Finalize Market Map', function () {
       pageCommonButtons.clickFinisTask();
    });
    it('Finalize Task', function () {
        pageCommonButtons.clickNextTask();
    });
});