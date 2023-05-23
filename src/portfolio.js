import React from 'react';
import ProjectCard from './ProjectsCard';
import './Portfolio.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built using React and showcasing my projects.',
    techStack: ['React', 'HTML', 'CSS'],
    liveDemo: 'https://www.example.com/portfolio',
    sourceCode: 'https://github.com/your-username/portfolio',
  },
  {
    title: 'Weather App',
    description: 'A weather application that provides current weather information.',
    techStack: ['React', 'Redux', 'API'],
    liveDemo: 'https://www.example.com/weather-app',
    sourceCode: 'https://github.com/your-username/weather-app',
  },
  // Add more projects here...
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
    
      
      <main>
        <div className="project-container">
          {/* {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))} */}
        </div>
      </main>
     
    </div>
  );
};

export default Portfolio;
