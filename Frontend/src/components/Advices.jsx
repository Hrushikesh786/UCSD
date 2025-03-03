import React from "react";
import Navbar from "./Navbar";

const advices = [
  {
    title: "Track Your Expenses",
    text: "Monitor where your money goes to identify spending patterns and optimize savings.",
  },
  {
    title: "Set Financial Goals",
    text: "Define short-term and long-term financial goals to stay on track and build wealth.",
  },
  {
    title: "Invest Smartly",
    text: "Diversify your investments and research before making financial commitments.",
  },
  {
    title: "Create an Emergency Fund",
    text: "Save at least 3-6 months’ worth of expenses to handle unexpected situations.",
  },
  {
    title: "Use AI-powered Insights",
    text: "Leverage AI-driven financial tools to optimize spending and investment strategies.",
  },
];

const Advices = () => {
  return (
 <div className="bg-black px-16">
    <Navbar className=""></Navbar>
    <div className="min-h-screen text-white py-16 px-4">
        
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-teal-300 mb-6">
          Smart Financial Advice
        </h1>
        <p className="text-lg text-gray-300 mb-12">
          Personalized recommendations to help you save, invest, and grow smarter.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {advices.map((advice, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300"
          >
            <h2 className="text-2xl font-semibold text-yellow-300 mb-3">
              {advice.title}
            </h2>
            <p className="text-gray-300">{advice.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Advices;
