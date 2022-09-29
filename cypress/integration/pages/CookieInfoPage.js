import main from "./MainPage";

class CookieInfoPage {
    checkStatistic() {
        return cy.get('#cookie_cat_statistic').check();
    }

    checkFunctional() {
        return cy.get('#cookie_cat_functional').check()
    }

    checkNecessary() {
        return cy.get('#cookie_cat_necessary').click({ force: true });
    }

    checkMarketing() {
        return cy.get('#cookie_cat_marketing').check();
    }

    showDetails() {
        return cy.get('#show_details').click()
    }

    acceptCookies() {
        cy.get("button.coi-banner__accept").last().click({ force: true });
    }

    updateCookies() {
        cy.get("#updateButton").click();
    }

}

const cookie = new CookieInfoPage();

export default cookie; 
