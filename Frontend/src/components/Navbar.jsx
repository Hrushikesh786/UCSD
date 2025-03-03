import React from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full py-8 px-30 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        Your<span className="text-green-400">Finance</span>
      </div>

      {/* Center Navigation */}
      <ul className="flex space-x-20 text-lg">
        <li className="cursor-pointer hover:underline">Home</li>
        <li className="cursor-pointer hover:underline">Services</li>
        <li className="cursor-pointer hover:underline">About Us</li>
        <li className="cursor-pointer hover:underline">Contact Us</li>
      </ul>

      {/* Sidebar Trigger (Profile Icon) */}
      <Sidebar />
    </nav>
  );
};

export default Navbar;
