import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";
import { TiTimes } from "react-icons/ti"; // Import X icon
import "./Navbar.css"; // Import custom CSS for the underline animation

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current location for route changes

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Close the menu when the route changes
    handleCloseMenu();
  }, [location]);

  return (
    <div className="navbar">
      <div className="navbar-logo-section">
        <NavLink to="/" className="navbar-logo" onClick={handleCloseMenu}>
          Sg.
        </NavLink>
      </div>

      <div className="navbar-content-section">
        <ul>
          <li>
            <NavLink
              to="/projects"
              className="nav-item"
              onClick={handleCloseMenu}
            >
              <AiOutlineFundProjectionScreen className="text-lg" />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className="nav-item"
              onClick={handleCloseMenu}
            >
              <FaRegFileAlt className="text-lg" />
              <span>Resume</span>
            </NavLink>
          </li>
        </ul>

        <NavLink to="/contact">
          <button className="btn-outline" onClick={handleCloseMenu}>
            Contact Me
          </button>
        </NavLink>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger-menu-icon ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        {isOpen ? <TiTimes /> : <span>&#9776;</span>}{" "}
        {/* Hamburger icon or X */}
      </div>

      {/* Hamburger Menu */}
      {isOpen && (
        <div className="hamburger-menu">
          <ul>
            <li>
              <NavLink
                to="/projects"
                className="hamburger-menu-item"
                onClick={handleCloseMenu}
              >
                <AiOutlineFundProjectionScreen className="text-lg" />
                <span>Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className="hamburger-menu-item"
                onClick={handleCloseMenu}
              >
                <FaRegFileAlt className="text-lg" />
                <span>Resume</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hamburger-menu-item"
                onClick={handleCloseMenu}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
