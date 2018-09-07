// imports Page Objects who have the ID of element finders
let data = require('../languages/español.json'),
    pomLogIn = new require('../POM/pomLogIn.js'),
    pomRoles = new require('../POM/pomRoles.js');



describe('Atlas', function() {
    let pageLogIn = new pomLogIn(),
        pageRoles = new pomRoles();

    it('Get URL', function() {
        browser.get(data.URL);
        expect(browser.getTitle()).toEqual('Atlas > Log In');
    });

    //Call mail and password from json and send to PO
    it('Enters user and password', function(){
        pageLogIn.sendEmail(data.userName);
        pageLogIn.sendPassword(data.password);
        pageLogIn.clickLogIn();
    });

    //Select role from json and send to PO
    it('Select role', function () {
        pageRoles.clickDisplayRoles();
        pageRoles.selectRole(data.role);
        pageRoles.selectRoleUniversity(data.university);
        pageLogIn.renameProgram();
    });


    it('Selecciona para editar el programa', function () {
        //click in case program to edit, else Create new program
        var value = "";
       // var elem = element.all(by.css('[data-ng-if="ProgramCtrl.canEdit(task)"]')).get(0);
        //element.all(by.css('[data-ng-if="!task.inCommitteeReview && !task.specialPhase"]')).get(0).getText().then(text=>{value = text});
        var newProgram = element(by.xpath("//*[text()[contains(.,'"+data.commonNavigationButtons.createNewProgram+"')]]"));
        newProgram.click();
        /*elem.isPresent().then(done =>{

            if(done && value.match(/([Revisión de Entorno de mercado ]+ \/ +[Crear]+ [Market]+ [Map])\w+/g)){
                elem.click();
            }else{

            }
        });*/





    });
});



