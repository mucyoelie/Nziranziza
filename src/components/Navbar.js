import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  };

  return (
    <nav className="bg-white text-black fixed w-full z-40 h-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-xl font-bold"></div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10 mr-[6%]">
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <SiUpwork size={21} className="text-white bg-custom-blue p-[2px] rounded-[5px]" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaLinkedin size={21} className="bg-white text-custom-blue" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaGithub size={21} className="bg-white text-custom-blue" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none h-full mt-5 mr-0"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              // Close Icon (X)
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger Icon
              <div className="space-y-1">
                <div className="h-0.5 w-8 bg-custom-blue ml-auto"></div>
                <div className="h-0.5 w-6 bg-custom-blue ml-auto"></div>
                <div className="h-0.5 w-4 bg-custom-blue ml-auto"></div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white fixed h-full w-1/2 right-0 top-[11%] space-y-3`}
      >
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-[65%] py-2 hover:bg-gray-200"
        >
          <SiUpwork size={24} className="inline mr-2  text-white bg-custom-blue" />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-[65%] py-2 hover:bg-gray-200"
        >
          <FaLinkedin size={24} className="inline mr-2 bg-white text-custom-blue" />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-[65%] py-2 hover:bg-gray-200"
        >
          <FaGithub size={24} className="inline mr-2 bg-white text-custom-blue" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;