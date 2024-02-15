import { Link } from "react-router-dom";

const Task = ({ task }) => {
  return (
    <article className="task">
      <Link to={`/task/${task.id}`}>
        <h2>{task.title}</h2>
        <h5>Created by: {task.creator}</h5>
        <h5>Assigned to: {task.assignee}</h5>
        <p className="taskDate">{task.datetime}</p>
      </Link>
      <p className="taskBody">
        {task.body.length <= 25 ? task.body : `${task.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Task;
