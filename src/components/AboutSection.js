import React from "react";
import { ReactComponent as Wave } from "../image/svgs/wave.svg";
import { ReactComponent as FacebookIcon } from "../image/svgs/facebook-icon.svg";
import { ReactComponent as InstaIcon } from "../image/svgs/icons8-instagram.svg";
import { ReactComponent as GithubIcon } from "../image/svgs/icons8-github.svg";
import { ReactComponent as MediumIcon } from "../image/svgs/icons8-medium.svg";

export default function AboutSection() {
  return (
    <section className="about-section" id="about-section">
      <Wave className="about-wave" />
      <div className="about-content">
        <h1>&copy; Niraj karki</h1>
        <div className="about-icons-container">
          <a href="lda">
            <FacebookIcon className="about-icons" />
          </a>
          <a href="lda">
            <InstaIcon className="about-icons" />
          </a>
          <a href="lda">
            <GithubIcon className="about-icons" />
          </a>
          <a href="lda">
            <MediumIcon className="about-icons" />
          </a>
        </div>
      </div>
    </section>
  );
}
