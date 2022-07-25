import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h3>Hi, My Name is Birkan</h3>
        <div className="prompt">
          <p>A Front-end Developer with a passion for learning and creating</p>
        </div>
      </div>
      <div className="skills">
        {/* <h1>Skills</h1> */}
        <ol className="list">
          <li className="item">
            <h2>TECHNICAL SKILLS</h2>
            <span>
              HTML5 | CSS3 | JavaScript | React.js |Redux | Bootstrap | Python |
              Linux | SQLite | Git | GitHub | APIs | SDLC
            </span>
          </li>
          <li className="item">
            <h2>SOFT SKILLS</h2>
            <span>
              Analytical Thinking | Problem-Solving Abilities | Self-Motivated |
              Strong Communication | Time Management | Continuous Learning |
              Collaboration & Teamwork | Curiosity | Emotional Intelligence
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
