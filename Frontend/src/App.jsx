import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Advices from './components/Advices'
import Dashboard from './components/Dashboard'
import Chatbot from './components/Chatbot'
import Login from './components/Authentication/Login'
import SignUp from './components/Authentication/SignUp'
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/home" element={<Home />} />
        <Route path="/advices" element={<Advices />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </div>
  )
}

export default App
