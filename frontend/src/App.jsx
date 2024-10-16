// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AboutUs from './home/AboutUs';
import BestFoodsMenu from './foodmenu/BestFoodMenu';
import ReservationForm from './components/ReservationForm';
import Home from './home/Home';
import Signup from './components/Signup';
import Blog from './components/Blog';
import ContactUs from './home/ContactUs';
// import MenuDetails from './foodmenu/ViewDetails';
import ViewDetails from './foodmenu/ViewDetails';
import Navbar from './components/Navbar';
import Footer from './home/Footer';
import ConfirmationPage from './components/ConfirmationPage';
import Login from './components/Login';
import { useAuth } from "./context/AuthProvider";



function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <Navbar/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/menu" element={<BestFoodsMenu />} />
         <Route path="/reservation" element={<ReservationForm />} />
         <Route path="/blog" element={<Blog />} />
         {/* <Route path="/viewdetails" element={<MenuDetails/>} /> */}
         <Route path="/view-details/:id" element={<ViewDetails />} /> 
         
    
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={< Login/>} />
         <Route path="/menu/:id" element={<ViewDetails />}/>
         <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs/>} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/admin" element={<AdminPanel />} /> */}

        </Routes>
   
      <Footer/>
     
    </>
  );
}

export default App;
