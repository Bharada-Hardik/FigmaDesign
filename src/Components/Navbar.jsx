import React from 'react'
import Cart from './Cart'
import logoimg from '../assets/logo.jpg'

function Navbar() {
  return (
    <div className='flex items-center z-10 p-3 gap-10 justify-between sticky top-0 bg-gray-500 rounded-md'>
        <img src={logoimg} alt="" className='h-[72px] w-[72px] rounded-full' />
        <Cart/>
        
    </div>
  )
}

export default Navbar