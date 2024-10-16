import React from 'react';
import { MdArrowOutward } from "react-icons/md";  // Import the arrow icon
import { FaCalendarAlt, FaComment } from "react-icons/fa";

import foodImage1 from '../assets/blog1.jpg';  // Blog post images
import foodImage2 from '../assets/blog2.jpg';  // Blog post images
import foodImage3 from '../assets/blog3.jpg';  // Blog post images

function Blog() {
  return (
    <div>
      {/* Blog Section - Update Our Foods */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get Update Our Foods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={foodImage1} alt="Food 1" className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
              <div className="flex items-center space-x-1 text-red-500 mb-4">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-1" /> 12 Aug, 2023
                  </span>
                  <span className="flex items-center px-8">
                    <FaComment className="mr-1" /> 2 Comments
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">New Restaurant Town Our Pie Award Contract</h3>
                <p className="text-gray-700">
                  Short description goes here about the news or update regarding the food industry.
                </p>
                <a href="#" className="inline-flex items-center text-red-500 mt-4">
                  Read More
                  <MdArrowOutward className="ml-1" />  {/* Arrow icon with a little space */}
                </a>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={foodImage2} alt="Food 2" className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <div className="flex items-center space-x-2 text-red-500 mb-4">
                <span className="flex items-center">
                    <FaCalendarAlt className="mr-2 " />  13 July, 2023
                  </span>

                  <span className="flex items-center px-8">
                    <FaComment className="mr-2" />  4 Comments
                  </span>
                 
                 
                </div>
                <h3 className="text-xl font-bold mb-3">Innovative Hot Cheesy Raw Pasta Make Creator</h3>
                <p className="text-gray-700">
                  Short description goes here about the news or update regarding the food industry.
                </p>
                <a href="#" className="inline-flex items-center text-red-500 mt-4">
                  Read More
                  <MdArrowOutward className="ml-1" />
                </a>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={foodImage3} alt="Food 3" className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <div className="flex items-center space-x-2 text-red-500 mb-4">
                <span className="flex items-center">
                    <FaCalendarAlt className="mr-1" />22 May, 2023
                  </span>
                  <span className="flex items-center px-8">
                    <FaComment className="mr-1" /> 3 Comments
                  </span>
                 
                </div>
                <h3 className="text-xl font-bold mb-3">Best Hot Cheesy Raw in Pasta Making Trick</h3>
                <p className="text-gray-700">
                  Short description goes here about the news or update regarding the food industry.
                </p>
                <a href="#" className="inline-flex items-center text-red-500 mt-4">
                  Read More
                  <MdArrowOutward className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
