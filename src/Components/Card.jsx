import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import fetchingImages from '../fetchingImages'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../ListOfAddToCartReducer'
import {  motion, useScroll, useTransform } from 'motion/react'



const Card = () => {

    const scrollY=useScroll()
    const [isPressed,setIsPressed]=useState(false)
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['images'],
        queryFn: fetchingImages,
        staleTime: 10000,
        cacheTime: 5 * 60 * 1000

    })
    const count = useSelector((state) => state.listOfAddtocart.listOfAddtocart)
    const dispatch = useDispatch()

    // console.log(data, isPending, isError)
    // const opacity=useTransform()


    return (
        <div className='flex flex-wrap gap-4 justify-center'>
            {data &&
                data.map((item) => {
                    return (
                        <div key={item.id} className='p-2 border border-blue-200 items-center justify-center rounded-lg w-[250px] bg-gray-600 flex flex-col gap-1'>
                            <div className='flex items-center '>
                                <motion.img whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.95 }} src={`src/assets/${item.image}`} alt="w" className='w-[200px] object-cover rounded-lg' />
                            </div>
                            <div className='flex flex-col gap-2 flex-wrap p-3'>
                                <h2 className='text-md'>{item.title}</h2>
                                <h3 className='text-sm'>Price : ${item.price}</h3>
                                <h4 className='text-xs h-auto flex flex-wrap'>{item.description}</h4>
                                
                                    <motion.button  whileHover={isPressed? {scale:1.1} : {}}
                                        whileTap={{ scale: 0.95 }} onClick={(event) => dispatch(addToCart(Number(item.id)))} disabled={count.includes(Number(item.id))} id={item.id} className='text-sm mt-2 px-4 bg-orange-400 text-white py-1 font-bold rounded-md disabled:bg-yellow-700'>{
                                            count.includes(Number(item.id)) ? 'Added to Cart' : 'ADD TO CART'}</motion.button>

                                
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card