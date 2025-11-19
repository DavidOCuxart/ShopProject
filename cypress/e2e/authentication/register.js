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
        cy.goToUrl(this.data.url);
        const register = this.data.register;
        this.registerPage = this.mainSite.goTo("Register");
        this.registerPage.introduceDetails(register.firstName, 
                                            register.lastName, 
                                            register.password,
                                            register.isSubscribed
                                        );
        
    })
})