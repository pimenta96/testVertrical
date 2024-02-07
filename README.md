Vertrical Tests

Description

-This project is aimed at conducting web and API tests using Playwright. It includes automated tests for web challenges and API tests, as well as test scenarios written in Gherkin format.

Prerequisites

Before running the tests, ensure you have the following installed:

-Node.js
-npm

Installation

1- Clone this repository to your local machine.
2- Navigate to the project directory in your terminal.
3- Run npm install to install the dependencies.

Usage

Web Tests
-To run web tests from Challenge 2, use the following command:

npm run tests:test1

This command executes the tests using Playwright with the configuration specified in playwright.config.ts under the test1 project.

API Tests
To run API tests from Challenge 3, use the following command:

npm run tests:test2

This command executes the API tests using Playwright with the configuration specified in playwright.config.ts under the test2 project.

Test Scenarios

Test scenarios for Challenge 1 are written in Gherkin format and can be found in the testscenariosPrototype.txt file.

Scripts
The following scripts are available in the package.json file:

tests:test1: Executes web tests for Challenge 2.
tests:test2: Executes API tests for Challenge 3.
