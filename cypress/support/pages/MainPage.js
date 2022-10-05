const CookiePage = require("./CookiePage");


class MainPage {

    elements = {
        menuButton: () => cy.get("button.menu-button"),
        coiRenew: () => cy.get('#Coi-Renew'),
        btnAddProduct: () => cy.get("[data-cy='plusButton']"),
        orderAmount: () => cy.get('#counterEl')

    }

    gotoBaseUrl() {
        cy.visit("/", "timeout:10000");
        //assert that waits for the page to fully load.
        // CookiePage.elements.btn_acceptCookies().should('be.visible');
        //        this.callAndWaitAPI()
    }

    hoverCoiRenew() {
        this.elements.coiRenew().should("have.css", "transform", "matrix(0.7, 0, 0, 0.7, 0, 0)")
        this.elements.coiRenew().then(($el) => { $el.trigger('hover') });
        // this.elements.coiRenew().should("have.css", "transform", "matrix(1, 0, 0, 1, 0, 0)")
    }
    openMainMenu() {
        this.elements.menuButton().click({ force: true });
    }
    clickFirstMenu(menuTitle) {
        cy.get("span").contains(menuTitle, { matchCase: false }).first().click({ force: true })
    }
    addProducts(clickAmount) {
        for (let index = 0; index < clickAmount; index++) {
            this.elements.btnAddProduct().click({ force: true });
        }
    }
    callAndWaitAPI() {
        var startDate = new Date().toISOString().slice(0, 10)
        var addDate = new Date()
        addDate.setDate(addDate.getDate() + 6)
        var endDate = new Date(addDate).toISOString().slice(0, 10)

        cy
            .intercept('GET', 'https://api.sallinggroup.com/v1/holidays?startDate=2022-10-04&endDate=2022-10-10'
                /*               {
                                   method: 'GET',
                                   url: 'https://api.sallinggroup.com',
                                   pathname: '/v1/holidays',
                                   query: {
                                       'startDate': startDate,
                                       'endDate': endDate
                                   }
                               }
               */
            )
            .as('get')
        // waits for the page to fully load. last api 
        cy.wait('@get').then((req) => {
            expect(req.response.statusCode).to.eq(200)
        })
    }
}

module.exports = new MainPage();