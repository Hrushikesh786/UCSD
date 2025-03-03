import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Advices from './components/Advices'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advices" element={<Advices />} />
      </Routes>
    </div>
  )
}

export default App
