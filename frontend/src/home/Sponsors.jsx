import React from 'react';

// Import your images here
import Logo1 from '../assets/c1.jpg';  // Replace with actual image paths
import Logo2 from '../assets/c6.jpg';
import Logo3 from '../assets/c3.jpg';
import Logo4 from '../assets/c4.jpg';
import Logo5 from '../assets/c5.jpg';

// Array of logos
const logos = [
  { src: Logo1, alt: 'Restaurant 1' },
  { src: Logo2, alt: 'Restaurant 2' },
  { src: Logo3, alt: 'Restaurant 3' },
  { src: Logo4, alt: 'Restaurant 4' },
  { src: Logo5, alt: 'Restaurant 5' },
];

const Sponsors = () => {
  return (
    <div className="bg-white py-10 w-full">
      {/* Full-width section */}
      <div className="w-full">
        {/* Title section */}
        <div className="flex items-center justify-center mb-8">
          <hr className="w-1/5 border-gray-300" />
          <h2 className="text-2xl font-bold text-center mx-4">
            Global 5K+ Happy Sponsors With Us
          </h2>
          <hr className="w-1/5 border-gray-300" />
        </div>

        {/* Full-width logos section */}
        <div className="flex justify-center gap-8 flex-wrap w-full px-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img className="w-60 h-40 object-contain" src={logo.src} alt={logo.alt} /> {/* Increased width for logos */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
