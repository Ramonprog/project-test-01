describe("Testa a página de login", () => {
  it("Quando clicar em login, deve ir a página de dashboard", () => {
    cy.visit("/");

    cy.contains("Login").click();
    cy.contains("Dashboard");
  });
});
