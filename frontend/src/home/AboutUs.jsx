import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PastaDish from '../assets/abo.jpg';  
import CEOImage from '../assets/ceo.jpeg'; 
import FastFoodImage from '../assets/abo.jpg'; 
import HealthyFoodImage from '../assets/fast.png'; 
import { FaPlay } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const AboutUs = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => setIsButtonClicked(false), 1000);
  };

  const toggleVideoPopup = () => {
    setShowVideoPopup((prev) => !prev);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        
        {/* Left - Image with Video Button */}
        <div className="lg:w-1/2 w-full relative mb-10 lg:mb-0">
          <img
            src={PastaDish}
            alt="Pasta Dish"
            className="w-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 right-4">
            <button
              onClick={toggleVideoPopup}
              className="bg-black bg-opacity-50 rounded-full p-6 md:p-9 flex items-center justify-center"
              aria-label="Play Video"
            >
              <FaPlay className="w-6 h-6 md:w-12 md:h-12 text-red-500" />
            </button>
          </div>
        </div>

        {/* Right - Content */}
        <div className="lg:w-1/2 w-full lg:pl-16">
          <h3 className="text-red-500 font-bold text-lg md:text-xl mb-2">About Company</h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Where quality food meets excellent service</h2>
          <p className="text-gray-700 mb-6">
            It's the perfect dining experience where every dish is crafted with
            fresh, high-quality ingredients and served by friendly staff who go
            the extra mile.
          </p>

          {/* Info Boxes */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0 mb-6">
            <div className="bg-white shadow-lg p-4 rounded-lg text-left w-full sm:w-1/2">
              <img
                src={FastFoodImage}
                alt="Fast Food"
                className="h-28 w-full object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold">Fast Foods</h4>
              <p className="text-gray-500">Quick and delicious meals for every taste</p>
            </div>
            <div className="bg-white border-2 border-red-500 shadow-lg p-4 rounded-lg text-left w-full sm:w-1/2">
              <img
                src={HealthyFoodImage}
                alt="Healthy Food"
                className="h-28 w-full object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold">Healthy Foods</h4>
              <p className="text-gray-500">Nutrient-rich and health-conscious meals</p>
            </div>
          </div>

          {/* CTA & CEO Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
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
            <div className="flex items-center space-x-4">
              <img
                src={CEOImage}
                alt="CEO Ronald Richards"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-bold">Ronald Richards</h4>
                <p className="text-gray-500">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {showVideoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg w-full max-w-2xl">
            <button
              onClick={toggleVideoPopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              aria-label="Close Video"
            >
              <AiOutlineClose className="w-6 h-6" />
            </button>
            <div className="relative h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/cEUNUr9gfz8"
                title="Domino's Pizza Recipe in Tamil"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
