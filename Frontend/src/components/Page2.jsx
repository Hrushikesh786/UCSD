import React, { useState } from "react";
import image3 from "../assets/image3.avif"; // Import your image
import Chatbot from "./Chatbot"; // Import the chatbot component

const Page2 = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle chatbot modal

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-screen py-8 px-16 bg-black text-white">
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-teal-400">
          Smart Financial Management
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-300">
          AI-powered insights for a secure future.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Automate budgeting, track expenses, and optimize investments  
          with intelligent tools that adapt to your financial habits.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image3}
          alt="Finance Illustration"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 bg-teal-400 p-3 rounded-full shadow-lg hover:bg-teal-500 transition duration-300"
      >
        <img
          src="/chatbot-icon.png" // Replace with actual chatbot icon path
          alt="Chatbot"
          className="w-10 h-10"
        />
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-0 m-0 rounded-xl w-80 shadow-lg relative overflow-hidden">
            {/* Chatbot Component with Close Function Passed as Prop */}
            <Chatbot onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page2;
