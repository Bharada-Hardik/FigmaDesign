

const Button = ({handleCountClick}) => {
  
  return (
   <>
    
   
    <button onClick={()=>{handleCountClick('decrement')}} className='border-none border-black rounded-full text-center w-[25px] h-[25px] bg-green-500'>-</button> 
     <button onClick={()=>{handleCountClick('increment')}} className='border-1 bg-green-500 rounded-full text-center w-[25px] h-[25px] '>+</button>
   
   </>
  )
}

export default Button;