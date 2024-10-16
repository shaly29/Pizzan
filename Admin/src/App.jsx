// App.js
import React, { useState } from 'react';
import Home from './Home';
import Header from './Header';
import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router-dom'
import UserInfo from './components/UserInfo';
import MenuForm from './components/MenuForm';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <Header OpenSidebar={OpenSidebar} />
      <div className="flex">
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <div className="flex-1">
        <Routes>
        <Route path='/users' element={<UserInfo />} />
        <Route path='/menu' element={<MenuForm />} />

        </Routes>
          {/* <Home /> */}
         
        </div>
      </div>
    </>
  );
}

export default App;
