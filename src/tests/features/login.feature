Feature: Login
 Test Case 2: Login User with correct email and password
  1. Launch browser
  2. Navigate to url 'http://automationexercise.com'
  3. Verify that home page is visible successfully
  4. Click on 'Signup / Login' button
  5. Verify 'Login to your account' is visible
  6. Enter correct email address and password
  7. Click 'login' button
  8. Verify that 'Logged in as username' is visible
  9. Click 'Delete Account' button
  10. Verify that 'ACCOUNT DELETED!' is visible

 Test Case 3: Login User with incorrect email and password
  1. Launch browser
  2. Navigate to url 'http://automationexercise.com'
  3. Verify that home page is visible successfully
  4. Click on 'Signup / Login' button
  5. Verify 'Login to your account' is visible
  6. Enter incorrect email address and password
  7. Click 'login' button
  8. Verify error 'Your email or password is incorrect!' is visible

  Scenario: Success Login
    Given A web browser is at the automationexercise login page
    When A user enters the username "GonzaloTest", the password "Test123" and the email "gonzalo@test.com", and clicks on the login button
    Then The user should be logged in successfully with the username "GonzaloTest" with email "gonzalo@test.com" and password "Test123"

  Scenario: Login User with incorrect email and password
    Given A web browser is at the automationexercise login page
    When A user enters the invalid email "WrongUser@test.com", the password "WrongPassword", and clicks on the login button
    Then An error message with "Your email or password is incorrect!" message should be displayed indicating incorrect email "wronguser@test.com" or password "WrongPassword"