import BasePage from './BasePage'

class HomePage extends BasePage {
	visit() {
		cy.visit('/')
	}

	signInButtonIsVisible() {
		cy.contains('Sign in').should('be.visible')
	}
}

export default HomePage
