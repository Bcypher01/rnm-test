# Cypress Testing Project

## Overview

This project contains Cypress end-to-end tests for the RNM application. It includes tests to ensure that specific functionalities are working as expected on the home page, such as verifying the visibility of elements, form submission behavior, and button interactions.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

## Setup

1.  **Clone the Repository**

    `git clone https://github.com/your-username/your-repo.git
cd your-repo`

2.  **Install Dependencies**

    Install the necessary dependencies using npm:

    `npm install`

## Running Tests

1.  **Start the Application**

    Ensure your application is running locally or on a staging environment. Update the URL in the tests if needed.

2.  **Run Cypress Tests**

    You can run the Cypress tests in interactive mode or headless mode:

    - **Interactive Mode:**

      bash

      Copy code

      `npx cypress open`

      This will open the Cypress Test Runner where you can select and run individual tests.

    - **Headless Mode:**

      bash

      Copy code

      `npx cypress run`

      This will run all tests in the terminal and report results.

## Test Cases

### Home Page Tests

- **Test: Ensure the `#tabs-:r9:--tabpanel-1` element is not hidden after clicking the "Enter URL" button**

  Verifies that the `#tabs-:r9:--tabpanel-1` element becomes visible after interacting with the "Enter URL" button.

- **Test: Ensure the input field can only be submitted when filled**

  Checks that the submit button remains disabled until the input field is filled, and then ensures the button can be clicked.

## Common Issues

- **Element Not Found**

  Ensure that the application is running and the test selectors match the current HTML structure. Adjust selectors in the tests as necessary.

- **Timeout Errors**

  If tests are timing out, increase the wait time or check for delays in rendering elements.
