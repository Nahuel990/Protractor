let commonNavigationButtons = new require('../POM/commonNavigationButtons.js'),
    pomRegisterResultsCommitteeEvaluation = new require('../POM/pomRegisterResultsCommitteeEvaluation.js'),
    data = require('../languages/español.json'),
    pomLogIn = new require('../POM/pomLogIn.js'),
    pomRoles = new require('../POM/pomRoles.js');

describe("Register Results: Committee Evaluation", function () {
    let pageCommonButtons = new commonNavigationButtons(),
        pageRegisterResultsCommitteeEvaluation = new pomRegisterResultsCommitteeEvaluation(),
        pageLogIn = new pomLogIn(),
        pageRoles = new pomRoles();

   it("Last task completed: Initial Analysis", function () {
        pageRegisterResultsCommitteeEvaluation.selectDate("1/8/17");
        pageRegisterResultsCommitteeEvaluation.selectProgram(data.academicProgramBrief.programName);
        pageCommonButtons.clickFinisTask();
        pageCommonButtons.clickYesSend();
   });
   it("Vote report", function () {
       pageRegisterResultsCommitteeEvaluation.seeResultsAndVote(data.academicProgramBrief.programName);
       pageRegisterResultsCommitteeEvaluation.closeToast();
   });
   it("Commitee members", function () {
       pageRegisterResultsCommitteeEvaluation.closeSession();
   });
   it("Vote",function () {
       pageLogIn.simplifiedLogin(data.committeeMembers.user1, data.committeeMembers.pass1);
       pageRoles.clickDisplayRoles();
       pageRoles.selectRole(data.role);
       pageRoles.selectRoleUniversity(data.university);
       pageRegisterResultsCommitteeEvaluation.seeResultsAndVote(data.academicProgramBrief.programName);
       pageRegisterResultsCommitteeEvaluation.closeToast();
   });
   it("Restore Session", function () {
       pageRegisterResultsCommitteeEvaluation.closeSession();
       pageLogIn.simplifiedLogin(data.userName,data.password);
       pageRoles.clickDisplayRoles();
       pageRoles.selectRole(data.role);
       pageRoles.selectRoleUniversity(data.university);

       var buscar = element(by.xpath("//div[@class='form-group vertical-align']/input"));
       var edit = element(by.xpath("//*[@id='page-wrapper']/div[2]/div[1]/div/div/div[2]/div/div/div/div[3]/div/ul/li[1]/div/div[3]/a/i"));
       buscar.sendKeys(data.academicProgramBrief.programName);
       edit.click();

   });
});