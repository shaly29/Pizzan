// SpecialOffer.js
import React from 'react';
import backgroundImage from '../assets/offer.png'; 

const SpecialOffer = () => {
  return (
    <section
    className="relative bg-cover bg-center text-white"
    style={{ backgroundImage: `url(${backgroundImage})` }}  // Use the imported image
  >
      <div className="bg-black bg-opacity-50 py-32 text-left">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">Today's Special Offer</h2>
          <h1 className="text-6xl font-bold my-4">DELICIOUS BURGER</h1>
          <p className="text-red-500 text-2xl font-bold mb-8">32% OFF</p>
          <a href="#" className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700">
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
