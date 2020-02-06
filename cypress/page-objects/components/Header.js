import BasePage from "../BasePage";

class Header extends BasePage{
    clickOnSignInButton(){
      cy.contains('Sign in').should('be.visible').click()
      cy.url().should('include', '/login')
    }

  }
  
export default Header;