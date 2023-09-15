import React from "react";
import Project from "../Project/project";

import "./portfolio.css";

const projects = [
  {
    id: 0,
    title: "eCommerceRevolve",
    languages: "REACT, MongoDB, Node.js, Express.js, GraphQL, ApolloServer",
    image: "pic0.png",
    description:
      "This website is the ultimate hub for sharing captivating stories and reviews in the world of Australian e-commerce. ",
    repo: "https://github.com/Shiby-Mathew/EcomRevolve",
    live: "https://ecommercerevolve-app-5084df896f21.herokuapp.com/",
  },

  {
    id: 1,
    title: "Cityreviewr",
    languages: "Express-handlebars, Express.js, Node.js, Sequelize, MySQL",
    image: "img2.png",
    description:
      "This website is the ultimate platform for city explorers, traveller seeking authentic experiences or a local wanting to share your insights.",
    repo: "https://github.com/Shiby-Mathew/Cityreviewr",
    live: "https://cityreviwr.herokuapp.com",
  },

  {
    id: 2,
    title: "SpaceLink",
    languages: "HTML, JavaScript, jQuery, Bootstrap",
    image: "space.PNG",
    description:
      "This website serves as the ultimate SpaceX launch dashboard, providing you with the most up-to-date and comprehensive information about all things SpaceX",
    repo: "https://github.com/Shiby-Mathew/Cityreviewr",
    live: "https://maxkeable.github.io/SpaceLink/",
  },

  {
    id: 3,
    title: "Weather-Dashboard",
    languages: "HTML, JavaScript, Bootstrap, OpenWeather API",
    image: "weather.PNG",
    description:
      "This application allows user to search for a city to get the current weather and 5-day forecast. It will display city name, date, an icon representation of weather conditions, temperature, humidity, wind speed.",
    repo: "https://github.com/Shiby-Mathew/Weather-Dashboard",
    live: "https://shiby-mathew.github.io/Weather-Dashboard/",
  },
];

function Portfolio() {
  return (
    <section id="works">
      <span className="worksTitle">My Portfolio</span>
      <span className="worksDesc">
        Portfolio is a showcase of my skills, projects, and achievements as a
        Full Stack Web Developer. An effective portfolio highlights latest
        technologies and thought processes behind it.
      </span>
      <div className="worksImgs">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
}
export default Portfolio;
