'use strict';
let data = require('../languages/español.json');

    let logIn = function () {
        this.email = element(by.model('LoginCtrl.user.email'));
        this.password = element(by.model('LoginCtrl.user.password'));
        this.logIn = element(by.buttonText('Iniciar Sesión'));

        this.sendEmail = function(mail) {
            this.email.sendKeys(mail);
        };
        this.sendPassword = function (pass) {
            this.password.sendKeys(pass);
        };
        this.clickLogIn = function () {
            this.logIn.click();
        };

        this.simplifiedLogin = function (mail,pass) {
            this.email.sendKeys(mail);
            this.password.sendKeys(pass);
            this.logIn.click();
        };

        this.renameProgram = function(){
            let dateObj = new Date(),
                month = dateObj.getUTCMonth() + 1,
                day = dateObj.getUTCDate(),
                year = dateObj.getUTCFullYear(),
                hour = dateObj.getHours(),
                min = dateObj.getMinutes(),
                newDate = year + "#" + month + "#" + day + "#" + hour + "%" + min;

            data.academicProgramBrief.programName = "Programa " + newDate;
            data.internationalProgram.allyFile.IPName = "Programa " + newDate;
        }
    };

module.exports = logIn;



