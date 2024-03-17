describe("Testa o dashboard", () => {
  it("Deve carregar uma lista com 4 pokemons", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.contains("Pikachu");
    cy.contains("Rotom");
    cy.contains("Charmander");
    cy.contains("Geodude");
  });
  it("Ao clicar em um pokemon, deve abrir a página de detalhes", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });
    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemonDetail.json",
    });

    cy.contains("Pikachu").click();
    cy.contains("Pikachu");
    cy.contains("Voltar");
  });

  it("Voltar para a listagem de 4 pokemons", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });
    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemonDetail.json",
    });

    cy.contains("Pikachu").click();
    cy.contains("Pikachu");
    cy.contains("Voltar").click();

    cy.contains("Pikachu");
    cy.contains("Rotom");
    cy.contains("Charmander");
    cy.contains("Geodude");
  });
});
