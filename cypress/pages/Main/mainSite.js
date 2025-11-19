import RegisterPage from "../Auth/registerPage"
import LoginPage from "../Auth/loginPage"
class MainSite{
    goTo(destination){
        cy.get("[title='My Account']").click()
        cy.get("ul.dropdown-menu li a")
        .contains(destination)
        .click();
        if(destination == "Register"){
            return new RegisterPage()
        }else{
            return new LoginPage();
        }

    }
}

export default MainSite;