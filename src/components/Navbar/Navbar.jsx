import { NavLink } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";
import "./Navbar.css"; // Import custom CSS for the underline animation

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo-section">
        <NavLink to="/" className="navbar-logo">
          Sg.
        </NavLink>
      </div>

      <div className="navbar-content-section">
        <ul>
          <li>
            <NavLink to="/projects" className="nav-item">
              <AiOutlineFundProjectionScreen className="text-lg" />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className="nav-item">
              <FaRegFileAlt className="text-lg" />
              <span>Resume</span>
            </NavLink>
          </li>
        </ul>

        <NavLink to="/contact">
          <button className="btn-outline">Contact Me</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
