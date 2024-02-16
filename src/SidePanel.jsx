import { useLocation } from "react-router-dom";

const SidePanel = ({ tasks, handleDeleteAllTasks }) => {
  const location = useLocation();

  const getCurrentUse = () => {
    const pathname = location.pathname;

    switch (true) {
      case /^\/$/.test(pathname):
        return "Home";
      case /^\/task$/.test(pathname):
        return "Adding Task";
      case /^\/about$/.test(pathname):
        return "About";
      case /^\/edit\/\d+$/.test(pathname):
        return "Editing Task";
      case /^\/task\/\d+$/.test(pathname):
        return "Viewing Task";
      default:
        return "";
    }
  };

  return (
    <div className="side-panel" data-cy="sidePanel">
      <h3>{getCurrentUse()}</h3>
      <p>Number of Tasks: {tasks.length}</p>
      <button
        className="allTasksDeleteButton"
        onClick={handleDeleteAllTasks}
        data-cy="allTasksDeleteButton"
      >
        Delete All Tasks
      </button>
    </div>
  );
};

export default SidePanel;
