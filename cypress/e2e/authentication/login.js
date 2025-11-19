
import MainSite from "../../pages/Main/mainSite";

describe("Authentication process", () => {
    before(function() {
        cy.fixture("example.json").then(function(data) {
            this.data = data;
            this.mainSite = new MainSite();
            cy.goToUrl(this.data.url);
        });
    })

    it("LogIn", function() {
        this.logIn = this.mainSite.goTo("Login");
        this.logIn.authDetails(this.data.email, this.data.password)
        this.logIn.confirmLogIn(this.data.email);
    })
})