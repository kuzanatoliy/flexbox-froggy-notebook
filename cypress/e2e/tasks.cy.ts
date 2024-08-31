describe('Flexbox Froggy', () => {
  it('Should validate tasks', () => {
    cy.visit('https://flexboxfroggy.com');
    cy.get('.title').should('contain', 'Flexbox Froggy');
  });
});
