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

    // Check that the submit button is now enabled
    cy.get("button.chakra-button.bg-[#3182CE][disabled]").should(
      "not.be.disabled"
    );

    // Click the submit button
    cy.get("button.chakra-button.bg-[#3182CE]").click();
  });
});
