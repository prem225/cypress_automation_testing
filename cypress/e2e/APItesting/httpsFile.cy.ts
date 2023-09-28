import * as data from "../../data/sampleData";

describe("API test", () => {
  it("get call", () => {
    cy.request(data.METHODS.GET, data.URL.TYPECODE_URL)
      .its("status")
      .should("equal", data.NUMBERS.TWO_HUNDRED);
  });

  it("post call", () => {
    cy.request({
      method: data.METHODS.POST,
      url: data.URL.TYPECODE_URL,
      body: {
        userId: 1,
        title: "jfoej",
        body: "this is test",
      },
    })
      .its("status")
      .should("equal", data.NUMBERS.TWO_HUNDRED_AND_ONE);
  });

  it("put call", () => {
    cy.request({
      method: data.METHODS.PUT,
      url: data.URL.TYPECODE_URL,
      body: {
        userId: 1,
        title: "updated",
        body: "this is test- u ",
      },
    })
      .its("status")
      .should("equal", data.NUMBERS.TWO_HUNDRED);
  });

  it("delete call", () => {
    cy.request({
      method: data.METHODS.DELETE,
      url: data.URL.TYPECODE_URL,
    })
      .its("status")
      .should("equal", data.NUMBERS.TWO_HUNDRED);
  });
});
