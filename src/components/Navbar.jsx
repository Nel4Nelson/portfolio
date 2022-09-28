import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
      
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        <li className="hover:scale-150 duration-500">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:scale-150 duration-500">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:scale-150 duration-500">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:scale-150 duration-500">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:scale-150 duration-500">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl hover:scale-150 duration-500">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-150 duration-500">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-150 duration-500">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-150 duration-500">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-150 duration-500">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}

      <div className="hidden lg:flex fixed flex-col top-[24%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-[#0A66C2]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://linkedin.com/nel4nelson"
            >
              LinkedIn <FaLinkedin size={40} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-[#4285F4]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://gmail.com/nel4nelson"
            >
              Mail <HiOutlineMail size={40} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-[#1A8CD8]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/nel4nelson"
            >
              Twitter <FaTwitter size={40} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-[#24292F]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/nel4nelson"
            >
              Github <FaGithub size={40} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-[#24292F]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://linkedin/nel4nelson"
            >
              Resume <BsFillPersonLinesFill size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
