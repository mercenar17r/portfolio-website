import React from "react";
import Omnifood from "../assets/projects/omnifood.png";
import Forkify from "../assets/projects/forkify.png";
import Guess from "../assets/projects/guess-my-number.png";
import Shop from "../assets/projects/chair-shop.png";
import Mapty from "../assets/projects/maapty.png";
import Portfolio from "../assets/projects/portfolio.png";

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
            <div className="opacity-0 group-hover:opacity-100 ">
              <div className="text-2xl font bold text-white tracking-wider ">
                <span>CSS, JavaScript</span>
              </div>
              <a href="https://omnifood-negrut.netlify.app/" target="_blank">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>
              </a>
              <a href="https://github.com/mercenar17r/omnifood" target="_blank">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
              </a>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Forkify})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <div className="text-2xl font bold text-white tracking-wider ">
                <span>Javascript,Sass,Html</span>
              </div>
              <a href="https://forkify-ncosmin.netlify.app/" target="_blank">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/mercenar17r/recipe-app"
                target="_blank"
              >
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
              </a>
            </div>
          </div>{" "}
          <div
            style={{ backgroundImage: `url(${Guess})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <div className="text-2xl font bold text-white tracking-wider ">
                <span>Javascript Application</span>
              </div>
              <a
                href="https://guess-my-number-cosmin.netlify.app/"
                target="_blank"
              >
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/mercenar17r/Guess-My-Number-"
                target="_blank"
              >
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
              </a>
            </div>
          </div>{" "}
          <div
            style={{ backgroundImage: `url(${Shop})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <div className="text-2xl font bold text-white tracking-wider ">
                <span>Css Application</span>
              </div>
              <a href="https://chair-shop-cosmin.netlify.app/" target="_blank">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/mercenar17r/chair-shop"
                target="_blank"
              >
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
              </a>
            </div>
          </div>{" "}
          <div
            style={{ backgroundImage: `url(${Mapty})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <div className="text-2xl font bold text-white tracking-wider ">
                <span>Javascript,CSS</span>
              </div>
              <a href="https://maapty-cosmin.netlify.app/" target="_blank">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/mercenar17r/Mapty-App"
                target="_blank"
              >
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
              </a>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <div className="text-2xl font bold text-white tracking-wider ">
                <span>React,Tailwind,Html </span>
              </div>

              <a
                href="https://github.com/mercenar17r/portfolio-website"
                target="_blank"
              >
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
