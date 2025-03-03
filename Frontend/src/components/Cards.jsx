import React from "react";

const Cards = () => {
  return (
    <div className="flex justify-center py-16 bg-black text-white">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
      {[{
        title: "TRACK YOUR FINANCES",
        color: "teal-300",
        text: "Gain control over your money by tracking income, expenses, and savings."
      }, {
        title: "SET DAILY & MONTHLY GOALS",
        color: "blue-300",
        text: "Create and track financial goals to develop better spending habits."
      }, {
        title: "AI-POWERED ADVICE",
        color: "yellow-300",
        text: "Get personalized AI-driven insights to optimize your finances."
      }].map((card) => (
        <div key={card.title} className="bg-gray-900 p-6 rounded-xl shadow-lg transform hover:scale-105 transition">
          <h2 className={`text-3xl font-bold text-${card.color} mb-4`}>{card.title}</h2>
          <p className="text-gray-300 text-lg">{card.text}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Cards;
