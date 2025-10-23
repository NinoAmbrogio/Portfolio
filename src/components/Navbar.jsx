import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 p-4 w-full z-10 sticky top-0 shadow-lg">
      <div className="max-w-7xl m-auto flex justify-between items-center">
        <div>
          <img className="max-h-10" src={logo} alt="Logo" />
        </div>

        {/* Hamburger button - visibile solo su mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Menu desktop - nascosto su mobile */}
        <ul className="hidden md:flex text-white text-2xl items-center gap-10">
          <li>
            <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300 transition-colors duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="hover:text-gray-300 transition-colors duration-300">
              Contacts
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu mobile - con animazione slide down */}
      {isMenuOpen && (
        <div className="md:hidden animate-slideDown">
          <ul className="text-white text-xl flex flex-col gap-1 mt-4 bg-indigo-700 rounded-lg p-4">
            <li className="hover:bg-indigo-800 rounded-md transition-colors duration-200">
              <Link 
                to="/" 
                className="block py-3 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="hover:bg-indigo-800 rounded-md transition-colors duration-200">
              <Link 
                to="/projects" 
                className="block py-3 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="hover:bg-indigo-800 rounded-md transition-colors duration-200">
              <Link 
                to="/contacts" 
                className="block py-3 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;