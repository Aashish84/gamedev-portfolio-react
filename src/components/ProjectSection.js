import React from "react";
import { ReactComponent as FacebookIcon } from "../image/svgs/facebook-icon.svg";
import { ReactComponent as InstaIcon } from "../image/svgs/icons8-instagram.svg";
import { ReactComponent as GithubIcon } from "../image/svgs/icons8-github.svg";
import { ReactComponent as MediumIcon } from "../image/svgs/icons8-medium.svg";

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
        <div className="social-info">
          <a href="f">
            <FacebookIcon className="social-icons" />
          </a>
          <a href="f">
            <InstaIcon className="social-icons" />
          </a>
          <a href="f">
            <GithubIcon className="social-icons" />
          </a>
          <a href="f">
            <MediumIcon className="social-icons" />
          </a>
        </div>
        <div className="row">{projectCardElements}</div>
      </div>
    </section>
  );
}
