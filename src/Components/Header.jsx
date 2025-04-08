import React from 'react'
import Navbar from './Navbar'
import Main from './Main'


function Header() {
  return (
    <div className='w-screen h-screen bg-gray-800 overflow-x-hidden px-12     '>
  
       <Navbar/>
       
        <Main/>
        
    </div>
  )
}

export default Header