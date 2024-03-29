const NewTask = ({
  handleSubmit,
  taskTitle,
  setTaskTitle,
  taskBody,
  setTaskBody,
  taskCreator,
  setTaskCreator,
  taskAssignee,
  setTaskAssignee,
}) => {
  return (
    <main className="NewTask">
      <h2>New Task</h2>
      <form className="newTaskForm" onSubmit={handleSubmit}>
        <label htmlFor="taskTitle">Title:</label>
        <input
          data-cy="taskTitle"
          id="taskTitle"
          type="text"
          required
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <label htmlFor="taskCreator">Created by:</label>
        <input
          data-cy="taskCreator"
          id="taskCreator"
          type="text"
          required
          value={taskCreator}
          onChange={(e) => setTaskCreator(e.target.value)}
        />
        <label htmlFor="taskAssignee">Assigned to:</label>
        <input
          data-cy="taskAssignee"
          id="taskAssignee"
          type="text"
          required
          value={taskAssignee}
          onChange={(e) => setTaskAssignee(e.target.value)}
        />
        <label htmlFor="taskBody">Task:</label>
        <textarea
          data-cy="taskBody"
          id="taskBody"
          required
          value={taskBody}
          onChange={(e) => setTaskBody(e.target.value)}
        />
        <button type="submit" data-cy="submitButton">Add Task</button>
      </form>
    </main>
  );
};

export default NewTask;
