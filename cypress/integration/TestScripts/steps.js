import locator from "../../fixtures/locator"
import constant from "../../fixtures/constant"

class steps {

    static address="ABC";
    static address2="ABC";
    // constructor() {
    //     this.address = "ABC";
    //     this.address2="ABC";
    // }

    visitGoogle() {
        cy.visit(constant.GooGLE_URL);
    }

    findSearchText() {
        var textField = cy.get(locator.Text_Field);
        textField.clear();
        textField.type(locator.CompanyName);
        textField.type('{enter}');
        return this;
    }

    findAddress() {
        cy.contains(locator.AddressHeading).should('be.visible');
        return this;
    }

    findCompleteAddress() {

        cy.get(locator.completeAddress)
            .first().invoke('text').then(($field) => {

                this.address = $field;
                expect(this.address).to.equal(constant.Google_Page_Address);

                console.log('First address',this.address);

                

            });

            return this;
    }

    findNisumLink() {
        cy.get(locator.NisumLink).click();
        //cy.visit(locator.Link);
        //cy.get('//div[@class="TbwUpd NJjxre"]//cite)[1]').click();
        //cy.contains(locator.NisumLink).click();

        return this;
    }

    clickPakistan() {
        cy.contains(locator.PakLink).click();
    }

    getPakAddress() {

        cy.get(locator.NisumAddress).invoke('text')
        .then(($abc)=>{

            this.address2=$abc;
            console.log(this.address2);
           // expect(this.address2).to.equal(constant.Nisum_Page_Address);
            //expect(this.address2).to.equal(constant.Nisum_Page_Address);

            //expect(this.address).to.equal(this.address2);
            
            console.log(this.address);
            console.log('Second address',this.address2);
            return this;

        });
    }

}

export default steps;