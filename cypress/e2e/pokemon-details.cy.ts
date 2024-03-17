describe("Testa a página de detalhes do pokemon", () => {
  it("Deve renderizar um pokemon na nossa tela", () => {
    cy.visit("/details/1");

    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemonDetail.json",
    });

    cy.contains("Pikachu");
    cy.contains("Electric");

    cy.get("img").should(
      "have.attr",
      "src",
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    );
  });
});
