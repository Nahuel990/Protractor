'use strict';

let language = require('../languages/español.json');
    let commonButtons = function () {
        this.clickNext = function () {
            this.next = element(by.buttonText(language.commonNavigationButtons.next));
            this.next.click();
        };
        this.clickNextTask = function () {
            this.nextTask = element(by.buttonText(language.commonNavigationButtons.nextTask));
            this.nextTask.click();
        };
        this.clickFinisTask = function () {
            this.finishTask = element(by.buttonText(language.commonNavigationButtons.finishTask));
            this.finishTask.click();
        };
        this.clickSeeCalculationsAndDiagrams = function () {
            this.seeCalculationsAndDiagrams = element(by.buttonText(language.commonNavigationButtons.seeCalculationsAndDiagrams));
            this.seeCalculationsAndDiagrams.click();
        };
        this.clickYesSend = function () {
            this.yesSend = element(by.buttonText(language.commonNavigationButtons.yesSend));
            this.yesSend.click();
        };
        this.clickRegisterCommitteeEvaluationResults = function () {
            this.registerCommitteeEvaluationResults = element(by.buttonText(language.commonNavigationButtons.registerCommitteeEvaluationResults));
            this.registerCommitteeEvaluationResults.click();
        };
        this.clickSave = function () {
            this.save = element(by.buttonText(language.commonNavigationButtons.save));
            this.save.click();
        };
        this.clickClose = function () {
            this.close = element(by.buttonText(language.commonNavigationButtons.close));
            this.close.click();
        };
        this.clickApprove = function () {
            this.approve = element(by.buttonText(language.commonNavigationButtons.approve));
            this.approve.click();
        };
        this.clickYes = function () {
            this.yes = element(by.buttonText(language.commonNavigationButtons.yes));
            this.yes.click();
        };
        this.clickAttach = function () {
            this.attach = element(by.buttonText(language.commonNavigationButtons.attach));
            this.attach.click();
        }
    };

module.exports = commonButtons;



