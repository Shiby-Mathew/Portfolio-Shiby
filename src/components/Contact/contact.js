import React from "react";
import "./contact.css";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
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
          
        </form>
      </div>
    </section>
  );
};
export default Contact;
