// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("goToUrl", (url) => {
    cy.visit(url);
})

Cypress.Commands.add("logIn", (email, password) => {
    return cy.request({
        method: "POST",
        url: "https://opencart.abstracta.us/index.php?route=account/login",
        form: true,
        headers: {
        "X-Requested-With": "XMLHttpRequest"
        },
        body: {
        email,
        password
        }
    }).then((resp) => {
        expect(resp.status).to.be.oneOf([200, 302]);
        return resp;
    });
});

Cypress.Commands.add("addProduct", (id, quantity = 1) => {
    return cy.request({
        method: "POST",
        url: "https://opencart.abstracta.us/index.php?route=checkout/cart/add",
        form: true,
        headers: {
        "X-Requested-With": "XMLHttpRequest"
        },
        body: {
        product_id: id,
        quantity: quantity
        }
    }).then((resp) => {
            expect(resp.status).to.eq(200);
            if (resp.body && typeof resp.body === "object") {
                expect(resp.body).to.have.property("success");
            } else {
                expect(resp.body).to.exist;
            }
            return resp;
    });
});