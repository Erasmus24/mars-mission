describe('Async Background Image Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); 
    });
  
    it('should display an async background image', () => {
      cy.get('[data-cy=asyncImage]').should('exist');
    });
  });
  