import React, { useEffect, useState } from 'react'
import Filed from './Filed'
import { useSelector } from 'react-redux'
import fetchingImages from '../fetchingImages'

const Buying = ({showComoBuy}) => {
   
  const [totalPrice, setTotalPrice] = useState(0)
  const [Data, setData] = useState([])
  const [isCliked,setIsClicked]=useState(true)
  const count = useSelector((state) => state.listOfAddtocart.listOfAddtocart)

  useEffect(() => {
    fetchingImages()    
      .then((res) => setData(res))
      .catch((err) => console.error(err))
  }, [])

 
  useEffect(() => {
    if (Data.length && count.length) {
      let priceSum = 0



      count.forEach((itemId) => {
        const  matchedItem =Data.find((d) => d.id === itemId)
        if (matchedItem) {
          priceSum += matchedItem.price
        }
      })

      setTotalPrice(priceSum)
    }
  }, [Data, count]) 


  function CalculateTotalPrice(e) {
    setIsClicked(false)
    e.preventDefault()
    console.log('Buying items worth $' + totalPrice)
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-400 bg-white/20 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[3.6px] border border-white/30 flex items-center justify-center border-emerald-500">
      <div>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col border border-red-200 px-6 py-8 gap-2 bg-pink-800 w-[450px] rounded-md">
          <Filed lblfor={'name'} txttype={'text'}>Full Name :</Filed>
          <Filed lblfor={'phone'} txttype={'number'}>Phone :</Filed>
          <Filed lblfor={'email'} txttype={'email'}>Email Address :</Filed>
          <Filed lblfor={'city'} txttype={'text'}>City :</Filed>
          <Filed lblfor={'zip'} txttype={'number'}>ZIP :</Filed>
          <Filed lblfor={'country'} txttype={'text'}>Country :</Filed>
          <Filed lblfor={'promocode'} txttype={'text'}>Promo Code :</Filed>

          <div className="flex justify-end m-1">
            <h1 className="underline text-white">Total Price: ${totalPrice.toFixed(2)}</h1>
          </div>

          <div className="flex gap-1 items-center justify-center">
            <button className="my-2 py-2 w-1/2 bg-green-600 rounded-md" disabled={isCliked} onClick={CalculateTotalPrice}>Buy Now</button>
            <button className="my-2 py-2 w-1/3 bg-gray-500 rounded-md" onClick={showComoBuy}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Buying
