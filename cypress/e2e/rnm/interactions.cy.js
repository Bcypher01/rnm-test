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
  });
});
