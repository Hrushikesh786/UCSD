import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you with your finances today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Basic AI-like responses
  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes("balance")) return "Your current balance is $12,500.";
    if (lowerInput.includes("income")) return "Your monthly income is $3,200.";
    if (lowerInput.includes("expense")) return "Your monthly expenses are $2,400.";
    if (lowerInput.includes("save money")) return "Your can check our advices section";
    return "I'm here to help! Try asking about 'balance', 'income', or 'expenses'.";
  };

  // Handle sending messages
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: getBotResponse(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      

      {/* Chatbox Container */}
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-[500px] overflow-y-auto">
      <h1 className="text-3xl font-bold text-center text-teal-300 mb-6">AI Chatbot</h1>
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "user" ? "bg-teal-500 text-white" : "bg-gray-700 text-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Field */}
      <div className="w-full max-w-2xl flex mt-4">
        <input
          type="text"
          className="flex-1 p-3 bg-gray-700 text-white rounded-l-lg outline-none"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-teal-500 px-5 text-white rounded-r-lg hover:bg-teal-600 transition"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
