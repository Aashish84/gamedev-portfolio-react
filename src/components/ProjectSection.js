import React from "react";
import { ReactComponent as FacebookIcon } from "../image/svgs/facebook-icon.svg";
import { ReactComponent as InstaIcon } from "../image/svgs/icons8-instagram.svg";
import { ReactComponent as GithubIcon } from "../image/svgs/icons8-github.svg";
import { ReactComponent as MediumIcon } from "../image/svgs/icons8-medium.svg";

export default function ProjectSection() {
  return (
    <section className="project-section" id="test">
      <h1 className="section-title">Portfolio</h1>
      <div className="card-container">
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
        <div className="row">
          <div className="card col-4" data-tilt>
            <div className="card-bg">
              <div className="card-content">
                <h1>hello</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium laudantium laboriosam commodi libero quos modi non
                  error nobis sequi iure cum perferendis at distinctio ea
                  aspernatur quo, unde eligendi explicabo vero.
                </p>
                <a href="ds">seemore</a>
              </div>
            </div>
          </div>
          <div className="card col-4" data-tilt>
            <div className="card-bg">
              <div className="card-content">
                <h1>hello</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium laudantium laboriosam commodi libero quos modi non
                  error nobis sequi iure cum perferendis at distinctio ea
                  aspernatur quo, unde eligendi explicabo vero.
                </p>
                <a href="ds">seemore</a>
              </div>
            </div>
          </div>
          <div className="card col-4" data-tilt>
            <div className="card-bg">
              <div className="card-content">
                <h1>hello</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium laudantium laboriosam commodi libero quos modi non
                  error nobis sequi iure cum perferendis at distinctio ea
                  aspernatur quo, unde eligendi explicabo vero.
                </p>
                <a href="ds">seemore</a>
              </div>
            </div>
          </div>
          <div className="card col-4" data-tilt>
            <div className="card-bg">
              <div className="card-content">
                <h1>hello</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium laudantium laboriosam commodi libero quos modi non
                  error nobis sequi iure cum perferendis at distinctio ea
                  aspernatur quo, unde eligendi explicabo vero.
                </p>
                <a href="ds">seemore</a>
              </div>
            </div>
          </div>
          <div className="card col-4" data-tilt>
            <div className="card-bg">
              <div className="card-content">
                <h1>hello</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium laudantium laboriosam commodi libero quos modi non
                  error nobis sequi iure cum perferendis at distinctio ea
                  aspernatur quo, unde eligendi explicabo vero.
                </p>
                <a href="ds">seemore</a>
              </div>
            </div>
          </div>
          <div className="card col-4" data-tilt>
            <div className="card-bg">
              <div className="card-content">
                <h1>hello</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium laudantium laboriosam commodi libero quos modi non
                  error nobis sequi iure cum perferendis at distinctio ea
                  aspernatur quo, unde eligendi explicabo vero.
                </p>
                <a href="ds">seemore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
