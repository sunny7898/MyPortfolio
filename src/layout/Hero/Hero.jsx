import React from "react";
import "./Hero.css"; // Import the CSS file for the Hero

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-summary">
        <h1 className="hero-title">Hey! I'm Sunny Goswami</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et illo
          earum modi error maxime quas, delectus eius culpa Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ex culpa reiciendis tempore,
          facilis perspiciatis quo cum eos, molestias amet magni corrupti
          recusandae iure harum illo nobis nihil repellat modi sapiente!
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
