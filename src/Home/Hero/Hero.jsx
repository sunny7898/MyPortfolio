import React from "react";
import "./Hero.css"; // Import the CSS file for the Hero

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-summary-section">
        <div className="hero-profile-pic">
          <img src="../../../public/images/profile-pic.png" alt="image" />
        </div>
        <h1 className="hero-title">Hi, I'm Sunny Goswami</h1>
        <h3>Full Stack Developer | DevOps Entusiast </h3>
        <p className="hero-description">
          I design & Build complex applications & love exploring DevOps Tools in
          my free time.
        </p>
      </div>

      <div className="hero-image">
        <img src="../../../public/images/hero-devices.svg" alt="image" />
      </div>
    </div>
  );
}

export default Hero;
