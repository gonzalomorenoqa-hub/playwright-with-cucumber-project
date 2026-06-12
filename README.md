# Playwright with Cucumber Project

A comprehensive end-to-end (E2E) test automation project that combines **Playwright** and **Cucumber** for behavior-driven testing. This project implements BDD (Behavior-Driven Development) principles to test the [Automation Exercise](http://automationexercise.com) web application.

## Project Overview

This project demonstrates professional QA automation practices by using:
- **Playwright**: A modern, cross-browser automation framework
- **Cucumber**: BDD framework for writing human-readable test scenarios
- **TypeScript**: For type-safe test code
- **Page Object Model**: For maintainable and scalable test architecture

## Features

- ✅ User registration testing
- ✅ User login testing (success and failure scenarios)
- ✅ Account deletion workflows
- ✅ Comprehensive test reports (HTML and JSON)
- ✅ Page Object Model pattern for better maintainability
- ✅ TypeScript support for type safety

## Project Structure

```
playwright-with-cucumber-project/
├── src/
│   ├── pages/                          # Page Object Models
│   │   ├── pageManager.ts             # Centralized page management
│   │   ├── homePage.ts                # Home page objects and actions
│   │   ├── signUpLoginPage.ts         # Sign up and login page objects
│   │   ├── productsPage.ts            # Products page objects
│   │   └── cartPage.ts                # Shopping cart page objects
│   └── tests/
│       ├── features/                   # Gherkin feature files
│       │   ├── register.feature       # User registration scenarios
│       │   └── login.feature          # User login scenarios
│       └── step-definitions/           # Step implementation files
│           ├── register.ts            # Registration step definitions
│           └── login.ts               # Login step definitions
├── config/
│   └── cucumber.js                    # Cucumber configuration
├── reports/                            # Generated test reports
├── package.json                        # Project dependencies
└── README.md                           # This file
```

## Test Scenarios

### 1. User Registration (`register.feature`)

**Scenario: Success Register**
- User navigates to the Automation Exercise home page
- Enters username "GonzaloTest", password "Test123", and email "gonzalo@test.com"
- Clicks the register button
- Verifies successful registration with username "GonzaloTest"

### 2. User Login (`login.feature`)

**Scenario: Success Login**
- User navigates to the Automation Exercise login page
- Enters username "GonzaloTest", password "Test123", and email "gonzalo@test.com"
- Clicks the login button
- Verifies successful login with matching username and email

**Scenario: Login with Incorrect Credentials**
- User navigates to the Automation Exercise login page
- Enters invalid email "WrongUser@test.com" and password "WrongPassword"
- Clicks the login button
- Verifies error message: "Your email or password is incorrect!"

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/gonzalomorenoqa-hub/playwright-with-cucumber-project.git
   cd playwright-with-cucumber-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Running Tests

### Run all tests with Cucumber
```bash
npm run cucumber
```

### Run tests with a specific test configuration
```bash
npm run cucumber-test
```

## Test Reports

After running tests, reports are automatically generated in the `reports/` directory:

- **HTML Report**: `reports/cucumber-report.html` - Visual representation of test results
- **JSON Report**: `reports/cucumber-report.json` - Machine-readable test results for CI/CD integration

## Dependencies

- **@cucumber/cucumber**: ^12.9.0 - BDD framework for writing human-readable tests
- **@playwright/test**: ^1.60.0 - Cross-browser automation framework
- **ts-node**: ^10.9.2 - TypeScript execution for Node.js
- **@types/node**: ^25.9.3 - TypeScript definitions for Node.js

## Architecture

### Page Object Model (POM)

The project follows the Page Object Model pattern for better maintainability:

- **pageManager.ts**: Centralized management of all page objects
- Individual page files (homePage.ts, signUpLoginPage.ts, etc.): Encapsulate page elements and actions

This approach provides:
- Easy maintenance and updates of selectors
- Reusable methods across tests
- Clear separation between test logic and UI interaction

## Continuous Integration

This project is configured to run on GitHub and can be integrated into CI/CD pipelines. Test reports can be used to track testing progress and quality metrics.

## Author

- **Gonzalo Moreno** - QA Automation Engineer

## Repository

- GitHub: [gonzalomorenoqa-hub/playwright-with-cucumber-project](https://github.com/gonzalomorenoqa-hub/playwright-with-cucumber-project)

## License

ISC

## Contributing

This project is a demonstration of QA automation best practices. Suggestions and improvements are welcome!

## Support

For issues or questions, please open an issue on [GitHub Issues](https://github.com/gonzalomorenoqa-hub/playwright-with-cucumber-project/issues).

---

**Happy Testing! 🚀**
