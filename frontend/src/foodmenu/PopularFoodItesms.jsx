import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu`)
      .then(response => {
        console.log(response.data); 
        setFoodItems(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto py-10 ">
      <h2 className="text-4xl font-bold text-center mb-8">Our Popular Food Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> 
        {foodItems
          .filter(item => item.discount <= 24) 
          .map((item) => (
            <div key={item._id} className="bg-yellow-50 shadow-lg p-6 rounded-lg flex flex-col items-center relative">
              <div className="relative mb-4">
              
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-48 h-48 object-cover rounded-full p-2" 
                  onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/default/image.jpg'; }} 
                />
               
                <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold flex items-center justify-center rounded-full w-12 h-12"> 
                  <div className="text-center">
                    <span className="block">{item.discount}%</span> 
                    <span className="block">OFF</span> 
                  </div>
                </span>
              </div>
             
              <Link to={`/view-details/${item._id}`} className="text-xl font-semibold text-center hover:text-red-500 transition duration-200">
                {item.name}
              </Link>
              <p className="text-gray-500 text-center">{item.description}</p>
              <p className="text-red-500 text-lg font-bold">${item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoodItems; 