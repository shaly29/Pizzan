import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PastaDish from '../assets/abo.jpg';  // Ensure the path is correct
import CEOImage from '../assets/ceo.jpeg';  // Ensure the path is correct
import FastFoodImage from '../assets/abo.jpg';  // Ensure the path is correct
import HealthyFoodImage from '../assets/fast.png';  // Ensure the path is correct
import { FaPlay } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const AboutUs = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  // Handle button click and animation
  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => setIsButtonClicked(false), 1000);
  };

  // Handle video popup toggle
  const toggleVideoPopup = () => {
    setShowVideoPopup((prev) => !prev);
  };

  return (
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section: Image with Play Button */}
        <div className="lg:w-1/2 relative mb-8 lg:mb-0">
          <img
            src={PastaDish}
            alt="Pasta Dish"
            className="w-full object-cover rounded-lg shadow-lg"
          />
          {/* Play Button Overlay */}
          <div className="absolute bottom-4 right-4 flex items-center justify-center">
            <button
              onClick={toggleVideoPopup}
              className="bg-black bg-opacity-50 rounded-full p-9 flex items-center justify-center"
              aria-label="Play Video"
            >
              <FaPlay className="w-12 h-12 text-red-500" />
            </button>
          </div>
        </div>

        {/* Right Section: About Content */}
        <div className="lg:w-1/2 lg:pl-16">
          <h3 className="text-red-500 font-bold text-xl mb-2">About Company</h3>
          <h2 className="text-3xl font-bold mb-6">Where quality food meets excellent service</h2>
          <p className="text-gray-700 mb-6">
            It's the perfect dining experience where every dish is crafted with
            fresh, high-quality ingredients and served by friendly staff who go
            the extra mile.
          </p>

          {/* Fast and Healthy Foods Section */}
          <div className="flex space-x-8 mb-6">
            <div className="relative bg-white shadow-lg p-4 rounded-lg text-left">
              <img
                src={FastFoodImage}
                alt="Fast Food"
                className="h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold">Fast <br /> Foods</h4>
              <p className="text-gray-500">Quick and delicious meals for every taste</p>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg text-left border-2 border-red-500">
              <img
                src={HealthyFoodImage}
                alt="Healthy Food"
                className="h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold">Healthy Foods</h4>
              <p className="text-gray-500">Nutrient-rich and health-conscious meals</p>
            </div>
          </div>

          {/* CEO Section */}
          <div className="flex items-center mt-6 space-x-6">
            {/* Animated Button */}
            <Link to="/about">
              <button
                onClick={handleButtonClick}
                className={`py-2 px-6 rounded-lg font-bold text-white transition duration-300 ${
                  isButtonClicked ? 'bg-red-700' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                About More
              </button>
            </Link>
            <img
              src={CEOImage}
              alt="CEO Ronald Richards"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="text-lg font-bold">Ronald Richards</h4>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {showVideoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-6 max-w-lg w-full">
            <button
              onClick={toggleVideoPopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 "
              aria-label="Close Video"
            >
              <AiOutlineClose className="w-6 h-6" />
            </button>
            <div className="relative h-0 pb-[56.25%]"> {/* Maintain aspect ratio 16:9 */}
              {/* <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/cEUNUr9gfz8" 
                title="Domino's Pizza Recipe in Tamil" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe> */}
              <iframe width="500" height="300" src="https://www.youtube.com/embed/cEUNUr9gfz8" title="ஓவன் இல்லாமல் வீட்டிலேயே ஈசியா Domino&#39;s பீட்ஸா செய்ங்க👌| Domino&#39;s Pizza Recipe in Tamil | pizza" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
