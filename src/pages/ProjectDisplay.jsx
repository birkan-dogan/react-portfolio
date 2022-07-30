import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectlist } from "../helpers/Projectlist";
import { BsGithub } from "react-icons/bs";
import { FaUbuntu } from "react-icons/fa";
import "../styles/ProjectDisplay.css";
const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projectlist[id];
  const navigate = useNavigate();
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div>
        <a href={project.github} target="blank" style={{ margin: "1rem" }}>
          <BsGithub />
        </a>
        <a href={project.live} target="blank" style={{ margin: "1rem" }}>
          <FaUbuntu />
        </a>
      </div>
      <button onClick={() => navigate(-1)} className="back">
        Go Back
      </button>
    </div>
  );
};

export default ProjectDisplay;
