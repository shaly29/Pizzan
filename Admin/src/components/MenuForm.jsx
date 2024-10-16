import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Create a preview of the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null); // Clear preview if no file is selected
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Form data to send to the backend
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:4001/api/v1/menu/new', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Show success toast message
      toast.success('Menu item added successfully!');

      // Reset form fields
      setName('');
      setDescription('');
      setPrice('');
      setImage(null);
      setImagePreview(null); // Clear the image preview
    } catch (err) {
      setError('Failed to add menu item. Please try again.');
      console.error(err);
      toast.error('Failed to add menu item. Please try again.');
    }
  };

  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-md ">
      <h2 className="text-3xl font-bold mb-6">Add Menu Item</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter menu item name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter menu item description"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter menu item price"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Image Preview Section */}
        {imagePreview && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Image Preview:</h3>
            <img src={imagePreview} alt="Preview" className="mt-2 border rounded w-full h-auto" />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition duration-300"
        >
          Add Menu Item
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

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

export default MenuForm;
