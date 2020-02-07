import BasePage from './BasePage'

class LoginPage extends BasePage {
	visit() {
		cy.visit('/login')
	}

	loginButtonIsVisible() {
		cy.get('#loginbutton').should('be.visible')
	}

	loginFormIsVisible() {
		cy.get('#login_form').should('be.visible')
		cy.get('#pagelet_bluebar').should('be.visible')
	}

	validateErrorMessage(message) {
		cy.get('._4rbf').should('have.text', message)
	}

	fillEmail(email) {
		cy.get('#email')
			.clear()
			.type(email)
	}

	fillPassword(password) {
		cy.get('#pass')
			.clear()
			.type(password)
	}

	clickOnLoginButton() {
		cy.get('#loginbutton').click()
	}
}

export default LoginPage
