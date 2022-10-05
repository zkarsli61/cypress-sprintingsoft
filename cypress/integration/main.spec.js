/// <reference types="cypress" />



import CookiePage from "../support/pages/CookiePage";
import MainPage from "../support/pages/MainPage";
import OrderPage from "../support/pages/OrderPage";


describe('Menu Page scenarios', () => {

    before('Visit base url. assertion that waits for the page to fully load.', () => {
        //Visit base url. 
        MainPage.gotoBaseUrl()
        //Accept all cookies and click to see more information.
        CookiePage.acceptCookies();
    });

    // Actually there is no hover over action on Cypress
    it.skip('Hover over id="Coi-Renew" element', () => {
        MainPage.hoverCoiRenew()
    });

    it.skip('api testing', () => {
        MainPage.callAndWaitAPI()
    });

    it('Order menu', () => {
        //Choose first Tapas Menu
        MainPage.clickFirstMenu('tapas');
        // // Add 8 products
        OrderPage.addProducts(3)
        OrderPage.elements.orderAmount().should("have.value", '8');

        // Click on TILFØJ TIL KURV
        OrderPage.addToBasketBtn()

        // Input placeholder information and click NÆSTE
        OrderPage.inputPlaceholderInfo()

        // Select Bilka Tilst
        cy.contains('Bilka Tilst').click()
        cy.contains('Næste').click()

        // Set any time and date.

        cy.get('[data-cy="datePickerTextBox"]').click()
        //       cy.contains('chevron_right').click()
        cy.get('div.v-date-picker-table td button:not(.v-btn--disabled)').first().click()
        //       cy.contains('6.').should('be.enabled').click()

        cy.get('[data-cy="pickUpTimeTxtField"]').should('be.enabled').click()
        cy.contains('12:00').should('be.enabled').click({ force: true })
        cy.contains('Næste').click()

        // Go to BESTILLING and click on both checkmarks.

        cy.get('#termsAndPolicyAccept').click({ force: true })
        cy.get('#smagSallingConsentAccept').click({ force: true })
        cy.get('[data-cy="sendPrepaidOrderBtn"]').click()

        // Assert that you were redirected to the payment page.
        cy.url().should('include', 'hostedpaymentpage')

        // Go back from the payment page to the website.
        cy.go('back')
        cy.url().should('include', '3')

        // Clear local storage and explain the proper use of it.
        cy.clearLocalStorage()
    });
});

