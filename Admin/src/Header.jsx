// components/Header.js
import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  return (
    <header className="bg-gray-800 text-white flex justify-between items-center px-4 py-2 shadow-md">
      {/* Menu Icon */}
      <div className="menu-icon">
        <BsJustify className="text-2xl cursor-pointer" onClick={OpenSidebar} />
      </div>

      {/* Search Icon */}
      <div className="header-left flex-1 ml-4">
        <div className="flex items-center bg-gray-700 px-3 py-2 rounded-lg">
          <BsSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent text-white outline-none placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="header-right flex items-center space-x-6">
        <BsFillBellFill className="text-2xl cursor-pointer" />
        <BsFillEnvelopeFill className="text-2xl cursor-pointer" />
        <BsPersonCircle className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
