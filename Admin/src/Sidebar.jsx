import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom';





function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={`bg-gray-800 text-white h-full p-5 ${openSidebarToggle ? "w-64" : "w-0"} transition-width duration-300`}>
        {/* Sidebar title */}
        <div className='flex justify-between items-center mb-8'>
            <div className='flex items-center'>
                <BsCart3 className='text-2xl'/> 
                <span className='text-xl ml-2'>SHOP</span>
            </div>
            <span className='text-2xl cursor-pointer ' onClick={OpenSidebar}>X</span>
        </div>

        {/* Sidebar list */}
        <ul className='space-y-4'>
            <li className='sidebar-list-item'>
                <a href="" className='flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md'>
                    <BsGrid1X2Fill className='text-xl'/> 
                    <span>Dashboard</span>
                </a>
            </li>

            <li className='sidebar-list-item'>
            <Link to="/menu" className='flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md'>
            <BsFillArchiveFill className='text-xl'/> 
            <span>Menu</span>
            </Link>
            </li>



            <li className='sidebar-list-item'>
                <a href="/" className='flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md'>
                    <BsFillGrid3X3GapFill className='text-xl'/> 
                    <span>Categories</span>
                </a>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/users" className='flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md'>
                <BsPeopleFill className='text-xl' />
                <span>User List</span>
            </Link>
            </li>

            <li className='sidebar-list-item'>
                <a href="/reservation" className='flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md'>
                    <BsListCheck className='text-xl'/> 
                    <span>Reservation</span>
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="" className='flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md'>
                    <BsMenuButtonWideFill className='text-xl'/> 
                    <span>Reports</span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md'>
                    <BsFillGearFill className='text-xl'/> 
                    <span>Setting</span>
                </a>
            </li> */}
        </ul>
    </aside>
  )
}

export default Sidebar
