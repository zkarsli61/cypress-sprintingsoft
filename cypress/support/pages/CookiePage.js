const MainPage = require("./MainPage");

class CookiePage {

    elements = {
        btn_acceptCookies: () => cy.get("button.coi-banner__accept").last()
    }

    acceptCookies() {
        this.elements.btn_acceptCookies().click({ force: true });
        MainPage.elements.menuButton().should('be.visible');
    }
}

module.exports = new CookiePage();

