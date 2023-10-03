describe("Get network logs", () => {
  before("test", () => {
    cy.visit("https://microsoftedge.github.io/Demos/network-tutorial");
    cy.intercept({
      method: "GET",
      url: "getstarted.json",
    }).as("updateuser");
  });
  it("assert log", () => {
    cy.get("#gsbutton").click();
    cy.wait("@updateuser").then((interception: any) => {
      assert.isNotNull(interception.response.body, "2nd API call has data");
      expect(interception.response.body.foods[2]).equal("burritos")
      cy.log(interception.response.body.foods[2]);
    });
  });
});
