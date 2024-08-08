describe("Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("https://staging-rnm.vercel.app/home"); // Add the URL
  });

  it('should ensure the #tabs-:r9:--tabpanel-1 element is not hidden after clicking the "Enter URL" button', () => {
    // Click the "Enter URL" button
    cy.get("button.chakra-tabs__tab").contains("Enter URL").click();

    // Add a wait to ensure the element has time to become visible
    cy.wait(1000);

    // Check that the # element does not have the hidden property
    cy.get("#tabs-\\:r9\\:\\-\\-tabpanel-1").should("not.have.attr", "hidden");
  });

  it("should ensure the input field can only be submitted when filled", () => {
    cy.get("button.chakra-tabs__tab").contains("Enter URL").click();
    cy.wait(1000);
    cy.get("#tabs-\\:r9\\:\\-\\-tabpanel-1").should("not.have.attr", "hidden");
    cy.get("input.chakra-input.css-1suygoc")
      .should("be.visible")
      .type("https://support-en.wd.com/app/answers/detailweb/a_id/49944");
    cy.wait(2000);

    // Find the button containing 'Next' and ensure it becomes enabled
    cy.get('button:has(p:contains("Next")):not([disabled])').click();

    cy.wait(10000);

    // Wait for the loading indicator to disappear
    cy.get(".chakra-spinner.css-jmuyva", { timeout: 10000 }).should(
      "not.exist"
    );

    // Verify redirection
    cy.url().should("eq", "https://staging-rnm.vercel.app/data");

    // Try to submit release notes
    cy.get('form button[type="submit"]').click();

    cy.wait(5000);

    cy.get("body").then(($body) => {
      const modalExists = $body.find("#chakra-modal-\\:r19\\:");
      const errorMessageExists = $body.find(
        "#chakra-toast-manager-top .chakra-toast .chakra-toast__inner .css-0"
      );

      if (modalExists) {
        if ($body.find("#field-\\:r1v\\:-feedback").length === 0) {
          // If the error message does not exist, proceed with the form submission

          // Find the input field within the modal and type the access key
          cy.get('[id^="chakra-modal-"] input')
            .should("be.visible")
            .type("286299b4-56d0-416a-8e66-7776fd38a323");

          // Ensure the submit button is enabled, then click it
          // Targeting the specific "Submit" button within the modal's footer
          cy.get("footer.chakra-modal__footer button.chakra-button")
            .contains("Submit")
            .click();

          // Verify that the modal is closed and the page is redirected
          cy.url().should("not.eq", "https://staging-rnm.vercel.app/data");
        } else {
          // If the error message exists, you can handle it here
          cy.get("#field-\\:r1v\\:-feedback").should("be.visible");
        }
      } else if (errorMessageExists.length > 0) {
        // Handle the case where an error message exists
        cy.get("#chakra-toast-manager-top").find("*").should("not.be.empty");
      } else {
        // Handle the case where no modal and no error message exist
        cy.url().should("eq", "https://staging-rnm.vercel.app/compare");
      }
    });
  });
});
