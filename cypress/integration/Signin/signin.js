import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../page-objects/HomePage"
import Header from "../../page-objects/components/Header"
import SignInPage from "../../page-objects/SignInPage"
import DashboardPage from "../../page-objects/DashboardPage"

const homePage = new HomePage()
const header = new Header()
const signInPage = new SignInPage()
const dashboardPage = new DashboardPage()
 
Given('I am in the GitHub login page', ()=> {
    homePage.visit()
    header.clickOnSignInButton()
    signInPage.signInFormIsVisible()
})
 
// When('I enter valid credentials', ()=> {
//     cy.fixture('login.json').as('loginData')
//     cy.get('@loginData')
//         .then(({ username, password }) => {
//             signInPage.fillUsername('username')
//             signInPage.fillPassword('password')
//         })
//     signInPage.submitSignIn()
// })

When('I enter valid credentials', (datatable) => {
    datatable.hashes().forEach(element => {
        signInPage.fillUsername(element.username)
        signInPage.fillPassword(element.password)
    })
})

And('I click on Sign in button', () => {
    signInPage.submitSignIn()
})
 
Then('I should be able to login successfully', () => {
    dashboardPage.isVisible()
})

When('I enter invalid credentials', ()=> {
    cy.fixture('login.json').as('loginData')
    cy.get('@loginData')
        .then(({ fakeUsername, fakePassword }) => {
            signInPage.fillUsername('fakeUsername')
            signInPage.fillPassword('fakePassword')
        })
})

Then('I should be able to see the message {string}', (message) => {
    signInPage.validateErrorMessage(message)
})