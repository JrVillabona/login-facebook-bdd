import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../page-objects/HomePage'
import LoginPage from '../../page-objects/LoginPage'

const homePage = new HomePage()
const loginPage = new LoginPage()

Given('I am in the Facebook login page', () => {
	loginPage.visit()
	loginPage.loginFormIsVisible()
})

When('I enter valid credentials', datatable => {
	datatable.hashes().forEach(element => {
		loginPage.fillEmail(element.email)
		loginPage.fillPassword(element.password)
	})
})

And('I click on Sign in button', () => {
	loginPage.clickOnLoginButton()
})

Then('I should be able to login successfully', () => {
	homePage.mainContainerIsVisible()
	homePage.leftColumnIsVisible()
	homePage.contentColumnIsVisible()
	homePage.pageLetIsVisible()
})

When('I enter invalid credentials', datatable => {
	datatable.hashes().forEach(element => {
		loginPage.fillEmail(element.fakeEmail)
		loginPage.fillPassword(element.fakePassword)
	})
})

Then('I should be able to see the message {string}', message => {
	loginPage.validateErrorMessage(message)
})
