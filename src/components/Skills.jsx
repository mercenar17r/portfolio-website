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
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="pi-4">These are the technologies I've worked with</p>
        </div>
        <div>
          <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
