describe("", () => {
  it("navigate to site and search 'books' on bar", () => {
    cy.visit("https://www.amazon.com/");
    cy.get("#twotabsearchtextbox").type("books");
    cy.xpath("//div[@class='nav-search-submit nav-sprite']").click();
    cy.xpath("//h2[@class='a-size-large a-spacing-base']/parent::div")
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Best sellers ");
      });
  });
});
