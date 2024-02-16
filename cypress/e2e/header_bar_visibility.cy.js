describe('Header Bar Visibility Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); 
    });
  
    it('should maintain its visibility of the header when scrolling', () => {
      cy.get('[data-cy=headerBar]').should('be.visible');
      cy.contains('Add Task').click();
      cy.get('[data-cy=taskTitle]').type('New Task Title');
      cy.get('[data-cy=taskCreator]').type('Sphiwe Hadebe');
      cy.get('[data-cy=taskAssignee]').type('Bongiwe Hadebe');
      cy.get('[data-cy=taskBody]').type('This is a new task.');
      cy.get('[data-cy=submitButton]').click();
      cy.contains('Add Task').click();
      cy.get('[data-cy=taskTitle]').type('Second New Task Title');
      cy.get('[data-cy=taskCreator]').type('Mike Blaze');
      cy.get('[data-cy=taskAssignee]').type('Harry Blaze');
      cy.get('[data-cy=taskBody]').type('This is another new task.');
      cy.get('[data-cy=submitButton]').click();
      cy.contains('Add Task').click();
      cy.get('[data-cy=taskTitle]').type('Third New Task Title');
      cy.get('[data-cy=taskCreator]').type('John Wick');
      cy.get('[data-cy=taskAssignee]').type('Jane Wick');
      cy.get('[data-cy=taskBody]').type('This is a third new task.');
      cy.get('[data-cy=submitButton]').click();
      cy.get('[data-cy=homePage]').scrollTo('bottom') 
      cy.get('[data-cy=headerBar]').should('be.visible');
    });
  });
  