let ipFeasibilityAnalysis = function () {


    //Tab 1
    this.selectPreFaculty = function (faculty) {
        this.faculty = element(by.id('preFaculty'));
        this.optionsFaculty = element(by.cssContainingText("[class='ui-select-choices-row-inner']", faculty));
        this.faculty.click();
        this.optionsFaculty.click();
    };

    this.selectPreKnowledgeAreaSegmentation = function (area) {
        this.area = element(by.id('preKnowledgeArea'));
        this.optionsArea = element(by.cssContainingText("[class='ui-select-choices-row-inner']", area));
        this.area.click();
        this.optionsArea.click();
    };

    this.sendPreCareerSegmentation = function (career) {
        this.careerSegmentation = element(by.id("preUniversityCareers-0-career"));
        this.careerSegmentation.sendKeys(career);
    };

    this.sendPreStudents = function (students) {
        this.studentField = element(by.id("preFacultyStudents-ENGINEERING"));
        this.studenFieldKAS = element(by.id("preKnowledgeAreaStudents-48f89601-9eef-8619-af07-6eb235cddb95"));
        this.studentCareerSegmentation = element(by.id("preUniversityCareers-0-students"));
        this.studentField.sendKeys(students);
        this.studenFieldKAS.sendKeys(students);
        this.studentCareerSegmentation.sendKeys(students);
    };

    //Tab 2
    this.selectPostFaculty = function (faculty) {
        this.faculty = element(by.id('postFaculty'));
        this.optionsFaculty = element(by.cssContainingText("[class='ui-select-choices-row-inner']", faculty));
        this.faculty.click();
        this.optionsFaculty.click();
    };

    this.selectPostKnowledgeAreaSegmentation = function (area) {
        this.area = element(by.id('postKnowledgeArea'));
        this.optionsArea = element(by.cssContainingText("[class='ui-select-choices-row-inner']", area));
        this.area.click();
        this.optionsArea.click();
    };

    this.sendPostCareerSegmentation = function (career) {
        this.careerSegmentation = element(by.id("postUniversityCareers-0-career"));
        this.careerSegmentation.sendKeys(career);
    };

    this.sendPostStudents = function (students) {
        this.studentField = element(by.id("postFacultyStudents-SOCIAL_SCIENCES"));
        this.studenFieldKAS = element(by.id("postKnowledgeAreaStudents-cfa6b4ce-b728-88ea-9be3-63f9ef29524a"));
        this.studentCareerSegmentation = element(by.id("postUniversityCareers-0-students"));
        this.studentField.sendKeys(students);
        this.studenFieldKAS.sendKeys(students);
        this.studentCareerSegmentation.sendKeys(students);
    };

    //Tab 3

    this.sendProgramPrice = function (price) {
        this.programPrice = element(by.id("programPrice"));
        this.programPrice.sendKeys(price);
    };

    //Tab 4

    this.sendUSP = function (USP) {
        this.usp = element(by.id("suggestedUSP1"));
        this.usp.sendKeys(USP);
    };

    //Tab 5

    this.sendIPEstimatedEnrollments = function (estimated) {
        this.estimatedEnrollments1 = element(by.id("estimatedEnrollments-0"));
        this.estimatedEnrollments2 = element(by.id("estimatedEnrollments-1"));
        this.estimatedEnrollments1.clear();
        this.estimatedEnrollments2.clear();
        this.estimatedEnrollments1.sendKeys(estimated);
        this.estimatedEnrollments2.sendKeys(estimated);
    };

    this.sendAcquisitionCost = function (cost) {
        this.acquisitionCost = element(by.id('acquisitionCost'));
        this.acquisitionCost.sendKeys(cost);
    };

    //Tab 6

    this.sendCurriculumMesh = function (idField, value) {
        this.estimatedStudent = element(by.id("yearProjections-" + idField + "-curriculum"));
        this.estimatedStudent.clear();
        this.estimatedStudent.sendKeys(value);
    };
    this.sendElectiveOption = function (idField, value) {
        this.estimatedStudent = element(by.id("yearProjections-" + idField + "-gradeOrElective"));
        this.estimatedStudent.clear();
        this.estimatedStudent.sendKeys(value);
    };
    this.sendDirectSale = function (idField, value) {
        this.estimatedStudent = element(by.id("yearProjections-" + idField + "-directSale"));
        this.estimatedStudent.clear();
        this.estimatedStudent.sendKeys(value);
    };
    this.sendB2B = function (idField, value) {
        this.estimatedStudent = element(by.id("yearProjections-" + idField + "-b2b"));
        this.estimatedStudent.clear();
        this.estimatedStudent.sendKeys(value);
    };
    this.sendTargetMarketGrowth = function (idField, value) {
        this.estimatedStudent = element(by.id("yearProjections-" + idField + "-estimatedMarketGrowth"));
        this.estimatedStudent.clear();
        this.estimatedStudent.sendKeys(value);
    };
    this.sendProgramGrowth = function (idField, value) {
        this.estimatedStudent = element(by.id("yearProjections-" + idField + "-estimatedMarketProgram"));
        this.estimatedStudent.clear();
        this.estimatedStudent.sendKeys(value);
    };

    //Tab 7

    this.sendPriceCurriculumMesh = function (idField, value) {
        this.estimatedStudent = element(by.id("prices-" + idField + "-estimatedMarketProgram"));
        this.estimatedStudent.clear();
        this.estimatedStudent.sendKeys(value);
    };
    this.sendPriceElectiveOption = function (idField, value) {
        this.estimatedStudent = element(by.id("prices-" + idField + "-estimatedMarketProgram"));
        this.estimatedStudent.clear();
        this.estimatedStudent.sendKeys(value);
    };
    this.sendPriceDirectSale = function (idField, value) {
        this.estimatedStudent = element(by.id("prices-" + idField + "-estimatedMarketProgram"));
        this.estimatedStudent.clear();
        this.estimatedStudent.sendKeys(value);
    };
    this.sendPriceB2B = function (idField, value) {
        this.estimatedStudent = element(by.id("prices-" + idField + "-estimatedMarketProgram"));
        this.estimatedStudent.clear();
        this.estimatedStudent.sendKeys(value);
    };
    this.sendYearProjections = function (idField, value) {
        this.estimatedStudent = element(by.id("yearProjections-" + idField + "-estimatedMarketProgram"));
        this.estimatedStudent.clear();
        this.estimatedStudent.sendKeys(value);
    };

    this.send = function (idField, value) {
        this.estimatedStudent = element(by.id("yearProjections-" + idField + "-estimatedMarketProgram"));
        this.estimatedStudent.clear();
        this.estimatedStudent.sendKeys(value);
    };

};

module.exports = ipFeasibilityAnalysis;
