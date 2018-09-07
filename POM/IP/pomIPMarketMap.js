/**
 * Created by Nahuel Nucera on 25/09/2017.
 */
let ipMarketMap = function () {

    this.ipCompetencyPhase = element(by.id("bool-competencyAnalysisCompleted"));
    this.ipRegulatoryTopicsPhaseNA = element(by.id("regulatoryAnalysisCompleted-radio-na"));
    this.ipRegulatoryTopicsPhaseYes = element(by.id("regulatoryAnalysisCompleted-radio-yes"));
    this.ipRegulatoryTopicsPhaseNo = element(by.id("regulatoryAnalysisCompleted-radio-no"));


    this.clickIpRegulatoryTopicsPhaseYes = function () {
        this.ipRegulatoryTopicsPhaseYes.click();
    };
    this.clickIpCompetencyPhase = function () {
        this.ipCompetencyPhase.click();
    };

    this.attachLinkOrFile = function (typeAttach) {
        this.attach = element(by.xpath("//a[text()='"+typeAttach+"']"));
        this.attach.click();
    };
    this.uploadLink = function (link) {
        this.linkFiled = element(by.xpath("//input[@name='attachmentLink']"));
        this.linkFiled.sendKeys(link);
    };

    this.addComment = function (comment) {
        this.commentField = element(by.xpath("//input[@name='comments']"));
        this.commentField.sendKeys(comment);
    }

};
module.exports = ipMarketMap;