let data = require("../languages/español.json"),
    pomIPFeasibilityAnalysis= new require('../POM/IP/pomIPFeasibilityAnalysis.js'),
    pomFeasibilityAndRelevanceAnalysis = new require ('../POM/pomFeasibilityAndRelevanceAnalysis.js'),
    commonNavigationButtons = new require('../POM/commonNavigationButtons.js');

describe('IP Feasibility Analysis', function () {

    let pageCommonButtons = new commonNavigationButtons(),
        pageFeasibilityAndRelevanceAnalysis = new pomFeasibilityAndRelevanceAnalysis(),
        pageIPFeasibilityAnalysis = new pomIPFeasibilityAnalysis();

   it('Undergraduate Info Mcdo - Univ', function () {
       pageIPFeasibilityAnalysis.selectPreFaculty("INGENIERIA");
       pageIPFeasibilityAnalysis.selectPreKnowledgeAreaSegmentation("TECNICA");
       pageIPFeasibilityAnalysis.sendPreCareerSegmentation("Carrera 1");
       pageIPFeasibilityAnalysis.sendPreStudents(35);
       pageCommonButtons.clickSave();
       pageCommonButtons.clickNext();
   });
   it('Postgraduate Info Mcdo - Univ', function () {
       pageIPFeasibilityAnalysis.selectPostFaculty("CIENCIAS DE LA EDUCACIÓN");
       pageIPFeasibilityAnalysis.selectPostKnowledgeAreaSegmentation("LENGUAJES");
       pageIPFeasibilityAnalysis.sendPostCareerSegmentation("Carrera 2");
       pageIPFeasibilityAnalysis.sendPostStudents(22);
       pageCommonButtons.clickSave();
       pageCommonButtons.clickNext();
   });
   it('Competition', function () {
        pageIPFeasibilityAnalysis.sendProgramPrice(400);
       pageCommonButtons.clickSave();
        pageCommonButtons.clickNext();
   });
   it('USP\'s', function () {
        pageIPFeasibilityAnalysis.sendUSP("Esto es un USP de Prueba");
        pageCommonButtons.clickNext();
   });
   it('Marketing Information', function () {
       pageFeasibilityAndRelevanceAnalysis.sendLeads("20");
       pageFeasibilityAndRelevanceAnalysis.sendConvertionRate("20");
       pageIPFeasibilityAnalysis.sendIPEstimatedEnrollments("20");
       pageFeasibilityAndRelevanceAnalysis.clickMarketResearch();
       pageFeasibilityAndRelevanceAnalysis.clickOptionsMarketResearch(data.feasibilityAndRelevanceAnalysis.optionsMarketResearch);
       pageFeasibilityAndRelevanceAnalysis.sendJustificationNotMarketResearch("Test");
       pageIPFeasibilityAnalysis.sendAcquisitionCost(200);
       pageCommonButtons.clickSave();
       pageCommonButtons.clickNext();
   });
   it('Projections', function () {
       for (let id = 0; id<=4; id++){
           pageIPFeasibilityAnalysis.sendCurriculumMesh(id, Math.floor(Math.random() * 90 + 10));
           pageIPFeasibilityAnalysis.sendElectiveOption(id,Math.floor(Math.random() * 90 + 10));
           pageIPFeasibilityAnalysis.sendDirectSale(id,Math.floor(Math.random() * 90 + 10));
           pageIPFeasibilityAnalysis.sendB2B(id, Math.floor(Math.random() * 90 + 10));
           pageIPFeasibilityAnalysis.sendTargetMarketGrowth(id, Math.floor(Math.random() * 90));
           pageIPFeasibilityAnalysis.sendProgramGrowth(id, Math.floor(Math.random() * 90))
       }
       pageCommonButtons.clickSave();
       pageCommonButtons.clickNext();
   });
   it('Prices', function () {

   });
   it('Conclusions', function () {

   });



});