import React from 'react';
import './Project.css';

const Project = (props) => {
  const { title, deployedLink, githubLink, screenshot } = props;

  return (
    <div className="col-lg-4 mb-4">
      <div className="card">
        <img src={screenshot} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Deployed Version: <a href={deployedLink}>{deployedLink}</a>
            <br />
            GitHub Repository: <a href={githubLink}>{githubLink}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;