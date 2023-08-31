import React from "react";
import "./navbar.css";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <img src={logo} alt="logo" className="logo" /> */}
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact Me
        </Link>
      </div>
      {/* <button className="desktopMenuButton">
        <img src="" alt="" className="desktopMenuImg" />
        Contact Me
      </button> */}
    </nav>
  );
};
export default Navbar;
