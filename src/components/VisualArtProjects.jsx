import React from "react";
import Project from "./Project"
import { visualArts } from "../data";

function VisualArt() {
  return (

     visualArts.map((project) => (
        <Project
          id={project.id}
          name={project.name}
          date={project.date}
          role={project.role}
          media={project.media}
          description={project.description}
          link={project.link}
        />
      ))
  );
}

export default VisualArt;