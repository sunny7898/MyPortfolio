import React from "react";
import "./AboutMe.css"; // Import the CSS file for AboutMe section
import Skills from "../Skills/Skills";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="hero-image">
          <img src="../../../public/images/hero-devices.svg" alt="image" />
        </div>

        <h1 className="about-title">Thankyou for being here!</h1>
        <p className="about-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et illo
          earum modi error maxime quas, delectus eius culpa Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ex culpa reiciendis tempore,
          facilis perspiciatis quo cum eos, molestias amet magni corrupti
          recusandae iure harum illo nobis nihil repellat modi sapiente!
        </p>
      </div>
      <Skills />
    </div>
  );
}

export default AboutMe;
