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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et
            illo earum modi error maxime quas, delectus eius culpa Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ex culpa reiciendis
            tempore, facilis perspiciatis quo cum eos, molestias amet magni
            corrupti recusandae iure harum illo nobis nihil repellat modi
            sapiente!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
