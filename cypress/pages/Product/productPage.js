class ProductPage{
    searchProduct(productName){
        cy.get(".input-lg").type(productName)
        cy.get('[class="btn btn-default btn-lg"]').click()
    }

    enterProductDetails(name){
        cy.get(".product-grid .product-thumb").contains("a" ,name).click()
    }

    addToCart(amount = 0){
        cy.log(amount)
        if(amount != 0){
            cy.get("#input-quantity").invoke("attr", "value", amount)
        }
        cy.get("#button-cart").click();
    }

    confirmAddToCart(productName){
        cy.get(".alert-success").contains(`You have added ${productName} to your shopping cart!`)
    }

    goToCart(){
        
    }
}

export default ProductPage;