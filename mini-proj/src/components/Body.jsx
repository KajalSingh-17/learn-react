import React from 'react'
import cardObj from '../utils/restolist'
import Card from './Card'
import { useState } from 'react'

const Body = () => {
    
    const[filter,setFilter] = useState(cardObj);

    const toFilter = () =>{

        const filtered = cardObj.filter((element)=>
           element.rating >= 4.5
        )

        setFilter(filtered)
    }

  return (
    <div>
        <button onClick={()=> toFilter()} className='bg-gray-200 ml-4 mt-3 h-8 w-40 cursor-pointer'>Top-rated Menu</button>
          <div className="flex">
                {filter.map((element, index) => (
                  <div
                    className="flex flex-col justify-center items-center space-y-2"
                    key={element.id}
                  >
                    <Card val={element} />
                    <button className="bg-gray-400 h-8 flex justify-center  items-center w-40">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
    </div>
  )
}

export default Body