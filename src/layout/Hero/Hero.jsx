import React from "react";
import "./Hero.css"; // Import the CSS file for the Hero

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-summary">
        <h1 className="hero-title">Full Stack Developer | DevOps Entusiast</h1>
        <p className="hero-description">
          I Design & Build complex applications end to end & love exploring
          DevOps Tools in my free time.
        </p>
      </div>
      <div className="hero-image">
        <img
          src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/24d955cf6cd4ce5ff8a9a8071f0c87dfa4aaacec/src/Assets/home-main.svg"
          className="hero-image"
          alt="image"
        />
      </div>
    </div>
  );
}

export default Hero;
