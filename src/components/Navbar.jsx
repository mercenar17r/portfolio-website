import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo1.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handlerClick = () => setNav(!nav);
  return (
    <div>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div className="">
          <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
        </div>
        {/* Menu */}

        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
        {/* Hamburger */}
        <div onClick={handlerClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full  h-screen bg-[#0a192f] flex flex-col justify-center items-center "
          }
        >
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
        {/* Social Icons */}
        <div className="flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300  bg-blue-600">
              <a className="flex justify-between items-center w-full text-gray-300">
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
