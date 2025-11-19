class LoginPage{
    authDetails(email, pass){
        cy.get("#input-email").type(email);
        cy.get("#input-password").type(pass);
        cy.get('[value="Login"]').click()
    }

    confirmLogIn(email){
        cy.log(cy.url())
        cy.url().should("include", "https://opencart.abstracta.us/index.php?route=account/account")
        cy.get(".list-unstyled").contains("Edit Account").click()
        cy.get("#input-email").invoke("attr", "value").then((value) => {
            expect(value).to.equal(email)
        })
    }
}

export default LoginPage;