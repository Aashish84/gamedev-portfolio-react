import React from "react";
import { ReactComponent as FacebookIcon } from "../image/svgs/facebook-icon.svg";
import { ReactComponent as InstaIcon } from "../image/svgs/icons8-instagram.svg";
import { ReactComponent as GithubIcon } from "../image/svgs/icons8-github.svg";
import { ReactComponent as MediumIcon } from "../image/svgs/icons8-medium.svg";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content" id="about-section">
        <h1>&copy; Niraj karki</h1>
        <div className="about-icons-container">
          <a href="lda">
            <FacebookIcon className="about-icons" title="facebook" />
          </a>
          <a href="lda">
            <InstaIcon className="about-icons" title="instagram" />
          </a>
          <a href="lda">
            <GithubIcon className="about-icons" title="github" />
          </a>
          <a href="lda">
            <MediumIcon className="about-icons" title="medium" />
          </a>
        </div>
      </div>
    </section>
  );
}
