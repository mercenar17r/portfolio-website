import React from "react";
import Omnifood from "../assets/projects/omnifood.png";
import Forkify from "../assets/projects/forkify.png";
import Guess from "../assets/projects/guess-my-number.png";
import Shop from "../assets/projects/chair-shop.png";
import Mapty from "../assets/projects/maapty.png";

function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[950px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
            Work
          </p>
          <p className="py-6">//Check out my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Omnifood})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div>
              <div>
                <span></span>
              </div>
              <a href="/">
                <button></button>
              </a>
              <a href="/">
                <button></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
