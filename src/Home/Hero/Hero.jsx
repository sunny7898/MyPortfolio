import React from "react";
import "./Hero.css"; // Import the CSS file for the Hero

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-summary-section">
        <img
          src="/images/profile-pic.png"
          alt="image"
          className="hero-profile-pic"
          loading="lazy"
          style={{ filter: "blur(10px)" }}
          onLoad={(e) => (e.target.style.filter = "none")}
        />

        <div className="hero-content-section">
          <h1 className="hero-title">
            Hi, I'm <span>Sunny Goswami</span>
          </h1>
          <h3 className="hero-sub-title">
            Full Stack Developer | DevOps Enthusiast
          </h3>

          <p className="hero-description">
            I design & build complex applications & love exploring DevOps Tools
            in my free time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
