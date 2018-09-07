let fs = require('fs');

let initialAnalysis = function () {

    //Positioning tab
    this.applicantProfile = element(by.id("profileApplicant"));
    this.professionalProfile = element(by.id("profileProfessional"));
    this.occupationalProfile = element(by.id("profileOccupational"));

    this.sendApplicantProfile = function (profile) {
        this.applicantProfile.clear();
        this.applicantProfile.sendKeys(profile);
    };
    this.sendProfessionalProfile = function (profile) {
        this.professionalProfile.clear();
        this.professionalProfile.sendKeys(profile);
    };
    this.sendOccupationalProfile = function (profile) {
        this.occupationalProfile.clear();
        this.occupationalProfile.sendKeys(profile);
    };

    //Summary Analysis tab
    this.pmConcept = element(by.id("conceptsForCommittee"));

    this.sendPMConcept = function (concept) {
        this.pmConcept.clear();
        this.pmConcept.sendKeys(concept);
    };
};

module.exports = initialAnalysis;