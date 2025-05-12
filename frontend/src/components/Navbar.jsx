import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-red-600 text-white text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2 px-4">
          <div>Free Delivery on all orders Over $50</div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <span>Rd. Allentown, New Mexico 31134</span>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-black"><FaFacebookF /></a>
              <a href="#" className="hover:text-black"><FaTwitter /></a>
              <a href="#" className="hover:text-black"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="text-white">PIZZAN</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Navigation Links */}
          <ul className={`md:flex md:items-center md:space-x-8 absolute md:static left-0 w-full md:w-auto bg-black md:bg-transparent text-white transition-all duration-300 ease-in-out ${isMenuOpen ? "top-full block" : "hidden md:block"}`}>
            <li className="px-4 py-2 hover:text-red-600">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-2 hover:text-red-600">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="px-4 py-2 hover:text-red-600">
              <Link to="/shop">Shop</Link>
            </li>
            {/* Dropdown */}
            <li className="relative px-4 py-2 hover:text-red-600 md:cursor-pointer">
              <button onClick={toggleDropdown} className="flex items-center w-full">
                Pages
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute md:absolute left-0 bg-white text-black py-2 mt-2 shadow-lg rounded-md w-40 z-50">
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
            <li className="px-4 py-2 hover:text-red-600">
              <Link to="/blog">News</Link>
            </li>
            <li className="px-4 py-2 hover:text-red-600">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Action Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="hover:text-red-600">
              <FiShoppingCart />
            </Link>
            <Link to="/reservation" className="bg-red-500 hover:bg-red-800 text-white py-2 px-4 flex items-center rounded">
              BOOK A TABLE <AiOutlineArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Mobile Buttons Section */}
        {isMenuOpen && (
          <div className="flex flex-col md:hidden px-4 pb-4 space-y-3">
            <Link to="/cart" className="flex items-center text-white hover:text-red-600">
              <FiShoppingCart className="mr-2" /> View Cart
            </Link>
            <Link to="/reservation" className="bg-red-500 hover:bg-red-800 text-white py-2 px-4 flex items-center justify-center rounded">
              BOOK A TABLE <AiOutlineArrowRight className="ml-2" />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
