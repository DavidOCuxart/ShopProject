/// <reference types="Cypress" />
import RegisterPage from "cypress/pages/Auth/registerPage.js";

describe("Authentication process", () => {
    before(function() {
        cy.fixture("example.json").then(function(data) {
            this.data = data;
            this.registerPage = new RegisterPage();
        });
    })

    it("LogIn", function() {
        
    })
})