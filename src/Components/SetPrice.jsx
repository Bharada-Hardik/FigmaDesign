import React, { useState } from 'react'
import Button from './Button'
import Modelx from './Modelx'

const SetPrice = ({ handleClick, className, price, removeListCart }) => {
  const [count, setCount] = useState(1)

  // Function to handle increment and decrement actions
  function handleCountClick(type) {
    if (type === 'decrement' && count === 1) {
      // When the count reaches 1, decrementing will set it to 0 and remove the item
      removeListCart(className)
      setCount(0)
    } else if (count <= 0 && type === 'decrement') {
      // Prevent going below 0
      setCount(0)
    } else if (count >= 10 && type === 'increment') {
      // Prevent count from going above 10
      setCount(10)
    } else {
      // Normal increment or decrement
      type === 'decrement' ? setCount(prev => prev - 1) : setCount(prev => prev + 1)
    }
  }

  // Calculate the formatted price based on count
  const formattedPrice = (price * count).toFixed(2);

  return (
    <>
      <span>${formattedPrice}</span>
      <span> X {count}</span> &nbsp;
      <Button handleCountClick={handleCountClick} />
    </>
  )
}

export default SetPrice
