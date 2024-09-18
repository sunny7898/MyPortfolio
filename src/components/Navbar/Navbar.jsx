import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaRegFileAlt, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo-section">
        <NavLink to="/" className="navbar-logo">
          Sg.
        </NavLink>
      </div>

      <div className="hamburger-menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbar-content-section ${isMenuOpen ? "open" : ""}`}>
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

      {isMenuOpen && (
        <div className="hamburger-menu">
          <NavLink to="/projects" className="nav-item" onClick={toggleMenu}>
            <AiOutlineFundProjectionScreen className="text-lg" />
            <span>Projects</span>
          </NavLink>
          <NavLink to="/resume" className="nav-item" onClick={toggleMenu}>
            <FaRegFileAlt className="text-lg" />
            <span>Resume</span>
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            <button className="btn-outline">Contact Me</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
