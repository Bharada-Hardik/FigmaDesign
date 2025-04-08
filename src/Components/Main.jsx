import { useQuery } from '@tanstack/react-query'
import React from 'react'
import fetchingImages from '../fetchingImages'
import Card from './Card'



function Main() {



  return (
    <div className='flex items-center mt-4'>
       <Card/>
    </div>
  )
}

export default Main