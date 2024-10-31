import React from "react";
import "./AboutMe.css"; // Import the CSS file for AboutMe section

function AboutMe() {
  return (
    <div className="about-container">
      <img
        src="/images/hero-devices.svg"
        alt="deviceLogo"
        className="about-device-logo"
      />
      <div className="about-section">
        <div className="about-section-content">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            I'm a Software Engineer with over 2 years of experience, currently
            working as a Frontend Developer on IBM's Flash Storage Team.
            Previously, I was at HSBC, where I focused on backend development,
            automation, and infrastructure, optimizing system reliability and
            managing AWS servers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
