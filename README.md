# The test has been done with Javascript, Cypress.io & Cucumber (BDD Framework)

Concept for Automation functional testing using Javascript, Cypress.io and Cucumber in Chrome headless mode. It shows a couple of solutions for automation test suite for Sing In in Facebook website. Javascript is the language I used to write the test code.

Cucumber, along with Gherkin, is the testing framework. Gherkin is the business language I used to write the tests in a “human readable” way. Cucumber ties the Gherkin feature files to the execution code written in Ruby. Cucumber helps capture test results as well.

Cypress is a next generation front end testing tool built for the modern web. Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.

This enables you to write faster, easier and more reliable tests.

## Installation

First of all you need to have [NodeJS](https://nodejs.org/es/), [Chrome](https://www.google.es/chrome/index.html) browser and [Git](https://git-scm.com/download) installed. Once you have them, in order to install the tests, follow the next steps from terminal:

Clone the repository project:

```
git clone https://github.com/JrVillabona/login-facebook-bdd.git
cd login-Facebook-bdd
```

Install the dependencies:

```
npm install
```

## Execution

In order to execute the tests with Cucumber, you just need to execute the following command:

```
npm run test
```

Or with the Cypress console and execute the tests selecting the web browser that you prefer:

```
npm run cypress:open
```

Also in headless-mode with:

```
npm run cypress:run
```

## Generals

- In the folder `cypress/integration/Login` are files who define steps for the Login feature.
- In file `cypress.json` there are config vars.
- In file `cypress/integration/page-objects` there are page of the project.
- The files `.feature` there are in folder `integration` and uses descriptive names.

## Documentation

- Cypress: https://www.cypress.io/
- Cypress-Cucumber-Preprocessor : https://www.npmjs.com/package/cypress-cucumber-preprocessor
