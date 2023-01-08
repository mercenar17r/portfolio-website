import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";

function Skills() {
  return (
    <div name="skills">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p>Experience</p>
          <p>These are the technologies I've worked with</p>
        </div>
        <div>
          <img src={HTML} alt="HTML icon" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
