describe("Testa a página de signUp", () => {
  it('Ao clicar em "já tem cadastro", deve ir a tela de login', () => {
    cy.visit("/signUp");

    cy.contains("Já tem cadastro? Clique aqui!").click();
    cy.contains("Login");
  });
});
