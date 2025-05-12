import React from "react";
import Banner from '../assets/banner.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import AboutUs from "./AboutUs";
import SpecialOffer from "./SpecialOffer";
import PopularFoodItems from "../foodmenu/PopularFoodItesms";
import BestFoodMenu from "../foodmenu/BestFoodMenu";
import Blog from "../components/Blog";
import MeetOurChefs from "./Chef";
import Sponsors from "./Sponsors";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="bg-black bg-opacity-60">
          <div className="container mx-auto px-4 py-32 flex flex-col items-start text-left ">
            <h2 className="text-red-500 text-lg md:text-xl font-bold">
              Welcome to Pizzan
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-8 leading-tight">
              GET BEST <br /> QUALITY FOOD <br /> FROM US
            </h1>
            <Link
              to="/menu"
              className="bg-red-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-red-700 flex items-center"
            >
              EXPLORE MENU <AiOutlineArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <PopularFoodItems />
      <AboutUs />
      <SpecialOffer />
      <BestFoodMenu />
      <Blog />
      <MeetOurChefs />
      <Sponsors />
    </>
  );
}

export default Home;
