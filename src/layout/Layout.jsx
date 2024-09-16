import React from "react";
import Navbar from "../layout/Navbar/Navbar"; // Adjust path if necessary
import Footer from "../layout/Footer/Footer"; // Adjust path if necessary
import { Outlet } from "react-router-dom"; // Import Outlet for rendering child routes
import "./Layout.css"; // Import the CSS file for layout

function Layout() {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-content">
        <Outlet /> {/* This will render the child route components */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
