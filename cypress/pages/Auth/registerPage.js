class RegisterPage{
    introduceDetails(firstName, lastName, password, isSubscribed) {
        let email = this.#generateRandomEmail();
        let phoneNumber = this.#generateRandomPhone();
        isSubscribed = this.#newsLetter(isSubscribed);

        cy.get("#input-firstname").type(firstName)
        cy.get("#input-lastname").type(lastName)
        cy.get("#input-email").type(email)
        cy.get("#input-telephone").type(phoneNumber)
        cy.get("#input-password").type(password)
        cy.get("#input-confirm").type(password)

        const news = cy.get(".radio-inline")
        isSubscribed ? news.eq(0).click() : news.eq(1).click();

        //For some reason the page does not load when submitting the form
        cy.get("div.pull-right input").each((ele) => {
            cy.wrap(ele).click()
        })
        //cy.get('[type="checkbox"]').click()
        //cy.get(".btn-primary").click()
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

    #newsLetter(isSubscribed){
        return Math.random() < 0.5;
    }
}

export default RegisterPage;