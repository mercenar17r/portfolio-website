import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] Itext-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right  text-4xl font-bold">
            <p>Hi.I'm Cosmin,nice to meet you.Please take a look around</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              magnam quibusdam neque ratione fugit voluptate repellendus
              voluptatibus. Assumenda pariatur soluta omnis ab labore voluptatem
              ea quaerat. Recusandae ut quod sint!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
