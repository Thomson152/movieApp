import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import logo from "../assets/netflix.png";

function Navbar() {
  return (
    <nav className="bg-black">
      <div className="container mx-auto px-4 py-10 flex items-center justify-between">
        <img className="w-16 h-auto" src={logo} alt="Netflix" />
        <div className="flex items-center">
          <ul className="ml-8 space-x-6 cursor-pointer hidden md:flex text-white">
            <li className="text-xl font-semibold">Home</li>
            <li className="text-xl font-semibold">TV Shows</li>
            <li className="text-xl font-semibold">Movies</li>
            <li className="text-xl font-semibold">New & Popular</li>
            <li className="text-xl font-semibold">My List</li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <FaSearch size={20} />
          </button>
          <button className="text-white">
            <FaBell size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
