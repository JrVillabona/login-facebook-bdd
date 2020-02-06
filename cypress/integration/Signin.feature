Feature: Sign in Feature

As an GitHub username
In order to manage repositories 
I want to login successfully to GitHub
 
Scenario: Login Successful
    Given I am in the GitHub login page
    When I enter valid credentials
    | username | password |
    | testing-jrvillabona | Testingjrvillabona@ |
    And I click on Sign in button
    Then I should be able to login successfully

Scenario: Login Unsuccessful

    Given I am in the GitHub login page
    When I enter invalid credentials
    And I click on Sign in button
    Then I should be able to see the message "Incorrect username or password."