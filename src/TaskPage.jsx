import { useParams, Link } from "react-router-dom";

const TaskPage = ({ tasks, handleDelete }) => {
  const { id } = useParams();
  const task = tasks.find((task) => task.id.toString() === id);

  return (
    <main className="TaskPage" >
      <article className="task">
        {task && (
          <>
            <h2 data-cy="taskTitle">{task.title}</h2>
            <h5>Created by: {task.creator}</h5>
            <h5>Assigned to: {task.assignee}</h5>
            <p className="taskDate">{task.datetime}</p>
            <p className="taskBody">{task.body}</p>
            <button
              className="deleteButton"
              onClick={() => handleDelete(task.id)}
              data-cy="deleteButton"
            >
              Delete Task
            </button>
            <Link to={`/edit/${task.id}`}>
              <button
                style={{ background: "#64b5f6", marginLeft: "1rem" }}
                data-cy="editButton"
              >
                Edit Task
              </button>
            </Link>
          </>
        )}
        {!task && (
          <>
            <h2>Task Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/" data-cy="visitHomepageLink">
                {" "}
                Visit Our Homepage
              </Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default TaskPage;
