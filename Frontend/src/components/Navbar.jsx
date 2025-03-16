import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Login from "./Authentication/Login";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in when the component loads and listen for updates
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

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

        {/* Show Login button only if NOT authenticated */}
        {!isAuthenticated && (
          <div>
            <a
              className="cursor-pointer hover:underline"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </a>
            <Login setIsAuthenticated={setIsAuthenticated} />
          </div>
        )}
      </ul>

      {/* Sidebar (Pass isAuthenticated) */}
      <Sidebar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </nav>
  );
};

export default Navbar;
