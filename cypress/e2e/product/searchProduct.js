import ProductPage from "../../pages/Product/productPage";

describe("Searching Products", () => {
    beforeEach(function () {
        cy.fixture("example.json").then((data) => {
            this.data = data;
            this.productPage = new ProductPage();

            cy.request({
                method: "POST",
                url: "https://opencart.abstracta.us/index.php?route=account/login",
                form: true,
                body: {
                    email: data.userInformation.userLogIn.email,
                    password: data.userInformation.userLogIn.password
                }
            }).then(() => {
                cy.goToUrl(data.url);
            });
        });
    });

    it("Search and add 1 product", function() {
        const product_1 = this.data.products.product_1;
        this.productPage.searchProduct(product_1.name)
        this.productPage.enterProductDetails(product_1.name)
        this.productPage.addToCart();
        this.productPage.confirmAddToCart(product_1.name)
        
    })

    it("Search and add 1 or more product amount", function() {
        const product_1 = this.data.products.product_1;
        this.productPage.searchProduct(product_1.name)
        this.productPage.enterProductDetails(product_1.name)
        cy.log(product_1.amount)
        this.productPage.addToCart(product_1.amount);
        this.productPage.confirmAddToCart(product_1.name)
    })

    it("add to wish List", function(){
        
    })

})