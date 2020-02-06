import BasePage from "./BasePage"

class SignInPage extends BasePage {
    visit() {
      cy.visit('/login');
    }

    signInFormIsVisible() {
        cy.get('#login').should('be.visible')
    }
  
    validateErrorMessage(message) {
      cy.get('#js-flash-container').should('have.text', message)
    }
  
    fillUsername(username) {
        cy.get('#login_field').clear().type(username)
    }
  
    fillPassword(password) {
        cy.get('#password').clear().type(password)
    }
    
    submitSignIn() {
        cy.contains('Sign in').click()
        cy.url().should('not.include', '/login')
    }

    clickForgotPasswordLink() {
        cy.contains('Forgot password?').click()
    }
}
  
export default SignInPage