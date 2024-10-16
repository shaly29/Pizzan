import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown for Pages

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggles the dropdown visibility
  };

  return (
    <header className="bg-red-600 text-white sticky top-0 z-50">
      <div className="container mx-auto py-2 flex justify-between items-center">
        {/* Free Delivery Info */}
        <div className="text-xs text-white">
          Free Delivery on all orders Over $50
        </div>

        {/* Right side info */}
        <div className="flex items-center space-x-6">
          <div className="text-xs text-white">Rd. Allentown, New Mexico 31134</div>
          {/* Social Media Icons */}
          <div className="flex space-x-3">
            <a href="#" className="hover:text-red-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-black py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="/" className="text-white">
              PIZZAN
            </Link>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? "✖" : "☰"} {/* Close icon when menu is open, hamburger icon when closed */}
            </button>
          </div>

          {/* Menu Items */}
          <ul className={`md:flex space-x-8 text-white ${isMenuOpen ? "block" : "hidden"} md:block absolute md:static w-full md:w-auto`}>
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/shop">Shop</Link>
            </li>
            {/* Pages Dropdown */}
            <li className="relative">
              <button onClick={toggleDropdown} className="hover:text-red-600 cursor-pointer flex items-center">
                Pages
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 bg-white text-black py-2 mt-2 shadow-lg rounded-md w-40">
                  <li className="hover:bg-red-600 hover:text-white px-4 py-2">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="hover:bg-red-600 hover:text-white px-4 py-2">
                    <Link to="/menu">Menu</Link>
                  </li>
                  <li className="hover:bg-red-600 hover:text-white px-4 py-2">
                    <Link to="/popular">Popular</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/blog">News</Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Link to="/cart" className="hover:text-red-600">
              <FiShoppingCart />
            </Link>
            <Link
      to="/reservation"
      className="bg-red-500 text-white py-2 px-4 hover:bg-red-800 flex items-center"
    >
      BOOK A TABLE
      <AiOutlineArrowRight className="ml-2" />
    </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
