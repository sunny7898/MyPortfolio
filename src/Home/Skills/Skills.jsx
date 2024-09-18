// src/components/Skills.js
import React from "react";
import "./Skills.css";

import { FaLaptopCode } from "react-icons/fa";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-section ">
        <SkillCard
          icon={<FaLaptopCode />}
          title="Frontend Development"
          description="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
          technologies={["React", "HTML", "CSS", "JavaScript"]}
        />
      </div>
      <div className="skills-section ">
        <SkillCard
          icon={<FaLaptopCode />}
          title="Backend Development"
          description="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
          technologies={[
            "Java",
            "Spring Framework",
            "Microservices",
            "SQL",
            "NoSQL",
          ]}
        />
      </div>
      <div className="skills-section ">
        <SkillCard
          icon={<FaLaptopCode />}
          title="DevOps"
          description="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
          technologies={[
            "Shell script",
            "Kubernetes",
            "Jenkins",
            "Docker",
            "Linux",
          ]}
        />
      </div>
    </div>
  );
}

function SkillCard({ icon, title, description, technologies }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h1 className="skill-title">{title}</h1>
      <p className="skill-description">{description}</p>
      <h3 className="skill-category">My Skills: Languages & Tools</h3>
      <ul className="skill-technologies">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
