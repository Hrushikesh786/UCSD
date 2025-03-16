import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Sidebar from "./components/Sidebar"; // Import Sidebar
import Advices from "./components/Advices";
import Dashboard from "./components/Dashboard";
import Chatbot from "./components/Chatbot";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:3500/user/auth", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <div>
      <Toaster position="top-center" />
      {/* <Sidebar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} /> Pass props to Sidebar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/advices" element={<Advices />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </div>
  );
};

export default App;
