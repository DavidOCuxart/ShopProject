import ProductPage from "../../pages/Product/productPage";

describe("CheckOut Products", function(){
    before(function(){
         cy.fixture("example.json").then((data) => {
            this.data = data;
            this.productPage = new ProductPage(); 
        });
    })
    beforeEach(function(){
    // limpiar cookies/sessions para no arrastrar estados si lo deseas
    cy.clearCookies();

    // login — esperamos implicitamente porque el comando devuelve la request
    cy.logIn(this.data.userInformation.userLogIn.email,
             this.data.userInformation.userLogIn.password);

    // añadir producto — esperamos la respuesta
    cy.addProduct(this.data.products.product_1.id,
                  this.data.products.product_1.quantity);

    // ahora visita la UI si quieres validar visualmente
    cy.visit(this.data.url);
  });

    it("", function(){

    })
})