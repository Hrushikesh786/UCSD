import React from 'react'
import image3 from "../assets/image3.avif"; // Import your image

const Page2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen py-8  px-16 bg-black text-white">
      {/* Left Side - Text with Modern Styling */}
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
      <div className="w-full md:w-1/2 flex justify-center ">
        <img
          src={image3} // Replace with your actual image
          alt="Finance Illustration"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}

export default Page2
