
///<reference types="cypress-iframe" />

//Importing files down
import steps from './TestScripts/steps'


const StepsObj = new steps();

describe('Validate office address', function () {


    it("Navigate to google", function () {
        StepsObj.visitGoogle();
    });

    it("Find the text field", function () {
        StepsObj.findSearchText();
        //cy.get('[href="https://www.nisum.com/"] > .TbwUpd > .iUh30').click();
        //cy.xpath('//h3[text()="Nisum: Home"]').click();
        //cy.xpath("(//cite[@class='iUh30 tjvcx'])[1]").click();
    });

    it('validate address heading', () => {
        StepsObj.findAddress();
    });

    it('validate complete address', () => {
        StepsObj.findCompleteAddress();
    });

    it('Nisum link address', () => {
        StepsObj.findNisumLink();
    });

    it('Navigate to PAKISTAN Tab', () => {
        StepsObj.clickPakistan();
    });

    it('Get Address from nisum site', () => {
        StepsObj.getPakAddress();
    });

});