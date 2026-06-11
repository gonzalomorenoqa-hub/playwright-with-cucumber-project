Feature: Register
  Feature Register page will work depending on the user credentials.

  Scenario: Success Register
    Given A web browser is at the automationexercise home page
    When A user enters the username "asd", the password "asd" and the email "ads1@test.com", and clicks on the register button
    Then The user should be registered successfully with the username "asd"