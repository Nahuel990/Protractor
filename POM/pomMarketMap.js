'use strict';

let marketMap = function () {
    this.environmentPhase = element(by.id('bool-environmentCompleted'));

    this.regulatoryTopicsPhase = element(by.id('bool-regulatoryAnalysisCompleted'));
    this.labelRegulatoryPhase = element(by.xpath('//*[@for="environmentCompleted"]'));
    this.marketOfferingPhaseYes = element(by.id('marketOfferingCompleted-yes'));
    this.marketOfferingPhaseNo = element(by.id('marketOfferingCompleted-no'));
    this.justificationMarketOfferingPhase = element(by.id('marketOfferingCompleted-justify'));
    this.competencyPhaseYes = element(by.id('competencyAnalysisCompleted-yes'));
    this.competencyPhaseNo = element(by.id('competencyAnalysisCompleted-no'));
    this.justificationCompetencyPhase = element(by.id('competencyAnalysisCompleted-justify'));
    this.employabilityPhaseYes = element(by.id('employabilityAnalysisCompleted-yes'));
    this.employabilityPhaseNo = element(by.id('employabilityAnalysisCompleted-no'));
    this.justificationEmployabilityPhase = element(by.id('employabilityAnalysisCompleted-justify'));


    this.selectedEnvironmentPhase = function () {
        return this.environmentPhase.isSelected();
    };
    this.clickEnvironmentPhase = function () {
        this.labelEnvironmentPhase = element(by.xpath('//*[@for="environmentCompleted"]'));
        this.environmentPhase.click();
        return this.labelEnvironmentPhase.getText();
    };
    this.selectedRegulatoryTopicsPhase = function () {
       return this.regulatoryTopicsPhase.isSelected();
    };
    this.clickRegulatoryTopicsPhase = function () {
        //expect(this.labelEnvironment.getText()).toEqual(labelValue);
        this.regulatoryTopicsPhase.click();
    };
    this.selectedMarketOfferingPhaseNo = function () {
       return this.marketOfferingPhaseNo.isSelected();
    };
    this.sendJustificationMarketOfferingPhase = function (justification) {
        this.justificationMarketOfferingPhase.clear();
        this.justificationMarketOfferingPhase.sendKeys(justification);
    };
    this.selectedCompetencyPhaseYes = function () {
       return this.competencyPhaseYes.isSelected();
    };
    this.clickCompetencyPhaseYes = function () {
        this.competencyPhaseYes.click();
    };
    this.selectedEmployabilityPhaseNo = function () {
       return this.employabilityPhaseNo.isSelected();
    };
    this.sendJustificationEmployabilityPhase = function (justification) {
        this.justificationEmployabilityPhase.clear();
        this.justificationEmployabilityPhase.sendKeys(justification)
    }
};

module.exports = marketMap;