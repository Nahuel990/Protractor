describe("Aprobacion Ente Regulador/Aprobador", function () {
    let end = element(by.buttonText("Finalizar"));
    let next2 = element(by.buttonText("Siguiente Tarea"));
    let path = require('path');
    let fileHola = "./Hola.txt";
    let absolutePath = path.resolve(__dirname, fileHola);
    it("Does the University require approval from an External Regulatory Body?", function () {

        let yes = element(by.id("requireAuthorization-yes")),
         documentSubmissionDate = element(by.id("sentDate")),
         documentResponseDate = element(by.id("receivedDate")),
         comments = element(by.id("comments")),
         attachPDF = element(by.xpath("//input[@type='file']")),
         status = element(by.id("status")),
         options = element.all(by.binding("value | translate")).get(1);


        browser.driver.navigate().refresh();
        yes.click();

        browser.actions().doubleClick(documentResponseDate).perform();
        documentResponseDate.sendKeys("23/7/17");


        browser.actions().doubleClick(documentSubmissionDate).perform();
        documentSubmissionDate.sendKeys("18/7/17");
        comments.click();
        comments.sendKeys("100");


        //attachPDF.click();
        attachPDF.sendKeys(absolutePath);
        status.click();
        options.click();

        
    });

    it("Aprobado",function () {
        let programCode = element(by.id("programCode")),
            validSince = element(by.id("programValidityFrom")),
            validUntil = element(by.id("programValidityTo"));

        programCode.sendKeys("500");

        browser.actions().doubleClick(validSince).perform();
        validSince.sendKeys("23/7/17");

        browser.actions().doubleClick(validUntil).perform();
        validUntil.sendKeys("23/7/17");


    });
    it("Finalizar",function () {
        end.click();
        next2.click();
    })

});