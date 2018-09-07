describe("Validar Premisas Financieras",function () {

    let next = element(by.buttonText("Siguiente"));
    let see = element(by.buttonText("Ver Cálculos y Gráficos"));
    let end = element(by.buttonText("Finalizar"));
    let nextTask = element(by.buttonText("Siguiente tarea"));

    it("Financial Premises", function () {
        next.click();
    });
    it("Growth New Students", function () {
        next.click();
    });
    it("Projected New Students", function () {
        next.click();
    });
    it("Teachers", function () {
        next.click();
    });
    it("CAPEX", function () {
        see.click();
        end.click();
        nextTask.click();
        browser.pause();
    })

});