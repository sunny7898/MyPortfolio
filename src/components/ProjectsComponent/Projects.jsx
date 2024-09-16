// src/components/Projects.js
import React from "react";
import projectsData from "../../assets/projectsData";
import ProjectCard from "./ProjectCard"; // Import the new ProjectCard component
import "./Projects.css"; // Ensure you create this CSS file

function Projects() {
  return (
    <div className="project-container">
      <div className="heading-section">
        <h1 className="heading">My Projects</h1>
      </div>
      <div className="showcase-section">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            summary={project.summary}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
