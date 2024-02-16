describe('Side Panel', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  it('should display current use and number of tasks', () => {
    cy.get('[data-cy=sidePanel]').contains('Home');
    cy.get('[data-cy=sidePanel]').contains('Number of Tasks: 0'); 
  });

  it('should delete all tasks', () => {
    cy.get('[data-cy=allTasksDeleteButton]').click();
    cy.get('[data-cy=sidePanel]').contains('Number of Tasks: 0');
  });
});
