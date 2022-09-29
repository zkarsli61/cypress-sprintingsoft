class MainPage {

    getTopMenuLogo() {
        return cy.get("a.top-menu-logo");
    }

    openMainMenu() {
        cy.get("button.menu-button").click({ force: true });
    }

    chooseCategory(name) {
        return cy.get(".v-list__tile__title > a").contains(name).click({ force: true });
    }
}
const main = new MainPage();
export default main;