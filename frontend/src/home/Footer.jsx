import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div className="col-span-1">
          <h2 className="text-xl font-bold mb-4">About Restaurant</h2>
          <p className="text-sm">
            Quickly supply alternative strategic theme areas via B2C niches.
            Objectively repurpose user-centric core competencies.
          </p>
          <div className="mt-4 flex space-x-3">
            
            <a href="#" className="text-gray-400 hover:text-white">FB</a>
            <a href="#" className="text-gray-400 hover:text-white">TW</a>
            <a href="#" className="text-gray-400 hover:text-white">IG</a>
          </div>
        </div>

       
        <div className="col-span-1">
          <h2 className="text-xl font-bold mb-4">Our Menu</h2>
          <ul className="space-y-2">
            <li>Chicken Burger</li>
            <li>Beef Pizza</li>
            <li>Fresh Vegetables</li>
            <li>Sea Foods</li>
            <li>Indian Kebab</li>
          </ul>
        </div>

       
<div className="col-span-1">
  <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
  <ul className="space-y-4">
    <li className="flex space-x-4">
      <img
        src="https://via.placeholder.com/60"
        alt="Post 1"
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <a href="#" className="hover:text-yellow-500">
          10 Reasons To Do A Digital Detox Challenge
        </a>
        <p className="text-xs text-gray-400">June 22, 2023</p>
      </div>
    </li>
    <li className="flex space-x-4">
      <img
        src="https://via.placeholder.com/60"
        alt="Post 2"
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <a href="#" className="hover:text-yellow-500">
          New Restaurant Town Pie Award Contrast
        </a>
        <p className="text-xs text-gray-400">June 20, 2023</p>
      </div>
    </li>
  </ul>
</div>


       
        <div className="col-span-1">
          <h2 className="text-xl font-bold mb-4">Contact Now</h2>
          <p>1400 Washington Ave, New Orleans</p>
          <p>+1 (202) 656-2621</p>
          <p>info@example.com</p>
          <p>Thu-Sun 9:00AM - 5:00PM</p>
        </div>
      </div>

     
      <div className="mt-10 bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">Subscribe Our Newsletter</p>
          <div className="flex space-x-4">
            <input
              type="email"
              className="bg-gray-700 text-white p-2 rounded"
              placeholder="Email Address"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-4 bg-gray-900 text-center py-4 text-gray-400 text-xs">
        <p>© 2023 Thernobify. All Rights Reserved.</p>
        <p>
          <a href="#" className="hover:underline">Privacy Policy</a> |{" "}
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
