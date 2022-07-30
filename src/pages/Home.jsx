import React from "react";
import "../styles/Home.css";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3,
  FaBootstrap,
  FaSass,
  FaPython,
  FaGit,
  FaLinux,
} from "react-icons/fa";
import { BsGithub, BsSlack } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { TbApi } from "react-icons/tb";
import {
  SiSqlite,
  SiFirebase,
  SiJira,
  SiStyledcomponents,
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h3>Hi, My Name is Birkan</h3>
        <div className="prompt">
          <p>A Front-end Developer with a passion for learning and creating</p>
        </div>
      </div>
      <div className="skills1">
        <h2>{`<Languages and Tools />`} </h2>
        <div className="div-skills">
          <div className="skills">
            <AiFillHtml5 />
            <h1 className="name">HTML5</h1>
          </div>
          <div className="skills">
            <FaCss3 />
            <h1 className="name">CSS3</h1>
          </div>
          <div className="skills">
            <IoLogoJavascript />
            <h1 className="name">JavaScript</h1>
          </div>
          <div className="skills">
            <GrReactjs />
            <h1 className="name">React.js</h1>
          </div>
          <div className="skills">
            <FaBootstrap />
            <h1 className="name">Bootstrap5</h1>
          </div>
          <div className="skills">
            <FaSass />
            <h1 className="name">Sass</h1>
          </div>
          <div className="skills">
            <SiStyledcomponents />
            <h1 className="name">styled-components</h1>
          </div>
          <div className="skills">
            <TbApi />
            <h1 className="name">RestAPI</h1>
          </div>
          <div className="skills">
            <FaPython />
            <h1 className="name">Python</h1>
          </div>
          <div className="skills">
            <SiSqlite />
            <h1 className="name">SQLite</h1>
          </div>
          <div className="skills">
            <SiFirebase />
            <h1 className="name">Firebase</h1>
          </div>
          <div className="skills">
            <FaGit />
            <h1 className="name">Git</h1>
          </div>
          <div className="skills">
            <BsGithub />
            <h1 className="name">GitHub</h1>
          </div>
          <div className="skills">
            <FaLinux />
            <h1 className="name">Linux</h1>
          </div>
          <div className="skills">
            <SiJira />
            <h1 className="name">Agile</h1>
          </div>
          <div className="skills">
            <BsSlack />
            <h1 className="name">Slack</h1>
          </div>
          <div className="skills">
            <DiVisualstudio />
            <h1 className="name">Visual StudioCode</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
