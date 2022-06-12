import React, { useState } from "react";
import Modal from "./Modal";

export default function ProjectCard(props) {
  const bgimgtest = require(`../../image/${props.coverImg}`);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="card col-4">
        <div
          className="card-bg bg"
          style={{
            backgroundImage: `url(${bgimgtest})`,
            backgroundSize: "contain",
          }}
        >
          <div className="card-content">
            <div>
              <h1>{props.title}</h1>
              <p className="medium-font">
                {props.intro}...
                <i onClick={() => setIsOpen(true)}>seemore</i>
              </p>
            </div>
            <a href={props.gamelink}>
              <button className="button-49 sm-btn">play now</button>
            </a>
          </div>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} {...props} />
      </div>
    </>
  );
}
