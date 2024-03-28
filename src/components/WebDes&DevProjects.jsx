import React from "react";
import Project from "./Project";
import { webDevNDes } from "../data";

function WebDesignDev() {
  return (
    <div>
      {webDevNDes.length === 0 ? (
        <p>No projects to display</p>
      ) : (
        webDevNDes.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            date={project.date}
            role={project.role}
            media={project.media}
            description={project.description}
            link={project.link}
          />
        ))
      )}
    </div>
  );
}

export default WebDesignDev;
