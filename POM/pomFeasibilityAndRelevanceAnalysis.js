'use strict';

let feasibilityAndRelevanceAnalysis = function () {
    //Differential Predefinition for Our Program tab
    this.USP1 = element(by.id("suggestedUSP1"));
    this.USP2 = element(by.id("suggestedUSP2"));

    this.sendUSP1 = function (usp1) {
        this.USP1.clear();
        this.USP1.sendKeys(usp1);
    };
    this.sendUSP2 = function (usp2) {
        this.USP2.clear();
        this.USP2.sendKeys(usp2);
    };

    //Marketing General Information tab
    this.leads = element(by.id("leads"));
    this.convertionRate = element(by.id("convertionRate"));

    this.marketResearch = element(by.id("marketResearchCompleted.select"));
    this.justificationNotMarketResearch = element(by.id("marketResearchCompleted"));

    this.sendLeads = function (lead) {
        this.leads.clear();
        this.leads.sendKeys(lead);
    };
    this.sendConvertionRate  = function (rate) {
        this.convertionRate.clear();
        this.convertionRate.sendKeys(rate);
    };
    this.sendEstimatedEnrollments = function (estimated) {
        this.estimatedEnrollments = element(by.id("estimatedEnrollments-0"));
        this.estimatedEnrollments.clear();
        this.estimatedEnrollments.sendKeys(estimated);
    };
    this.clickMarketResearch = function () {
        this.marketResearch.click();
    };
    this.clickOptionsMarketResearch = function (option) {
        this.optionsMarketResearch = element(by.cssContainingText("[data-ng-bind='value.value | translate']", option));
        this.optionsMarketResearch.click();
    };
    this.sendJustificationNotMarketResearch = function (justification) {
        this.justificationNotMarketResearch.clear();
        this.justificationNotMarketResearch.sendKeys(justification);
    };

    //Outputs Tab
    //This methods needs two parameters on page object. For a better performance the ideal is to put them into a for statement.
        this.sendEstimatedStudent = function (idField, value) {
            this.estimatedStudent = element(by.id("outputs-" + idField + "-estimatedStudents"));
            this.estimatedStudent.clear();
            this.estimatedStudent.sendKeys(value);
        };
        this.sendEstimatedMarketGrowth = function (idField, value) {
            this.estimatedMarketGrowth = element(by.id("outputs-" + idField + "-estimatedMarketGrow"));
            this.estimatedMarketGrowth.clear();
            this.estimatedMarketGrowth.sendKeys(value);
        };
        this.sendEstimatedProgramGrowth= function (idField, value) {
            this.estimatedProgramGrowth = element(by.id("outputs-" + idField + "-estimatedProgramGrow"));
            this.estimatedProgramGrowth.clear();
            this.estimatedProgramGrowth.sendKeys(value);
        };

    //Suggested Price
    this.clickSalesLeadership = function (option) {
        this.salesLeadership = element(by.id("leadershipOfSalesInUniversityKnowledgeAreas"));
        this.optionsSalesLeadership = element(by.cssContainingText("[ng-bind='value.label | translate']", option));
        this.salesLeadership.click();
        this.optionsSalesLeadership.click();
    };
    this.clickPerceivedBrand = function (option) {
        this.perceivedBrand = element(by.id("perceivedBrandValueInMarket"));
        this.optionsPerceivedBrand = element(by.cssContainingText("[ng-bind='value.label | translate']", option));
        this.perceivedBrand.click();
        this.optionsPerceivedBrand.click();
    };
    this.clickIntensityDirectCompetitor = function (option) {
        this.intensityDirectCompetitor = element(by.id("intensityDirectCompetition"));
        this.optionsIntensityDirectCompetitor = element(by.cssContainingText("[ng-bind='value.label | translate']", option ));
        this.intensityDirectCompetitor.click();
        this.optionsIntensityDirectCompetitor.click();
    };
    this.clickNumberOfPositiveUSP = function (option) {
        this.numberOfPositiveUSP = element(by.id("numberOfPositiveUPSOfProgram"));
        this.optionsNumberOfPositiveUSP = element(by.cssContainingText("[ng-bind='value.label | translate']", option));
        this.numberOfPositiveUSP.click();
        this.optionsNumberOfPositiveUSP.click();
    };
    this.clickNumberOfNegativeUSP = function (option) {
        this.numberOfNegativeUSP = element(by.id("numberOfNegativeUPSOfProgram"));
        this.optionsNumberOfNegativeUSP = element(by.cssContainingText("[ng-bind='value.label | translate']", option));
        this.numberOfNegativeUSP.click();
        this.optionsNumberOfNegativeUSP.click();
    };
    this.clickDesiredMarketShare = function (option) {
        this.desiredMarketShare = element(by.id("desiredMarketParticipation"));
        this.optionsDesiredMarketShare = element(by.cssContainingText("[ng-bind='value.label | translate']", option));
        this.desiredMarketShare.click();
        this.optionsDesiredMarketShare.click();
    };
    this.sendFinalDefinedPrice = function (definedPrice) {
        this.finalDefinedPrice = element(by.name("finalPriceDefined"));
        this.finalDefinedPrice.clear();
        this.finalDefinedPrice.sendKeys(definedPrice);
    };
    this.sendPriceJustification= function (justification) {
        this.priceJustification = element(by.name("priceJustification"));
        this.priceJustification.clear();
        this.priceJustification.sendKeys(justification);
    }};

module.exports = feasibilityAndRelevanceAnalysis;