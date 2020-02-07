import BasePage from './BasePage'

class HomePage extends BasePage {
	mainContainerIsVisible() {
		cy.get('#mainContainer').should('be.visible')
	}

	leftColumnIsVisible() {
		cy.get('#leftCol').should('be.visible')
	}

	contentColumnIsVisible() {
		cy.get('#contentCol').should('be.visible')
	}

	pageLetIsVisible() {
		cy.get('#pagelet_navigation').should('be.visible')
	}

	clickOnHomeIcon() {
		cy.get('#u_0_c').click()
	}
}

export default HomePage
