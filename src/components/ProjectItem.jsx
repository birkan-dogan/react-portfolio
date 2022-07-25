import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ item, id }) => {
  const navigate = useNavigate();
  const { name, image } = item;
  return (
    <div className="projectItem" onClick={() => navigate(`/projects/${id}`)}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
