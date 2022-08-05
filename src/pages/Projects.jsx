import React, { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import { projectlist } from "../helpers/Projectlist";
import "../styles/projects.css";
const Projects = () => {
  const [load, setLoad] = useState(0);
  let mappingList = projectlist.slice(0, 5);
  const handleLoad = () => {
    setLoad(load + 1);
  };
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {!load
          ? projectlist.slice(0, 5).map((item, index) => {
              return <ProjectItem id={index} item={item} />;
            })
          : load > 1
          ? projectlist.slice(0, projectlist.length).map((item, index) => {
              return <ProjectItem id={index} item={item} />;
            })
          : projectlist.slice(0, 10).map((item, index) => {
              return <ProjectItem id={index} item={item} />;
            })}
      </div>
      {load < 2 && (
        <button onClick={handleLoad} className="btn">
          Load More
        </button>
      )}
    </div>
  );
};

export default Projects;
