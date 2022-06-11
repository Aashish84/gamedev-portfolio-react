import React, { useState } from "react";
import Modal from "./Modal";

export default function ProjectCard(props) {
  const bgimgtest = require(`../../image/${props.coverImg}`);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="card col-4" data-tilt>
        <div
          className="card-bg bg"
          style={{
            backgroundImage: `url(${bgimgtest})`,
            backgroundSize: "contain",
          }}
        >
          <div className="card-content">
            <h1>{props.title}</h1>
            <p>
              {props.coverDesc}...
              <i onClick={() => setIsOpen(true)}>seemore</i>
            </p>
            <button>play now</button>
          </div>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} {...props} />
      </div>
    </>
  );
}
