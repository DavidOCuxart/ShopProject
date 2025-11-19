class RegisterPage{
    introduceDetails(firstName, lastName, password, isSubscribed) {
        let email = this.#generateRandomEmail();
        let phoneNumber = this.#generateRandomPhone();
        isSubscribed = this.#newsLetter();

        cy.get("#input-firstname").type(firstName)
        cy.get("#input-lastname").type(lastName)
        cy.get("#input-email").type(email)
        cy.get("#input-telephone").type(phoneNumber)
        cy.get("#input-password").type(password)
        cy.get("#input-confirm").type(password)

        cy.get('input[name="newsletter"]').then(($el) => {
            isSubscribed == true ? cy.wrap($el[0]).click(): cy.wrap($el[1]).click()
        })
        
        cy.get("div.pull-right input").each((ele) => {
            cy.wrap(ele).click()
        })
    }

    #generateRandomPhone(){
        let phoneNumber = "";
        while(phoneNumber.length < 9){
            phoneNumber+= Math.floor(Math.random()*10)
        }
        
        return phoneNumber;
    }

    #generateRandomEmail(){
        return `email_${Date.now()}@gmail.com`
    }

    #newsLetter(){
        return Math.random() < 0.5;
    }
}

export default RegisterPage;