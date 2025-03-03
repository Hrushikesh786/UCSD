import React from 'react';
import image6 from '../assets/image6.png'; // Replace with your actual image

const Page3 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-16 md:px-32 py-16 bg-black text-white">
      
      {/* Left Side - Image shifted left */}
      <div className="w-full md:w-2/5 flex justify-start md:pr-12">
        <img
          src={image6}
          alt="Finance Illustration"
          className="w-[90%] rounded-xl shadow-xl"
        />
      </div>

      {/* Right Side - Text Section */}
      <div className="w-full md:w-3/5 space-y-8 mt-8 md:mt-0">
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-teal-400">
          Your Smart Finance Hub
        </h1>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Gain full control over your financial journey.  
          Analyze, optimize, and grow your wealth with intelligent insights.
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-teal-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-300">Dashboard Overview</h2>
            <p className="text-gray-400 text-lg">All your financial data in one place, designed for clarity and efficiency.</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-300">AI Chatbot</h2>
            <p className="text-gray-400 text-lg">Ask questions, get real-time insights, and make informed financial decisions.</p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-300">Smart Financial Advice</h2>
            <p className="text-gray-400 text-lg">Personalized recommendations to help you save, invest, and grow smarter.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page3;
