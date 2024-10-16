import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConfirmationPage = () => {
  // Use the location object to get passed state data
  const location = useLocation();
  const { date, time, totalGuests } = location.state || {};
  
  // State for customer details, initialized with empty values
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  // Function to handle form submission
  const handleConfirm = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to your backend API (adjust URL as needed)
      await fetch('http://localhost:4001/api/confirm-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          contactInfo,
          reservationDetails: {
            date,
            time,
            totalGuests,
          },
        }),
      });

      // Show a success toast message
      toast.success('Reservation confirmed successfully!');

      // Reset the form fields
      setName('');
      setContactInfo('');
      
      // Redirect to a success page or home page if needed
    } catch (error) {
      console.error('Error confirming reservation:', error);
      toast.error('Failed to confirm reservation. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto text-center py-12">
      <h2 className="text-3xl font-bold mb-6">Reservation Details</h2>
      
      <form onSubmit={handleConfirm} className="my-5 text-left inline-block bg-light-brown p-9 rounded-lg shadow-md border-2 border-red-500" style={{ width: '500px' }}>
        <div className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block mb-2"><strong>Name:</strong></label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
              required
            />
          </div>
          {/* Contact Information Input */}
          <div>
            <label className="block mb-2"><strong>Contact Information:</strong></label>
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Contact Information"
              required
            />
          </div>
          {/* Displaying Reservation Details */}
          <p><strong>Reservation Date:</strong> {date}</p>
          <p><strong>Reservation Time:</strong> {time}</p>
          <p><strong>Number of Guests:</strong> {totalGuests}</p>
        </div>

        {/* Button to confirm reservation */}
        <button 
          type="submit" 
          className="mt-4 bg-red-500 text-white py-3 px-6 rounded hover:bg-red-600 transition duration-300"
        >
          Confirm Reservation
        </button>
      </form>

      {/* Toast Container for notifications */}
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        closeOnClick 
        pauseOnHover 
        draggable 
        pauseOnFocusLoss 
      />
    </div>
  );
};

export default ConfirmationPage;
