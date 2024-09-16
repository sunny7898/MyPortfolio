import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineTool,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";
import "./Navbar.css"; // Import custom CSS for the underline animation

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <NavLink to="/" className="text-xl font-bold">
          <span className="text-xl font-bold">SG</span>
        </NavLink>

        <div className="flex items-center space-x-4">
          <ul className="flex space-x-8 mr-8">
            <li>
              <NavLink to="/" className="nav-item">
                <AiOutlineHome className="text-lg" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-item">
                <AiOutlineUser className="text-lg" />
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className="nav-item">
                <AiOutlineTool className="text-lg" />
                <span>Skills</span>
              </NavLink>
            </li>
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
    </div>
  );
}

export default Navbar;
