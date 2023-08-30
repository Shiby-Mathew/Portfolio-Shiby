import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">About Me</span>
      <span className="skillDesc">
        A junior full stack developer with a proven ability to adapt in both
        self-starting and collaborative environments while staying focused on
        achieving high-quality results under strict deadlines. Eager to obtain a
        challenging position that will expand my learning and build upon my
        developer skills.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src="" alt="" className="skillBarImg" />
          <div className="skillBarText">
            <p class="skills-heading">Front End Skills</p>
            <p>
              Knowledge in HTML, CSS, and JavaScript, the core languages of
              front-end development. Knowledge of JavaScript front-end library
              React.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src="" alt="" className="skillBarImg" />
          <div className="skillBarText">
          <p class="skills-heading">Back End Skills</p>
            <p>
              Good understanding in Node.js, Express.js, REST APIs the core
              languages of Back end development.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src="" alt="" className="skillBarImg" />
          <div className="skillBarText">
          <p class="skills-heading">Databases</p>
            <p>
              Good Knowledge in MySQL and MongoDB (Mongoose ORM). Knowledge in
            database design and RDBMS
            </p>
          </div>
        </div>
      </div>
      <button className="skillBtn">Download My Resume</button>
    </section>
  );
};
export default Skills;

