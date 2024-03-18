import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-dark text-light py-4">
      <div className="container">
        <h1 className="display-3">Todos</h1>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" className='nav-link'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/todos" className='nav-link'>Todos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className='nav-link'>About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
