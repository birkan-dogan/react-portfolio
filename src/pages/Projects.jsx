import React from "react";
import ProjectItem from "../components/ProjectItem";
import { projectlist } from "../helpers/Projectlist";
import "../styles/projects.css";
const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectlist.map((item, index) => {
          return <ProjectItem id={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
