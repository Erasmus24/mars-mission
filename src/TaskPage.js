import { useParams, Link } from "react-router-dom";

const TaskPage = ({ tasks, handleDelete }) => {
    const { id } = useParams();
    const task = tasks.find(task => (task.id).toString() === id);
    return (
        <main className="TaskPage">
            <article className="task">
                {task &&
                    <>
                        <h2>{task.title}</h2>
                        <p className="taskDate">{task.datetime}</p>
                        <p className="taskBody">{task.body}</p>
                        <button onClick={() => handleDelete(task.id)}>
                            Delete Task
                        </button>
                    </>
                }
                {!task &&
                    <>
                        <h2>Task Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default TaskPage
