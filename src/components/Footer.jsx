import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsGithub />
        <AiFillLinkedin />
      </div>
      <p> &copy; 2022 birkandogan.com </p>
    </div>
  );
};

export default Footer;
