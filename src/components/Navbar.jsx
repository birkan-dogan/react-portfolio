import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaStackOverflow } from "react-icons/fa";
const Navbar = () => {
  const [expandNav, setExpandNav] = useState(false);
  return (
    <div
      className="navbar"
      id={expandNav ? "open" : "close"}
      onClick={() => setExpandNav(!expandNav)}
    >
      <div className="toggleButton">
        <button onClick={() => setExpandNav(!expandNav)}>
          <FaStackOverflow />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/develop">Develop</Link>
      </div>
    </div>
  );
};

export default Navbar;
