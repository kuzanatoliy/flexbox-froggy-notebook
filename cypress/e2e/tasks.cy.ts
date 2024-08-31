describe('Flexbox Froggy', () => {
  it('Should open page', () => {
    cy.visit('https://flexboxfroggy.com');
    cy.get('.title').should('contain', 'Flexbox Froggy');
  });

  it('Should validate first task', () => {
    cy.visit('https://flexboxfroggy.com');
    cy.get('#level-indicator').click();
    cy.get('.level-marker[data-level="0"]').click();
    cy.get('#editor textarea').type('justify-content: flex-end;');
    cy.get('#next').should('not.have.class', 'disabled');
  });
});
