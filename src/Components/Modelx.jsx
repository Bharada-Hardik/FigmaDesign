import React, { useState } from 'react'

function Modelx({isShow,handlingModel}) {
  console.log('gheeyu')
  return (
    <div>
      
      <div onClick={handlingModel} className={`h-[50px] w-[40px] bg-red-900 ${isShow ? 'block' : 'hidden'}`} >
      
        <h4>Hello</h4>

      </div>


    </div>
  )
}

export default Modelx