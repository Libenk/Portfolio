import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="tech-stack">
        <strong>Tech Stack: </strong>
        {project.techStack.join(', ')}
      </div>
      <div className="project-links">
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
