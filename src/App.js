import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewTask from './NewTask';
import TaskPage from './TaskPage';
import About from './About';
import Missing from './Missing';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
  const [taskTitle, setTaskTitle] = useState('');
  const [taskBody, setTaskBody] = useState('');
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newTask = { id, title: taskTitle, datetime, body: taskBody };
    const allTasks = [...tasks, newTask];
    setTasks(allTasks);
    setTaskTitle('');
    setTaskBody('');
    history.push('/');
  }

  const handleDelete = (id) => {
    const taskList = tasks.filter(task => task.id !== id);
    setTasks(taskList);
    history.push('/');
  }

  return (
    <div className="App">
      <Header title="Marskettier" />
      <Nav  />
      <Switch>
        <Route exact path="/">
          <Home tasks={tasks} />
        </Route>
        <Route exact path="/task">
          <NewTask
            handleSubmit={handleSubmit}
            taskTitle={taskTitle}
            setTaskTitle={setTaskTitle}
            taskBody={taskBody}
            setTaskBody={setTaskBody}
          />
        </Route>
        <Route path="/task/:id">
          <TaskPage tasks={tasks} handleDelete={handleDelete} />
        </Route>
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
