import React from "react";

import "./project.css";

function Project({ project }) {
  return (
    <div className="project_div">
      <img
        className="img-responsive"
        src={require(`../../assets/${project.image}`)}
        alt="Project"
      />
      <h2>{project.title}</h2>
      <div className="desc">
        <p>{project.description}</p>
      </div>
      <h4 className="techheading">Technologies Used</h4>
      <div className="desc">
        <p>{project.languages}</p>
      </div>
      <button className="live-button">
        <a href={project.repo} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </button>
      <button className="live-button">
        {" "}
        <a href={project.live} target="_blank" rel="noreferrer">
          Live
        </a>
      </button>
    </div>
  );
}

export default Project;
