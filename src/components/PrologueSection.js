import React from "react";
import { ReactComponent as Wave } from "../image/svgs/wave.svg";

export default function PrologueSection() {
  return (
    <section className="prologue-section">
      <Wave />
      <h1 className="section-title">Prologue</h1>
      <h4>Welcome to my portfolio website</h4>
      <div className="prologue-container container">
        <div className="row">
          <div className="prologue-card col-4">
            <div className="prologue-icon"></div>
            <div className="prologue-content">
              <h1>title</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium laudantium laboriosam commodi libero quos modi non .
              </p>
            </div>
          </div>
          <div className="prologue-card col-4">
            <div className="prologue-icon"></div>
            <div className="prologue-content">
              <h1>title</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium laudantium laboriosam commodi libero quos modi non .
              </p>
            </div>
          </div>
          <div className="prologue-card col-4">
            <div className="prologue-icon"></div>
            <div className="prologue-content">
              <h1>title</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium laudantium laboriosam commodi libero quos modi non .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
