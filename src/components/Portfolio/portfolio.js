import React from "react";

import "./portfolio.css";
import portfolio from "../../assets/ecom.jpg";
import portfolio1 from "../../assets/pic1.jpg";
import portfolio2 from "../../assets/pic2.jpg";
import portfolio3 from "../../assets/pic3.jpg";
// import portfolio4 from "../../assets/img1.jpg";
// import portfolio5 from "../../assets/img1.jpg";

const Portfolio = () => {
  return (
    <section id="works">
      <span className="worksTitle">My Portfolio</span>
      <span className="worksDesc">
        Portfolio is a showcase of my skills, projects, and achievements as a
        Full Stack Web Developer. An effective portfolio highlights latest
        technologies and thought processes behind it.
      </span>
      <div className="worksImgs">
        <img src={portfolio} alt="" className="worksImag" />
        <img src={portfolio1} alt="" className="worksImag" />
        <img src={portfolio2} alt="" className="worksImag" />
        <img src={portfolio3} alt="" className="worksImag" />
        {/* <img src={portfolio4} alt="" className="worksImag" />
        <img src={portfolio5} alt="" className="worksImag" /> */}
      </div>
    </section>
  );
};
export default Portfolio;
