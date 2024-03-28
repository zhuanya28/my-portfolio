import React from "react";
import Project from "./Project"
import { digitalArtNGraphDesign } from "../data";

function DigitalArt() {
  return (

    digitalArtNGraphDesign.map((project) => (
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

export default DigitalArt;