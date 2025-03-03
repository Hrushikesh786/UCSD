import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-10 border-t border-gray-800">
    <div className="flex flex-col md:flex-row justify-between items-center pt-8">
      <div>
        <h2 className="text-3xl font-bold">Your<span className="text-green-400">Finance</span></h2>
        <p className="text-sm max-w-xs">AI-driven financial insights for smarter decisions.</p>
      </div>
      <div className="flex space-x-8 text-sm">
        {["Home", "Dashboard", "Chatbot", "Advice", "Contact"].map((link) => (
          <a key={link} href="#" className="hover:text-white transition">{link}</a>
        ))}
      </div>
      <div className="text-sm text-center">
        <p>Follow us on:</p>
        <div className="flex space-x-6">
          {["twitter", "linkedin", "github"].map((platform) => (
            <a key={platform} href={`https://${platform}.com/yourfinance`} className="hover:text-green-400 transition">
              <i className={`fab fa-${platform} text-xl`}></i> <span> {platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="text-center text-sm text-gray-600 mt-8 border-t border-gray-800 pt-4">
      © {new Date().getFullYear()} Your<span className="text-green-400">Finance</span>. All rights reserved.
    </div>
  </footer>
  );
};

export default Footer;
