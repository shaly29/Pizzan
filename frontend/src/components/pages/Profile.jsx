// import React from 'react';
// import { useAuth } from '../../context/AuthProvider';

// function Profile() {
//   const [authUser] = useAuth();

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-3xl font-bold">Welcome, {authUser.name}</h1>
//       <p className="mt-4">Here you can view and edit your profile information.</p>
//       {/* Additional profile details and actions */}
//     </div>
//   );
// }

// export default Profile;

import React, { useState } from "react";
import Settings from "../../profile/Setting";
import Orders from "../../profile/OrderHistory";
import Favorites from "../../profile/Favourite";

import Navbar from "../Navbar";

import Overview from "../../profile/Overview";


function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "orders":
        return <Orders />;
      case "favorites":
        return <Favorites />;
      case "settings":
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 mt-20">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 mb-4 md:mb-0">
            <div className="bg-base-100 p-4 rounded-box shadow-md text-center">
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Profile"
                  className="rounded-full w-24 h-24 object-cover"
                />
              </div>
              {/* User Name */}
              <h2 className="text-xl font-semibold mb-6">User Name</h2>

              {/* Sidebar Links */}
              <ul className="menu bg-base-100 p-4 rounded-box shadow-md">
                <li>
                  <a
                    href="#"
                    className={activeTab === "overview" ? "active" : ""}
                    onClick={() => setActiveTab("overview")}
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={activeTab === "orders" ? "active" : ""}
                    onClick={() => setActiveTab("orders")}
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={activeTab === "favorites" ? "active" : ""}
                    onClick={() => setActiveTab("favorites")}
                  >
                    Favorites
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={activeTab === "settings" ? "active" : ""}
                    onClick={() => setActiveTab("settings")}
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-md">
            {renderTabContent()}
          </main>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
