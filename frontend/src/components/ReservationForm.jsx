import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'react-toastify/dist/ReactToastify.css';
import reservationImage from '../assets/pizza-3.jpg';

const ReservationForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [totalGuests, setTotalGuests] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use navigate to redirect

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:4001/api/reservations', {
        date,
        time,
        totalGuests,
        message,
      });

      // Show success toast message
      toast.success('Reservation made successfully!');

      // Reset form fields
      setDate('');
      setTime('');
      setTotalGuests('');
      setMessage('');

      // Navigate to the confirmation page with reservation details
      navigate('/confirmation', {
        state: {
          date,
          time,
          totalGuests,
          message,
          name: '',          // Initial empty fields for name
          contactInfo: '',   // Initial empty fields for contact info
        },
      });
    } catch (err) {
      setError('Failed to create reservation. Please try again.');
      console.error(err);
      toast.error('Failed to create reservation. Please try again.');
    }
  };

  return (
    <section className="relative bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Reservation Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">Make a Reservation</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Select Date"
                required
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Select Time"
                required
              />
            </div>
            <input
              type="number"
              value={totalGuests}
              onChange={(e) => setTotalGuests(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Total Guests"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Write Message"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition duration-300"
            >
              Make a Reservation
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        {/* Reservation Image */}
        <div className="hidden lg:block">
          <img
            src={reservationImage} // Use the imported image here
            alt="Reservation Food"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        closeOnClick 
        pauseOnHover 
        draggable 
        pauseOnFocusLoss 
      />
    </section>
  );
};

export default ReservationForm;
