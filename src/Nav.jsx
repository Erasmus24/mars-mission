import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav" data-cy="headerBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/task">Add Task</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
