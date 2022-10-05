class OrderPage {

    elements = {
        btnAddProduct: () => cy.get("[data-cy='plusButton']"),
        orderAmount: () => cy.get('#counterEl'),
        btnAddToBasket: () => cy.get('[data-cy="addToBasketBtn"]'),
        btContinueToBasket: () => cy.get('[data-cy="continueToBasketBtn"]'),
        btnNextCart: () => cy.get('[data-cy="next-btn-cart"]'),
        formName: () => cy.get('[data-cy="formName"]'),
        formEmail: () => cy.get('[data-cy="formEmail"]'),
        formTel: () => cy.get('[data-cy="formTel"]'),
        formCookieAccept: () => cy.get('#formCookieAccept'),
        btnNæste: () => cy.contains('Næste')

    }

    addProducts(clickAmount) {
        for (let index = 0; index < clickAmount; index++) {
            this.elements.btnAddProduct().click();
        }
    }
    addToBasketBtn() {
        this.elements.btnAddToBasket().click();
        // Click on GÅ TIL KURVEN
        this.elements.btContinueToBasket().click()

        // Click on NÆSTE
        this.elements.btnNextCart().click();
    }
    inputPlaceholderInfo() {
        this.elements.formName().type("Zafer")
        this.elements.formEmail().type("z@k.com")
        this.elements.formTel().type("11111111")
        this.elements.formCookieAccept().click();
        this.elements.btnNæste().click()
    }
}

module.exports = new OrderPage();