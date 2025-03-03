import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'

const Page1 = () => {
  return (
    <div>
    {/* <Navbar /> */}
    <h1 className="text-6xl text-gray-200 text-center mt-20 font-extrabold">Manage Your Finance with Your<span className="text-green-400">Finance</span></h1>
    <Cards />
  </div>
  )
}

export default Page1
