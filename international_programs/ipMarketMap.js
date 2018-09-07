let data = require('../languages/español.json'),
    pomMarketMap = new require('../POM/pomMarketMap.js'),
    pomIPMarketMap = new require('../POM/IP/pomIPMarketMap'),
    pomRoles = new require('../POM/pomRoles.js'),
    commonNavigationButtons = new require('../POM/commonNavigationButtons.js');

describe("PI Market Map", function () {
    let pageRoles = new pomRoles(),
        pageCommonButtons = new commonNavigationButtons(),
        pageMarketMap = new pomMarketMap(),
        pageIPMarketMap = new pomIPMarketMap();

    //Information
    it("Login With IP Responsible", function () {
        pageRoles.clickDisplayRoles();
       pageRoles.selectRole(data.internationalProgram.piMarketMap.role);
    });
    it("Search for Ally File", function () {

        let search = element(by.xpath("//div[@class='form-group vertical-align']/input")),
            edit = element(by.xpath("//a[@data-uib-tooltip='Editar'][1]"));
            search.sendKeys(data.internationalProgram.allyFile.IPName);
            edit.click();
    });
    it("Have you completed the Environment Phase?", function () {
        pageMarketMap.clickEnvironmentPhase();
    });
    it("Have you completed the Competency Phase?", function () {
        pageIPMarketMap.clickIpCompetencyPhase();
    });
    it("Have you completed the Market Offering Phase?",function () {
        pageMarketMap.selectedMarketOfferingPhaseNo().then(function(selected) {
            if (!selected) {
                pageMarketMap.sendJustificationMarketOfferingPhase("Test");
            }
        });
    });
    it("Have you completed the Regulatory Topics Phase?", function () {
        pageIPMarketMap.clickIpRegulatoryTopicsPhaseYes();
        pageCommonButtons.clickNext();
    });

    //Files
    it("Attach a Link", function () {
        pageIPMarketMap.attachLinkOrFile(data.internationalProgram.piMarketMap.attachLink);
        pageIPMarketMap.uploadLink(data.internationalProgram.piMarketMap.link);
        pageIPMarketMap.addComment(data.internationalProgram.piMarketMap.comment);
        pageCommonButtons.clickAttach();
        pageCommonButtons.clickFinisTask();
        pageCommonButtons.clickNextTask();
    });
});