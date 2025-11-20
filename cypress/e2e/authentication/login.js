
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
        const user = this.data.userInformation.userLogIn;
        this.logIn = this.mainSite.goTo("Login");
        this.logIn.authDetails(user.email, user.password)
    })
})