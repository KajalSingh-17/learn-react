import React from 'react'
import logo from '../logo.jpeg'

const Navbar = () => {
  return (
    <div className='border h-22 m-2 flex items-center justify-between border-r-3 border-b-3'>
        <div className='logo'>
          <img className='h-20 w-40 object-cover' src={logo} alt="logo" />
        </div>
    
        <div className='flex space-x-8 pr-10 font-semibold text-xl font-serif' >
          <p>
            Home
          </p>
          <p>Link</p>
          <p>Contact Us</p>
          <p>Cart</p>
        </div>
       </div>
  )
}

export default Navbar