import React from "react";
import ProjectCard from "./comp-fragments/ProjectCard";
import projectData from "../project-data";

export default function ProjectSection() {
  let projectCardElements = projectData.map((elem) => {
    return <ProjectCard {...elem} key={elem.id} />;
  });

  return (
    <section className="project-section" id="project-section">
      <h1 className="section-title">Projects</h1>
      <div className="card-container container">
        <div className="row">{projectCardElements}</div>
      </div>
    </section>
  );
}
