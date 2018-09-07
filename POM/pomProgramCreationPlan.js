
let programCreationPlan = function () {

    this.selectAssignee = function (member) {
        this.assignee = element(by.id("assignee"));
        this.responsible = element(by.cssContainingText('[data-ng-bind="user.email"]', member));
        this.assignee.click();
        this.responsible.click();
    };

    this.assignTask = function (responsible) {
        this.startDate = element(by.id("activities-2-startDate"));
        this.endDate = element(by.id("activities-2-endDate"));
        this.taskResponsible = element(by.id("activities-2-assignee"));
        this.taskResponsibleContent =  element(by.cssContainingText('[data-ng-bind="user.email"]', responsible));
        this.state = element.all(by.id("ui-select-choices-row-9-2"));
    };

    this.clickRemoveAllTasks = function () {
        this.remove = element.all(by.css("[uib-tooltip='Remover']"));
        for(let i=0; i<this.remove.length;i++){
            this.remove.click();
        }
    };
    this.sendActivity = function (activityName) {
        this.activity = element(by.xpath("//input[@placeholder='Escriba..']"));
        this.activity.sendKeys(activityName);
    };

    this.checkGanttDiagram = function () {

    }

};

module.exports = programCreationPlan;