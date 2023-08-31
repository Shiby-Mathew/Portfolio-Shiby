import React from "react";
import "./contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to reach out me
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="submitBtn" value="Send">
            Submit
          </button>
          <address className="links">
            <a
              href="https://www.linkedin.com/in/shiby-mathew-7647613b/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <FaLinkedin style={{ color: "cyan", fontSize: "26px" }} />
            </a>
            <a
              href="mailto:name@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <span style={{ textDecoration: "none", color: "cyan" }}>
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
              <FaGithub style={{ color: "cyan", fontSize: "26px" }} />
            </a>
          </address>
        </form>
      </div>
    </section>
  );
};
export default Contact;
