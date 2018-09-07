'use strict';
let data = require('../languages/español.json'),
    commonNavigationButtons = new require('./commonNavigationButtons.js'),
    pomLogIn = new require('./pomLogIn.js'),
    pomRoles = new require('./pomRoles.js');

let registerResultsCommitteeEvaluation = function () {
    let pageCommonButtons = new commonNavigationButtons();

    //Select date
    this.selectDate = function (date) {
        this.date = element(by.id("date"));
        browser.actions().doubleClick(this.date).perform();
        this.date.sendKeys(date);
        pageCommonButtons.clickClose();
    };

    //Select program
    this.selectProgram = function (program) {
        this.table = element(by.xpath("//table//tr[*][contains(.,'" +program +"')]//td[1]//button"));
        this.tableApproved = element(by.xpath("//table//tr[*][contains(.,'" +program +"')]//td[3]//button"));
        this.table.click();
        this.tableApproved.click();
    };

    //Vote results
    this.seeResultsAndVote = function (program) {
        this.results = element(by.cssContainingText("[class='nav-label ng-binding']", data.voteReports.results));
        this.approveDecline = element(by.cssContainingText("[class='nav-label ng-binding']", data.voteReports.approveDecline));
        this.clickProgram = element(by.xpath("//table//tr[*][contains(.,'"+program+"')]//td[1]//a"));
        this.results.click();
        this.approveDecline.click();
        this.clickProgram.click();
        pageCommonButtons.clickApprove();
    };
    this.closeToast = function () {
        this.close = element(by.buttonText("×"));
        this.close.isPresent().then(present => {
            if (present) {
                this.close.click();
            } else {
                console.log("Not present");
            }
        })

    };
    this.closeSession = function () {
        this.close = element(by.css("[data-ng-click='BaseCtrl.logOut()']"));
        this.close.click();
        pageCommonButtons.clickYes();
    };

};

module.exports = registerResultsCommitteeEvaluation;