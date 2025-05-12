import React from 'react';

import Chef1 from '../assets/chef.jpg';
import Chef2 from '../assets/chef3.jpg';
import Chef3 from '../assets/chef.jpg';
import Chef4 from '../assets/chef3.jpg';

const chefs = [
  { imageUrl: Chef1, alt: "Chef 1" },
  { imageUrl: Chef2, alt: "Chef 2" },
  { imageUrl: Chef3, alt: "Chef 3" },
  { imageUrl: Chef4, alt: "Chef 4" },
];

const ChefCard = ({ imageUrl, alt }) => (
  <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img
      className="w-full h-72 object-cover"
      src={imageUrl}
      alt={alt}
    />
    <div className="py-4 text-center">
      <h4 className="text-lg font-semibold">{alt}</h4>
      <p className="text-sm text-gray-500">Master Chef</p>
    </div>
  </div>
);

const MeetOurChefs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
        Meet Our Expert Chefs
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {chefs.map((chef, index) => (
          <ChefCard key={index} imageUrl={chef.imageUrl} alt={chef.alt} />
        ))}
      </div>
    </section>
  );
};

export default MeetOurChefs;
