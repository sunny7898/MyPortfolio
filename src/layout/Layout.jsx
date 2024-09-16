import React from "react";
import Navbar from "./Navbar/Navbar"; // Adjust path as necessary
import Footer from "./Footer/Footer"; // Adjust path as necessary
import "./Layout.css"; // Import the CSS file for the layout

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
