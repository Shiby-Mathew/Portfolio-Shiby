import React from "react";
import "./intro.css";
import bg from "../../assets/shiby1.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hi,</span>
        <span className="introText">
          I'm <span className="introName">Shiby</span>
          <br /> Full Stack Developer
        </span>
        <p className="introPara">
          I am a skilled and passionate developer, recently graduated Full Stack
          Developer <br /> Bootcamp from <strong> University of Sydney</strong>
        </p>
      </div>
      <div>
        <img src={bg} alt="bg" className="bg" />
      </div>
    </section>
  );
};
export default Intro;
