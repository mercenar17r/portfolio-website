import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Hero() {
  return (
    <div className="w-fu;; h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1>Cosmin Negrut</h1>
        <h2>I'm a Junior Web Developer.</h2>
        <p>
          I'm Junior Web Developer.Currently specializing in building Web
          Applications and constantly learning new technologies.
        </p>
        <div>
          |{" "}
          <button>
            View Work <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
