import React from 'react'

const Card = ({val}) => {
 
      const{name , category , cost_for_two ,rating_external ,photo} = val;

   return (
    <div className='border w-60 h-80 ml-2 mt-10 flex flex-col '>

      <div className='h-50 w-50 mt-3 ml-5 '>
        <img src={photo}  className="object-cover h-50 w-50"  alt="img" />
      </div>

      <div className='ml-4'>

        <div className='flex justify-between mb-2'>
          <p>{name}</p>
           
          <p className='mr-4'>{rating_external.value}⭐</p>
          
        </div>
      
      <div className='flex justify-between '>
       <p>{category}</p>
       <p className='mr-4'>{cost_for_two / 2}₹</p>
      </div>
      
      </div>
      
    </div>
  )
}

export default Card