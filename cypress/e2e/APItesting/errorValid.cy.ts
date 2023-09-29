import INVALID_DATA from "../../data/invalidData";
import * as data from "../../data/sampleData";

describe("error API", () => {
  beforeEach("err validation", () => {
    cy.request({
      method: data.METHODS.POST,
      url: data.URL.GOREST_URL,
      body: INVALID_DATA,
      headers: {
        Authorization: process.env.TOKEN,
      },
      failOnStatusCode: false,
    }).as("invalid");
  });

  it("Assert status", () => {
    cy.get("@invalid")
      .its("status")
      .should("equal", data.NUMBERS.FOUR_HUNDRED_AND_ONE);
  });
});
