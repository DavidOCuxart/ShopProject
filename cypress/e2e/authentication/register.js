//// <reference types="Cypress" />
import MainSite from "../../pages/Main/mainSite";

describe("Authentication process", () => {
    beforeEach(function() {
        cy.fixture("example.json").then(function(data) {
            this.data = data;
            this.mainSite = new MainSite();
        });
    })

    it("Register process from main Site", function() {
        cy.goToUrl(this.data.url);
        const user = this.data.userInformation.userRegister;
        this.registerPage = this.mainSite.goTo("Register");
        this.registerPage.introduceDetails(user.firstName, 
                                            user.lastName, 
                                            user.password,
                                            user.isSubscribed
                                        );
    })
})