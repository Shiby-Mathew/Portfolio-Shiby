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
      <p>{project.description}</p>
      <h4 className="techheading">Technologies Used</h4>
      <p>{project.languages}</p>
      <button className="live-button">
        <a href={project.repo} target="_blank" rel="noreferrer">
          See the Repo!
        </a>
      </button>
      <button className="live-button">
        {" "}
        <a href={project.live} target="_blank" rel="noreferrer">
          See the Live Application!
        </a>
      </button>
    </div>
  );
}

export default Project;
