/// <reference types="cypress" />

import cookie from "./pages/CookieInfoPage";
import main from "./pages/MainPage";


describe('Menu Item scenarios', () => {

    before('Given user on the main page', () => {
        cy.visit("/");
        cookie.acceptCookies();
        main.getTopMenuLogo().should('be.visible');
    });

    it('Choose Bager Category', () => {
        main.openMainMenu();
        main.chooseCategory("Bager");
        cy.url().should('include', '/bager');
    });
});

