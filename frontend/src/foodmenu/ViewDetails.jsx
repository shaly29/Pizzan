// src/components/ViewDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

const ViewDetails = () => {
  const { id } = useParams(); 
  const [foodItem, setFoodItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  
  useEffect(() => {
  
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu/${id}`)
      .then(response => {
        setFoodItem(response.data);
      })
      .catch(error => console.error('Error fetching food item:', error));
  }, [id]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${foodItem.name} to the cart.`);
   
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
   
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/reviews`, { review, rating, foodItemId: id })
      .then(() => {
        console.log('Review submitted:', review, 'Rating:', rating);
        setReview('');
        setRating(0); 
      })
      .catch(error => console.error('Error submitting review:', error));
  };

  if (!foodItem) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container mx-auto py-10 flex flex-col md:flex-row md:space-x-8">
      <div className="flex-1 bg-red-100 p-4 rounded-lg mb-4 md:mb-0"> 
        <div className="flex justify-center mb-4">
          <img 
            src={foodItem.image} 
            alt={foodItem.name} 
            className="w-96 h-96 object-cover rounded-full" 
            onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/default/image.jpg'; }} 
          />
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-center mb-4">{foodItem.name}</h2>
        <p className="text-xl text-center mb-4">{foodItem.description}</p>
        <p className="text-red-500 text-lg font-bold text-center">${foodItem.price}</p>
        <span className="text-green-600 font-semibold text-center block">{foodItem.discount}% OFF</span>
        
       
        <div className="mt-8 text-center">
          <input 
            type="number" 
            min="1" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            className="border rounded px-2 py-1 w-20 text-center" 
          />
          <button 
            onClick={handleAddToCart} 
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded flex items-center">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>

        
        <form onSubmit={handleReviewSubmit} className="mt-8">
          <div className="flex flex-col mb-4">
            <label className="text-lg">Rating:</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar 
                  key={star} 
                  className={`cursor-pointer ${rating >= star ? 'text-red-500' : 'text-gray-300'}`} 
                  onClick={() => setRating(star)} 
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-lg">Review:</label>
            <textarea 
              value={review} 
              onChange={(e) => setReview(e.target.value)} 
              className="border rounded px-2 py-1" 
              rows="4"
            />
          </div>
          <button 
            type="submit" 
            className="bg-red-500 text-white px-4 py-2 rounded">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ViewDetails;
