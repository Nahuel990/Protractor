'use strict';
let academicProgramBrief = function () {
    //Proposer tab
    this.proposalSubmittedBy = element(by.id("programRequestor"));
    this.requestDate = element(by.id("requestDate"));
    this.position = element(by.id("position"));
    this.email = element(by.id("email"));

    this.sendProposalSubmittedBy = function (proposer) {
        this.proposalSubmittedBy.clear();
        this.proposalSubmittedBy.sendKeys(proposer);
    };
    this.clickDate = function () {
        browser.actions().doubleClick(this.requestDate).perform();
    };
    this.sendDate = function (date) {
        this.requestDate.clear();
        this.requestDate.sendKeys(date);
    };
    this.sendPosition = function (position) {
        this.position.clear();
        this.position.sendKeys(position);
    };
    this.sendEmail = function (mail) {
        this.email.clear();
        this.email.sendKeys(mail);
    };

    //Program tab
    this.university = element(by.id('//*[@id="universityDetails-university"]/div[1]/span'));
    this.sendProgramName = function (name) {
        this.programName = element(by.id("programName"));
        this.programName.clear();
        this.programName.sendKeys(name);
    };
    this.clickTypeOfEducation = function () {
        this.typeOfEducation = element(by.id("educationType"));
        this.typeOfEducation.click();
    };
    this.clickOptionsEducation = function (education) {
        this.optionsEducation = element(by.cssContainingText("[ng-bind='value | getTranslation : value']", education));
        this.optionsEducation.click();
    };
    this.clickModality = function () {
        this.modality = element(by.id("educationMode"));
        this.modality.click();
    };
    this.clickOptionsModality = function (modality) {
        this.optionsModality = element(by.cssContainingText("[ng-bind='value | getTranslation : value']", modality));
        this.optionsModality.click();
    };
    this.clickScope = function () {
        this.scope = element(by.id("scope"));
        this.scope.click();
    };
    this.clickOptionsScope = function (scope) {
        this.optionsScope = element(by.cssContainingText("[ng-bind='value | getTranslation : value']", scope));
        this.optionsScope.click();
    };

    //Knowledge tab
    this.selectKnowledge = function (knowledge) {
        this.knowledgeArea  = element(by.id("knowledgeArea"));
        this.optionsKnowledge = element(by.cssContainingText("[ng-bind='value | getTranslation : value']", knowledge ));
        this.knowledgeArea.click();
        this.optionsKnowledge.click();
    };
    this.clickDuration = function () {
        this.duration = element(by.id("periods"));
        this.duration.click();
    };
    this.clickOptionsDuration = function (duration) {
        this.optionsDuration = element(by.cssContainingText("[ng-bind='value | getTranslation : value']",duration));
        this.optionsDuration.click();
    };
    this.clickLevel = function () {
        this.level = element(by.id("educationLevel"));
        this.level.click();
    };
    this.clickOptionsLevel = function (level) {
        this.optionsLevel = element(by.cssContainingText("[ng-bind='(value | getTranslation) | uppercase']", level ));
        this.optionsLevel.click();
    };
    this.clickFacultySchool = function () {
        this.facultySchool = element(by.id("universityDetails-faculty"));
        this.facultySchool.click();
    };
    this.clickOptionsFacultySchool = function (faculty) {
        this.optionsFacultySchool = element(by.cssContainingText("[ng-bind='value | getTranslation ']", faculty));
        this.optionsFacultySchool.click();
    };
    this.selectPeriod = function (period) {
        this.period = element (by.id("periodType"));
        this.optionsPeriod = element(by.cssContainingText("[ng-bind='value | getTranslation : value']",period));
        this.period.click();
        this.optionsPeriod.click();
    };

    this.clickSchedule = function () {
        this.schedule = element(by.id("scheduleType"));
        this.schedule.click();
    };
    this.clickOptionsSchedule = function (schedule) {
        this.optionsSchedule = element(by.cssContainingText("[ng-bind='value | getTranslation']", schedule));
        this.optionsSchedule.click();
    };

    //Geography tab
    this.tab4 = element.all(by.repeater("tab in tabsCtrl.stepsHandler.steps")).get(3);
    this.tab5 = element.all(by.repeater("tab in tabsCtrl.stepsHandler.steps")).get(4);
    this.departmentState = element(by.id("universityDetails-places"));

    this.enabledTab4 = function () {
        return this.tab4.isEnabled();
    };
    this.clickTab4 = function () {
        this.tab4.click();
    };
    this.clickTab5 = function () {
       this.tab5.click();
    };
    this.clickDepartmentState = function () {
        this.departmentState.click();
    };
    this.clickOptionsDepartmentState = function (depState) {
        this.optionsDepartmentState = element(by.xpath('//span[contains(string(),'+ depState +')]'));
        this.optionsDepartmentState.click();
    };

    //Proposal tab
    this.clickOriginProposal = function () {
        this.originProposal = element(by.id("proposalOrigin"));
        this.originProposal.click();
    };
    this.clickOptionsOriginProposal = function (option) {
        this.optionsOriginProposal = element(by.xpath('//span[contains(string(),'+ option +')]'));
        this.optionsOriginProposal.click();
    };

    //Opportunity tab
    this.clickOpportunityAnalysis = function () {
        this.opportunityAnalysis = element(by.id("opportunityAnalysisSource"));
        this.opportunityAnalysis.click();
    };

    this.clickOptionsOpportunityAnalysis  = function (opportunity) {
        this.optionsOpportunityAnalysis = element(by.xpath('//span[contains(string(),'+ opportunity +')]'));
        this.optionsOpportunityAnalysis.click();
    };

    //Pros tab
    this.clickPros = function () {
        this.pros = element(by.id("programStrengths"));
        this.pros.click();
    };
    this.clickOptionsPros = function (pros) {
        this.optionsPros = element(by.xpath('//span[contains(string(),'+ pros +')]'));
        this.optionsPros.click();
    };

    //Challenges tab
    this.clickChallenges = function () {
        this.challenges = element(by.id("programChallenges"));
        this.challenges.click();
    };
    this.clickOptionsChallenges = function (challenge) {
        this.optionsChallenges = element(by.xpath('//span[contains(string(),'+ challenge +')]'));
        this.optionsChallenges.click();
    };

    //Positioning tab
    this.sendProgramJustification = function (justification) {
        this.programJustification = element(by.id("programJustification"));
        this.programJustification.sendKeys(justification);
    };
    this.sendGeneralObjectives = function (justification) {
        this.generalObjectives = element(by.id("generalObjectives"));
        this.generalObjectives.sendKeys(justification);
    };

};

module.exports = academicProgramBrief;
