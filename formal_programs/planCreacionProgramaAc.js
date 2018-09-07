describe("Plan de Creacion de Programa - Actualizar", function () {
    let end = element(by.buttonText("Guardar"));
    
    it("Change State", function () {
        let activity = element(by.id("activities-0-status"));
        let complete = element(by.xpath("//div[text()[contains(.,'Completada')]]"));

        activity.click();
        complete.click();
        end.click();
        browser.driver.navigate().refresh();
    })
});