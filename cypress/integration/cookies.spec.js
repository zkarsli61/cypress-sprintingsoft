/// <reference types="cypress" />

import cookie from "./pages/CookieInfoPage";
import main from "./pages/MainPage";


describe('Cookies Suite', () => {
    before('Navigate to baseUrl', () => {
        cy.visit("/");
    });

    it('We are able to choose type of cookies', () => {
        cookie.checkStatistic().should('be.checked');
        cookie.checkFunctional().should('be.checked');
        cookie.checkNecessary();
        cookie.checkMarketing().should('be.checked');
        cookie.showDetails();
        cy.get('input.coi-consent-banner__category-expander').should('have.length', 5);
        cookie.updateCookies();
        main.getTopMenuLogo().should('be.visible');

    });

    it('Accept All Cookies', () => {
        cookie.acceptCookies();
        main.getTopMenuLogo().should('be.visible');

    });
});