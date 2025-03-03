import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Profile Icon (Click to Open Sidebar) */}
      <div
        className="w-12 h-12 bg-gray-300 rounded-full cursor-pointer"
        onClick={() => setIsOpen(true)}
      ></div>

      {/* Dark Overlay (Click to Close) */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50 visible" : "opacity-0 invisible"} z-40`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-6 flex flex-col items-center">
          {/* Profile Section */}
          <div className="w-24 h-24 bg-gray-400 rounded-full mb-4"></div>
          <h2 className="text-xl font-semibold">John Doe</h2>

          {/* Navigation Links */}
          <ul className="mt-6 w-full text-center space-y-4">
            <li className="cursor-pointer p-4 hover:bg-gray-700 rounded-lg transition">Dashboard</li>
            <li className="cursor-pointer p-4 hover:bg-gray-700 rounded-lg transition">Chatbot</li>
            <li className="cursor-pointer p-4 hover:bg-gray-700 rounded-lg transition">Advices</li>
            <li className="cursor-pointer p-4 text-red-400 hover:bg-red-800 rounded-lg transition">Logout</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
