import React, { useState, useRef, useEffect } from "react";

const Chatbot = ({ onClose }) => {
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
    if (lowerInput.includes("save money")) return "You can check our advices section.";
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
    <div className="fixed bottom-20 right-10 bg-gray-900 text-white rounded-xl shadow-lg w-[300px] h-[350px] flex flex-col border border-gray-700 overflow-hidden">
      
      {/* Chatbot Header */}
      <div className="flex items-center justify-between bg-teal-500 p-3 rounded-t-xl">
        <h1 className="text-lg font-semibold">Chatbot</h1>
        <button 
          onClick={onClose} 
          className="text-white text-lg font-bold focus:outline-none"
        >
          ✖
        </button>
      </div>

      {/* Chatbox Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`p-2 rounded-lg max-w-[80%] ${
                msg.sender === "user" ? "bg-teal-500 text-white" : "bg-gray-700 text-gray-300"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Field */}
      <div className="flex border-t border-gray-700">
        <input
          type="text"
          className="flex-1 p-2 bg-gray-800 text-white outline-none rounded-bl-xl"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-teal-500 px-4 text-white rounded-br-xl hover:bg-teal-600 transition"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
