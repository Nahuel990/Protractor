let commonNavigationButtons = new require('../POM/commonNavigationButtons.js'),
    pomProgramCreationPlan = new require('../POM/pomProgramCreationPlan'),
    data = require('../languages/español.json');

describe("Plan de Creacion de Programa", function () {
    let pageCommonButtons = new commonNavigationButtons(),
        pageProgramCreationPlan = new pomProgramCreationPlan();

    it("Responsible", function () {
        pageProgramCreationPlan.selectAssignee(data.programCreationPlan.responsible);
    });

    it("Activities", function () {

        pageProgramCreationPlan.clickRemoveAllTasks();
    });
    it("Fill Activities", function () {
        let startDate = element(by.id("activities-2-startDate")),
            endDate = element(by.id("activities-2-endDate"));
        let taskResponsible = element(by.id("activities-2-assignee")),
            taskResponsibleContent =  element(by.cssContainingText('[data-ng-bind="user.email"]', 'gabriela.chaves@test.com')),
            state = element.all(by.id("ui-select-choices-row-9-2")),
            remove = element(by.css("[uib-tooltip='Remover']"));

        remove.click();
        remove.click();
        pageProgramCreationPlan.sendActivity(data.programCreationPlan.activity1);
        pageProgramCreationPlan.assignTask(data.programCreationPlan.responsible);
        browser.actions().doubleClick(startDate).perform();
        startDate.sendKeys("26/6/17");
        browser.actions().doubleClick(endDate).perform();
        endDate.sendKeys("28/7/17");

        taskResponsible.click();
        taskResponsibleContent.click();
        state.click();
    });


    it("Finalize", function () {
        pageCommonButtons.clickFinisTask();
        pageCommonButtons.clickYesSend();
        browser.driver.navigate().refresh();
    })

});