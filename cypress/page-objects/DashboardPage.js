import BasePage from "./BasePage"

class DashboardPage extends BasePage{
    isVisible() {
        cy.get('#dashboard').should('be.visible')
    }
}

export default DashboardPage