import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <address className="links">
          <a
            href="https://www.linkedin.com/in/shiby-mathew-7647613b/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FaLinkedin style={{ color: "white", fontSize: "26px" }} />
          </a>
          <a
            href="mailto:name@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <span style={{ textDecoration: "none", color: "white" }}>
              {" "}
              Email
            </span>
          </a>
          <a
            href="https://github.com/Shiby-Mathew"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FaGithub style={{ color: "white", fontSize: "26px" }} />
          </a>
        </address>
        Copyright &#169; 2023 Shiby Portfolio. All right recevied
      </footer>
    </div>
  );
};
export default Footer;
