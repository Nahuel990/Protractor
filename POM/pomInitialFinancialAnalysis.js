'use strict';
let initialFinancialAnalysis = function () {

    //Financial Assumptions tab
    this.listPrice = element(by.id("listPrice"));

    this.sendListPrice = function (price) {
        this.listPrice.sendKeys(price);
    };

    //Permanence tab
    this.allPermanenceFields = function () {
        return this.permanence = element.all(by.repeater("period in ::periodsRange"));
    };
    this.sendFieldPermanence = function (index, value) {
        this.fieldPermanence = element(by.id("permanence-" + index));
        this.fieldPermanence.clear();
        this.fieldPermanence.sendKeys(value);
    };

    //Growth New Student tab
    this.allGrowthNewStudent = function () {
        return this.growthNewStudent = element.all(by.repeater("value in ::columnsRange"));
    };
    this.sendGrowthNewStudent = function (index, value) {
        this.fieldGrowthNewStudent = element(by.id("newStudentsGrow-" + index));
        this.fieldGrowthNewStudent.clear();
        this.fieldGrowthNewStudent.sendKeys(value);
    };

    //New Projected Students tab
    this.allNewProjectedStudent = function () {
        return this.newProjectedStudent = element.all(by.repeater("period in ::periodsByYearRange"));
    };
    this.sendNewProjectedStudent = function (index, value) {
        this.fieldNewProjectedStudent = element(by.id("projectedNewStudents-" + index));
        this.fieldNewProjectedStudent.clear();
        this.fieldNewProjectedStudent.sendKeys(value);
    };

    //OnCampus and SemiVirtual Variables tab
    this.hsPerSbjtPerWeek = element(by.id("hoursPerSubjectPerWeek"));

    this.sendHsPerSbjtPerWeek = function (hs) {
        this.hsPerSbjtPerWeek.clear();
        this.hsPerSbjtPerWeek.sendKeys(hs);
    };

    //Subjects tab
    this.allSubjects = function () {
        return this.subjects = element.all(by.repeater("period in ::periodsByYearRange"));
    };

    this.sendNumberSubjectsOnCampus = function (index, value) {
        this.numberSubjectsOnCampus = element(by.id("subjectsPerAcademicPeriod-" + index + "-numberOfPresentialSubjects"));

        this.numberSubjectsOnCampus.isEnabled().then(present => {
            if(present){
                this.numberSubjectsOnCampus.clear();
                this.numberSubjectsOnCampus.sendKeys(value);
            }else{
                console.log("Not present");
            }
        })
    };
    this.sendMaxSizeOnCampus = function (index, value) {
        this.maxSizeOnCampus = element(by.id("subjectsPerAcademicPeriod-" + index + "-presentialGroupsMaxSize"));
        this.maxSizeOnCampus.isEnabled().then(present => {
                    if (present) {
                        this.maxSizeOnCampus.clear();
                        this.maxSizeOnCampus.sendKeys(value);
                    } else {
                        console.log("Not present");
            }
        })
    };
    this.sendNumberSubectsOnline = function (index, value) {
        this.numberSubectsOnline = element(by.id("subjectsPerAcademicPeriod-" + index + "-numberOfVirtualSubjects"));
        this.numberSubectsOnline.isEnabled().then(present => {
            if (present) {
                this.numberSubectsOnline.clear();
                this.numberSubectsOnline.sendKeys(value);
            } else {
                console.log("Not present");
            }
        })
    };
    this.sendMaxSizeOnLine = function (index, value) {
        this.maxSizeOnLine = element(by.id("subjectsPerAcademicPeriod-" + index + "-virtualGroupsMaxSize"));
        this.maxSizeOnLine.isEnabled().then(present => {
            if (present) {
                this.maxSizeOnLine.clear();
                this.maxSizeOnLine.sendKeys(value);
            } else {
                console.log("Not present");
            }
        })
    };
};

module.exports = initialFinancialAnalysis;