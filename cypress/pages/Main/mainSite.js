import RegisterPage from "../Auth/registerPage"
class MainSite{
    goTo(destination){
        cy.get("[title='My Account']").click()
        cy.get("ul.dropdown-menu li a")
        .contains(destination)
        .click();
        return new RegisterPage();
    }
}

export default MainSite;