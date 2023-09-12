describe("test", () => {
  it("get call", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200);
  });

  it("post call", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: {
        userId: 1,
        title: "jfoej",
        body: "this is test",
      },
    })
      .its("status")
      .should("equal", 201);
  });

  it("put call", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        userId: 1,
        title: "updated",
        body: "this is test- u ",
      },
    })
      .its("status")
      .should("equal", 200);
  });

  it("delete call", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    })
      .its("status")
      .should("equal", 200);
  });
});
