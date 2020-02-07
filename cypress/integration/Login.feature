Feature: Sign in Feature

As an Facebook user
In order to see posts 
I want to login successfully to Facebook
 
Scenario: Login Successful
    Given I am in the Facebook login page
    When I enter valid credentials
    | email | password |
    | testing.jrvillabona@gmail.com | Testingjrvillabona@ |
    And I click on Sign in button
    Then I should be able to login successfully

Scenario: Login Unsuccessful

    Given I am in the Facebook login page
    When I enter invalid credentials
    | fakeEmail | fakePassword |
    | testing@mal.com | 12343433 |
    And I click on Sign in button
    Then I should be able to see the message "El correo electrónico que ingresaste no coincide con ninguna cuenta. Regístrate para crear una cuenta."