
let allyFile = function () {
    this.sendProposer = function (proposer) {
        this.proposedProgram = element(by.id("proposedProgram"));
        this.proposedProgram.clear();
        this.proposedProgram.sendKeys(proposer);
    };
    this.sendInternationalAlly = function (ally) {
        this.internationalAlly = element(by.id("internationalAlly"));
        this.internationalAlly.clear();
        this.internationalAlly.sendKeys(ally);
    };

    this.sendAllyDate = function (date) {
        this.allyDate = element(by.id("allyDate"));
        this.allyDate.clear();
        browser.actions().doubleClick(this.allyDate).perform();
        this.allyDate.sendKeys(date);
    };

    this.selectCountry = function (country) {
        this.country = element(by.id("ilumnoUniversity-country"));
        this.optionsCountry = element(by.cssContainingText("[class='ui-select-choices-row-inner']", country));
        this.country.click();
        this.optionsCountry.click();
    };

    this.selectUniversity = function (university) {
        this.university = element(by.id("ilumnoUniversity-university"));
        this.optionsUniverity = element(by.cssContainingText("[class='ui-select-choices-row-inner']", university));
        this.university.click();
        this.optionsUniverity.click();
    };

    this.ipSelectKnowledge = function (knowledge) {
        this.knowledge = element(by.id("knowledgeArea"));
        this.optionsKnowledge = element(by.cssContainingText("[class='ui-select-choices-row-inner']", knowledge));
        this.knowledge.click();
        this.optionsKnowledge.click();
    };
    this.selectTimeduration = function (period) {
        this.period = element (by.id("timeDuration"));
        this.optionsPeriod = element(by.cssContainingText("[ng-bind='value | getTranslation : value']",period));
        this.period.click();
        this.optionsPeriod.click();
    };
    this.sendPeriod = function (period) {
        this.periods = element(by.id("timeDurationQuantity"));
        this.periods.sendKeys(period)
    };

    this.sendProgramCourses = function (courses) {
        this.programCourses = element(by.id("programCourses"));
        this.programCourses.sendKeys(courses);
    };
    this.sendPriceRange = function (priceMin, priceMax) {
        this.priceMin = element(by.id('priceRange_min'));
        this.priceMax = element(by.id('priceRange_max'));
        this.priceMin.sendKeys(priceMin);
        this.priceMax.sendKeys(priceMax);
    };

//Justification and Relevance

    this.sendProgramJustification = function (justification) {
        this.programJustification = element(by.id("programJustification"));
        this.programJustification.sendKeys(justification);
    };

    this.sendProgramOverview = function (overview) {
        this.programOverview = element(by.id("generalDescription"));
        this.programOverview.sendKeys(overview);
    };

    //pageInitialAnalysis.sendApplicantProfile("profile");

    this.sendGraduatedProfile = function (profile) {
        this.graduatedProfile = element(by.id("graduatedProfile"));
        this.graduatedProfile.sendKeys(profile);
    };

    this.sendRequirements = function (req) {
        this.requirements = element(by.id("requirements"));
        this.requirements.sendKeys(req);
    };
    this.sendDeliveryDate = function (date) {
        this.deliveryDate = element(by.id("deliveryDate"));
        this.deliveryDate.clear();
        browser.actions().doubleClick(this.deliveryDate).perform();
        this.deliveryDate.sendKeys(date);
    };

//USP's

    this.sendUSPs = function (USP1, USP2="", USP3="", USP4="", USP5="") {
        this.USPs1 = element(by.id("suggestedUSP1"));
        this.USPs2 = element(by.id("suggestedUSP2"));
        this.USPs3 = element(by.id("suggestedUSP3"));
        this.USPs4 = element(by.id("suggestedUSP4"));
        this.USPs5 = element(by.id("suggestedUSP5"));

        this.USPs1.sendKeys(USP1);
        this.USPs2.sendKeys(USP2);
        this.USPs3.sendKeys(USP3);
        this.USPs4.sendKeys(USP4);
        this.USPs5.sendKeys(USP5);
    };

//Files
};

module.exports = allyFile;
