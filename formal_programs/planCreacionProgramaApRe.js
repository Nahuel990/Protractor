describe("Plan de Creacion de Programa - Aprobacion/REchazo", function () {
    let end = element(by.buttonText("Finalizar"));

    it("Approval Plan", function () {
        let approval = element(by.id("planApproval-yes"));

        approval.click();
        end.click();
    });
    it("NEXT",function () {
        browser.driver.navigate().refresh();
    })
});