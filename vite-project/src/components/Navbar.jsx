import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LogoWhite.png";

const Navbar = () => {
  return (
    <nav className="bg-primary-color text-2xl p-4 w-full z-10 sticky top-0">
      <div className="max-w-7xl m-auto flex justify-between items-center">
        <div>
          <img className="max-h-10" src={logo} alt="Logo" />
        </div>
        <ul className="text-white flex items-center gap-10">
          <li>
            <Link
              to="/"
              className="hover:hover:text-gray-300 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:hover:text-gray-300 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className="hover:hover:text-gray-300 transition-colors duration-300"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;