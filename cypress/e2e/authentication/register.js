//// <reference types="Cypress" />
import MainSite from "../../pages/Main/mainSite";

describe("Authentication process", () => {
    before(function() {
        cy.fixture("example.json").then(function(data) {
            this.data = data;
            this.mainSite = new MainSite();
        });
    })

    it("Register process from main Site", function() {
        const register = this.data.register;
        cy.goToUrl(this.data.url);
        this.registerPage = this.mainSite.goTo("Register");
        this.registerPage.introduceDetails(register.firstName, 
                                            register.lastName, 
                                            register.password,
                                            register.isSubscribed
                                        );
        
    })
})