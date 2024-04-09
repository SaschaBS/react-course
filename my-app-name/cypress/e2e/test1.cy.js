describe('my first test', () => {
  it('should increase', () => {
    cy.visit('/');
    cy.get('[data-cy="title"]').should('be.visible');
    cy.get('*[id*="helper"]').eq(0).should('contain.text', '0/5');

    cy.get('[data-cy="fancy"]').eq(0).type('foo');
    cy.get('*[id*="helper"]').eq(0).should('contain.text', '3/5');

    cy.get('[data-cy="fancy"]').eq(0).clear().type('foobar');
    cy.get('[data-cy="fancy"]').eq(0).should('have.value', 'fooba');
    cy.get('*[id*="helper"]').eq(0).should('contain.text', '5/5');
  });
});
