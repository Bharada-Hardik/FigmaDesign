import React, { useEffect, useState } from 'react'
import Button from './Button'
import Modelx from './Modelx'
import { useRef } from 'react'
import RemoveButton from './RemoveButton'

const SetPrice = ({ handleClick,id,handlerId,handleModelX, className, price, removeListCart }) => {
  const [count, setCount] = useState(1)
  const [showRemoveBtn,setRemoveBtn]=useState(false)
  
  function handleCountClick(type) {

    if(type==='decrement' && count === 1){
      setRemoveBtn(true)
      handlerId(className)
    }

    if (type === 'decrement') {
      if (count > 1) {
        setCount(prev => prev - 1);
      } else if (count === 1) {
        console.log('Count is 1, setting to 0...');
        setCount(0);
      } else {
        console.log('Count is already 0');
      }
    }
    
    if (type === 'increment') {
      if (count < 10) {
        setCount(prev => prev + 1);
      } else {
        console.log('Max count reached (10)');
      }
    }
  }
  
    useEffect(()=>{
     
    },[id])



  // function handleCountClick(type) {
   
  //   console.log(con)
  // }


  const formattedPrice = (price * count).toFixed(2);

  return (
    <>
      <span>${formattedPrice}</span>
      <span> X {count}</span> &nbsp;
     {
      showRemoveBtn && <RemoveButton handleModelX={handleModelX} className={className} removeListCart={removeListCart}/>
     }
     {
      !showRemoveBtn &&  <Button handleCountClick={handleCountClick} />
    
     }
      
    </>
  )
}

export default SetPrice
