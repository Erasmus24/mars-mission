describe("Task Operations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should create, read, update and delete a task", () => {
    cy.contains("Add Task").click();
    cy.get("[data-cy=taskTitle]").type("New Task Title");
    cy.get("[data-cy=taskCreator]").type("Sphiwe Hadebe");
    cy.get("[data-cy=taskAssignee]").type("Bongiwe Hadebe");
    cy.get("[data-cy=taskBody]").type("This is a new task.");
    cy.get("[data-cy=submitButton]").click();
    cy.contains("New Task Title");
    cy.contains("New Task Title").click();
    cy.get("[data-cy=editButton]").click();
    cy.get("[data-cy=editTaskTitle]").type("Updated Task Title");
    cy.get("[data-cy=editTaskCreator]").type("Sphiwe Hadebe Edited");
    cy.get("[data-cy=editTaskAssignee]").type("Bongiwe Hadebe Edited");
    cy.get("[data-cy=editTaskBody]").type("This is an edited task.");
    cy.get("[data-cy=editSubmitButton").click();
    cy.contains("Updated Task Title");
    cy.contains("Updated Task Title").click();
    cy.get("[data-cy=deleteButton]").click({ force: true });
    cy.contains("Updated Task Title").should("not.exist");
  });
});
