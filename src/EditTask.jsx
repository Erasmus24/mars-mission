import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { format } from "date-fns";

const EditTask = ({ tasks, handleEdit }) => {
  const { id } = useParams();
  const history = useHistory();

  const [taskTitle, setTaskTitle] = useState("");
  const [taskCreator, setTaskCreator] = useState("");
  const [taskAssignee, setTaskAssignee] = useState("");
  const [taskBody, setTaskBody] = useState("");

  useEffect(() => {
    const task = tasks.find((task) => task.id.toString() === id);
    if (task) {
      setTaskTitle(task.title);
      setTaskBody(task.body);
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedTask = {
      id: parseInt(id),
      title: taskTitle,
      creator: taskCreator,
      assignee: taskAssignee,
      datetime,
      body: taskBody,
    };
    handleEdit(parseInt(id), updatedTask);
    history.push("/");
  };

  return (
    <main className="NewTask">
      <h2 >Edit Task</h2>
      <form className="newTaskForm" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          data-cy="editTaskTitle"
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
        />
        <label htmlFor="taskCreator">Created by:</label>
        <input
          data-cy="editTaskCreator"
          id="taskCreator"
          type="text"
          required
          value={taskCreator}
          onChange={(e) => setTaskCreator(e.target.value)}
        />
        <label htmlFor="taskAssignee">Assigned to:</label>
        <input
          data-cy="editTaskAssignee"
          id="taskAssignee"
          type="text"
          required
          value={taskAssignee}
          onChange={(e) => setTaskAssignee(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          data-cy="editTaskBody"
          value={taskBody}
          onChange={(e) => setTaskBody(e.target.value)}
          required
        ></textarea>
        <br />
        <button type="submit" data-cy="editSubmitButton">Update Task</button>
      </form>
    </main>
  );
};

export default EditTask;
