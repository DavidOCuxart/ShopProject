import ProductPage from "../../pages/Product/productPage";
import MainSite from "../../pages/Main/mainSite";

describe("CheckOut Products", function(){
      before(function(){
          cy.fixture("example.json").then((data) => {
              this.data = data;
              this.productPage = new ProductPage(); 
          });
      })
      beforeEach(function(){
      /* The logIn in this website does not retain the session correctly, we use a normal LogIn Process as a normal Login Process is required a normal process with UI
      of adding the product is also required
      cy.logIn(this.data.userInformation.userLogIn.email,
              this.data.userInformation.userLogIn.password);*/
        cy.goToUrl(this.data.url)

        cy.logInWithUI(this.data.userInformation.userLogIn.email,
                        this.data.userInformation.userLogIn.password)
        cy.addProduct(this.data.products.product_1.id,
                      this.data.products.product_1.quantity);
    });

  it("Check out a Product", function(){
      cy.get(".btn-inverse").click()
      cy.get("p.text-right strong").contains("View Cart").click()
  })
})