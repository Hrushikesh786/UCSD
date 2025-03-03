import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Advices from './components/Advices'
import Dashboard from './components/Dashboard'
import Chatbot from './components/Chatbot'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advices" element={<Advices />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </div>
  )
}

export default App
