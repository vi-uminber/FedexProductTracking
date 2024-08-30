import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-gray-800 text-white py-4 px-6'>
        <Link to="/" className='text-2xl font-semibold'>Zipkart</Link>
    </header>
  )
}

export default Navbar