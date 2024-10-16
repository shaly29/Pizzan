import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';

const ContactUs = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false); 
    }, 3000); 
  };

  return (
    <>
    
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 text-gray-700">
      <small className={`transition-opacity duration-300 ${isSent ? 'opacity-0' : 'opacity-100'}`}>
        Enter message (optional) and click button "Send"
      </small>

      <div className="relative">
      
        <article
          className={`letter relative w-96 bg-white shadow-md rounded-lg transition-transform duration-700 ${
            isSent ? 'transform scale-50 -translate-y-32' : ''
          }`}
        >
          <div className="side px-8 py-6 bg-gray-50 shadow-inner rounded-t-lg">
            <h1 className="text-2xl font-dancing-script">Contact Us</h1>
            <p>
              <textarea
                placeholder="Your message"
                className="w-full h-32 p-2 mt-4 bg-transparent border-b border-red-300 outline-none"
              ></textarea>
            </p>
          </div>
          <div className="side px-8 py-6 bg-gray-50 text-right rounded-b-lg shadow-inner">
            <p>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-2 bg-transparent border-b border-red-300 outline-none"
              />
            </p>
            <p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 mt-4 bg-transparent border-b border-red-300 outline-none"
              />
            </p>
            <p>
              <button
                id="sendLetter"
                onClick={handleSend}
                className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all"
              >
                Send
              </button>
            </p>
          </div>
        </article>

        
        <div
          className={`envelope front w-40 h-24 absolute top-4 transform origin-top transition-opacity duration-500 ${
            isSent ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute left-0 w-48 h-24 transform rotate-30 bg-red-300 shadow-md"></div>
          <div className="absolute right-0 w-48 h-24 transform -rotate-30 bg-red-300 shadow-md"></div>
        </div>

        <div
          className={`envelope back absolute top-0 w-40 h-40 transition-transform transform ${
            isSent ? 'opacity-100 translate-y-8' : 'opacity-0 -translate-y-16'
          }`}
        >
          <div className="w-40 h-40 bg-red-300 transform scale-y-75 rotate-45 rounded"></div>
        </div>

        {/* Success Message */}
        <p
          className={`result-message absolute transition-transform duration-500 transform ${
            isSent ? 'opacity-100 translate-y-32' : 'opacity-0 translate-y-40'
          }`}
        >
          Thank you for your message!
        </p>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default ContactUs;
