import React from 'react';

// Importing local images from the assets folder
import Chef1 from '../assets/chef.jpg';
import Chef2 from '../assets/chef3.jpg';
import Chef3 from '../assets/chef.jpg';
import Chef4 from '../assets/chef3.jpg';

// Array of chefs with imported image paths
const chefs = [
  {
    imageUrl: Chef1,  // Imported image
    alt: "Chef 1",
  },
  {
    imageUrl: Chef2,
    alt: "Chef 2",
  },
  {
    imageUrl: Chef3,
    alt: "Chef 3",
  },
  {
    imageUrl: Chef4,
    alt: "Chef 4",
  },
];

// ChefCard Component to display each chef's information
const ChefCard = ({ imageUrl, alt }) => (
  <div className="flex flex-col items-center">
    <img
      className=" h-64 rounded-lg object-cover"  // Adjust width and height here
      src={imageUrl}
      alt={alt}
    />
  </div>
);

// MeetOurChefs Component to display all chefs
const MeetOurChefs = () => {
  return (
    <div className="bg-white py-10">
      <h2 className="text-4xl font-bold text-center mb-8">Meet our expert chefs</h2>
      <div className="flex justify-center gap-8">
        {chefs.map((chef, index) => (
          <ChefCard key={index} imageUrl={chef.imageUrl} alt={chef.alt} />
        ))}
      </div>
    </div>
  );
};

export default MeetOurChefs;
