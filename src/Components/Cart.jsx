import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchingImages from '../fetchingImages'
import SetPrice from './SetPrice'
import { removeToTheCart } from '../ListOfAddToCartReducer'
import { motion } from 'motion/react'
import ModelForCard from './ModelForCard'
import Buying from './Buying'

const Cart = () => {
  const [showModel, setShowModel] = useState(false)
  const [data, setData] = useState([])
  const [showModlex, setShowModelx] = useState(false)
  const [isRemoveCard,setIsRemovedCard]=useState(false)
  const [id ,setId]=useState(-1);
  const [showBuyCompo,setShowBuyCompo]=useState(false)

  function showComoBuy(){
    setShowBuyCompo(prev=>!prev)
  }
  function handlerId(id){
    setId(id)
  }

  const lengthOfListOfCartToadd = useSelector((state) => state.listOfAddtocart.listOfAddtocart)
  const dispatch = useDispatch()

  function handleClick() {
    setShowModel(prev => !prev)
    console.log('cart is Pressed')
  }
  function handleModelX(){
  //  if(!isShow){
  //   setShowModelx(prev => !prev)
  //  }
  //  else{
  //   setShowModelx(isShow)
  //  }
  console.log(showModlex)
  setShowModelx(prev => !prev)
  }
  useEffect(() => {
    fetchingImages().then(res => setData(res)).catch(err => err)
  }, [])
  function handleRemoveCard(isRemove){
    // setIsRemovedCard(false)
      // console.log(isRemove)
      setIsRemovedCard(isRemove)
     
    
  }

   const removeListCart=(id)=> {
    const index = lengthOfListOfCartToadd.indexOf(Number(id));
    if (index) {
      setShowModelx((prev) => !prev)
    }
    
    if(isRemoveCard){
      dispatch(removeToTheCart(index))
    }

  }


  const Model = () => {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-400 bg-white/20 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[3.6px] border border-white/30 flex items-center justify-center">
        <div className="px-4 border bg-pink-800 w-[350px overflow-y-auto justify-between h-[300px] rounded-md py-3 flex flex-col ">
          <div className="flex justify-between h-[13%] mb-4">
            <h3>List Of Cart</h3>

            <motion.button whileTap={{ scale: 0.5 }} transition={{ type: 'spring', stiffness: 300 }} className='border p-1 rounded-full' onClick={() => setShowModel(false)}>X</motion.button>
          </div>
          <div className='h-auto overflow-y-auto scrollbar-hidden'>
            {
              !lengthOfListOfCartToadd.length && <p>NO AVAILABLE DATA.....</p>
            }
            <ul>
              {
                lengthOfListOfCartToadd.length &&
                data.map((item) => {

                  if (lengthOfListOfCartToadd.includes(item.id)) {
                    return <li key={item.id} className='flex justify-between leading-7 '>
                      <span>{item.title} </span>
                      {/* <span>${item.price}</span> */}
                      <div className='flex gap-1'>
                        <SetPrice removeListCart={removeListCart} id={id} handlerId={handlerId} handleModelX={handleModelX}  handleClick={handleClick} className={item.id} price={item.price} />


                      </div>


                    </li>
                  }

                }
                )
              }




            </ul>
          </div>

          <div  onClick={()=>setShowBuyCompo(true)} className='relative flex justify-center items-center bg-yellow-400 my-3 p-1 rounded-md text-rose-400 font-bold active:scale-95 active:transition-all duration-2000 ease-in-out'>
            <button className=''>Buy Now</button>
            
          </div>
          {
              showBuyCompo && <Buying showComoBuy={showComoBuy}/>
            }
        </div>


      </div>

    )
  }

  return (
    <div className='text-white'>
      <motion.button whileTap={{ rotateY: 10 }} transition={{ type: 'spring', stiffness: 300 }} onClick={() => setShowModel(handleClick)} className='cursor-pointer text-white active:text-blue-500 border '>Cart {lengthOfListOfCartToadd && lengthOfListOfCartToadd.length}</motion.button>
      {
        showModel && <Model />

      }
      {
        showModlex && <ModelForCard id={id} removeListCart={removeListCart} handleModelX={handleModelX} handleRemoveCard={handleRemoveCard}/>
      }

    </div>
  )
}

export default Cart 