import React from 'react'

const Card = ({val}) => {
 
      const{name , category , price ,rating ,image,isVeg} = val;

   return (
    <div className='border w-60 h-80 ml-2 mt-10 flex flex-col '>

      <div className='h-80 w-60 mt-3 ml-5 '>
        <img src={image}  className="object-cover h-50 w-50"  alt="img" />
      </div>

      <div className='ml-4'>

        <div className='flex justify-between mb-2'>
          <p>{name}</p>
           
          <p className='mr-4'>{rating}⭐</p>
          
        </div>
        <p>{isVeg ? "Veg":"Non-veg" }</p>
      
      <div className='flex justify-between '>
       <p>{category}</p>
       <p className='mr-4'>{price}</p>
      </div>
      
      </div>
      
    </div>
  )
}

export default Card