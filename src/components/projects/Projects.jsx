import React from 'react';
import Project from '../project/Project';
import projectsData from './Projects_data.json';
import './Projects.css';

const Projects = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;