'use strict';

let academicProgramDesign = function () {

    //Information
    this.sendSubectsPerPeriod = function (subjects) {
        this.subjectsPerPeriod = element(by.id("subjectsPerPeriod"));
        this.subjectsPerPeriod.sendKeys(subjects);
    };
    this.sendSubjectHourPerPeriod = function (subject) {
        this.subjectHourPerPeriod = element(by.id("subjectHoursPerPeriod"));
        this.subjectHourPerPeriod.sendKeys(subject);
    };
    this.sendOnLineModalitySubjects = function (percentage) {
        this.onLineModalitySubjects = element(by.id("percentageOfVirtualSubjects"));
        this.onLineModalitySubjects.sendKeys(percentage);
    };

    this.sendCreditsPerPeriod = function (credits) {
        this.credtisPerPeriod = element(by.id("creditsPerPeriod"));
        this.credtisPerPeriod.sendKeys(credits);
    };
};

module.exports=academicProgramDesign;