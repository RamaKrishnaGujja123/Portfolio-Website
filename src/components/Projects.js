import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: 'path/to/image1.jpg',
    demoUrl: 'https://live-demo.com/project-one',
    repoUrl: 'https://github.com/username/project-one'
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    imageUrl: 'path/to/image2.jpg',
    demoUrl: 'https://live-demo.com/project-two',
    repoUrl: 'https://github.com/username/project-two'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;