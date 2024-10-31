import React from "react";
import "./ProjectCard.css";

function ProjectCard({ image, title, summary, githubLink, demoLink }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-text-container">
        <h3 className="project-title">{title}</h3>
        <p className="project-summary">{summary}</p>
        <div className="project-links">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
