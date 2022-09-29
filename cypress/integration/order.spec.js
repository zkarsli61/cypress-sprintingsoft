/// <reference types="cypress" />

import cookie from "./pages/CookieInfoPage";
import main from "./pages/MainPage";

describe('Order Suite', () => {

    before('Given user on the product page', () => {
        cy.visit("/");
        cookie.acceptCookies();
        main.getTopMenuLogo().should('be.visible');
        main.openMainMenu();
        main.chooseCategory("Bager");
        cy.url().should('include', '/bager');
    });

    it('Order MorgenMenu', () => {
        cy.get('div.product-item').contains('Morgenmenu').click({ force: true });
        cy.url().should("include", "/morgenmenu");

        // number of amount assertion
        cy.get('[data-cy="plusButton"]').click();
        cy.get('#counterEl').invoke('val').then(($amount) => {
            expect($amount).eq('1');
        });

        /*

        The following error originated from your application code, not from Cypress.
        > Cannot read properties of undefined (reading 'classList')
        When Cypress detects uncaught errors originating from your application it will automatically fail the current test.
        This behavior is configurable, and you can choose to turn this off by listening to the uncaught:exception event.
        */

        cy.get('[data-cy*="randomBtn"]').should($el => {
            expect(Cypress.dom.($el)).to.eq(false)
        })
            .click();
    });
});