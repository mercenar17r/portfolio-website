import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Hero() {
  return (
    <div className="w-fu;; h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-3xl font-bold text-[#ccd6f6]">
          Cosmin Negrut
        </h1>
        <h2 className="text-4xl sm:text-4xl font-bold text-[#8892b0]">
          I'm a Junior Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm Junior Web Developer. Currently specializing in building Web
          Applications and constantly learning new technologies.
        </p>
        <div>
          |{" "}
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span>
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
