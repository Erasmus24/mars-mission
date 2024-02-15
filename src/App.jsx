import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewTask from "./NewTask";
import EditTask from "./EditTask";
import TaskPage from "./TaskPage";
import About from "./About";
import Missing from "./Missing";
import SidePanel from "./SidePanel";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCreator, setTaskCreator] = useState("");
  const [taskAssignee, setTaskAssignee] = useState("");
  const [taskBody, setTaskBody] = useState("");
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTasks(tasks.reverse());
  }, [tasks]);

  const handleDeleteAllTasks = () => {
    setTasks([]);
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newTask = {
      id,
      title: taskTitle,
      creator: taskCreator,
      assignee: taskAssignee,
      datetime,
      body: taskBody,
    };
    const allTasks = [...tasks, newTask];
    setTasks(allTasks.reverse());
    setTaskTitle("");
    setTaskCreator("");
    setTaskAssignee("");
    setTaskBody("");
    history.push("/");
  };

  const handleEdit = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? updatedTask : task
    );
    setTasks(updatedTasks);
    history.push("/");
  };

  const handleDelete = (id) => {
    const taskList = tasks.filter((task) => task.id !== id);
    setTasks(taskList);
    history.push("/");
  };

  return (
    <div className="App">
      <Header title="Marskettier" />
      <SidePanel tasks={tasks} handleDeleteAllTasks={handleDeleteAllTasks} />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home tasks={tasks} />
        </Route>
        <Route exact path="/task">
          <NewTask
            handleSubmit={handleSubmit}
            taskTitle={taskTitle}
            setTaskTitle={setTaskTitle}
            taskCreator={taskCreator}
            setTaskCreator={setTaskCreator}
            taskAssignee={taskAssignee}
            setTaskAssignee={setTaskAssignee}
            taskBody={taskBody}
            setTaskBody={setTaskBody}
          />
        </Route>
        <Route path="/edit/:id">
          <EditTask tasks={tasks} handleEdit={handleEdit} />
        </Route>
        <Route path="/task/:id">
          <TaskPage
            tasks={tasks}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </Route>
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
