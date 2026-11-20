// ALL about how to update array using setter/state function 

// map syntax without return keyword :  xyz.map(()=> )
// map syntax in jsx with return keyword : 
// xyz.map(()={return codee  })

// map syntax in jsx : written inside a curly wrapper {}


import React, { useState } from 'react'

const Array = () => {
  const [fruit,setFruit] = useState(["Apple", "Mango", "Banana"])
 
   const addFruit = () => {

    const newFruit = document.getElementById("input").value
    document.getElementById("input").value = ""

    setFruit(f => ([...f,newFruit]))
   }

    // the syntax might be different for .filter here because its pure js and .map was written in jsx
   const removeFruit = (val) =>{
    setFruit(fruit.filter((_,index)=> index != val))
    // and _ here means its empty we dont need elements
   } 
   
  return (
    <div className='min-h-scren m-7'>
      <p className='text-2xl font-bold mb-3'>Fruit Cart</p>
     
       {/* yea yea arrow function would have been array.map(() => {})  but that would need a keyword return inside 
       
       hence we used normal braces (() => ())   */}

      <ul className='list-disc list-inside'>
        {fruit.map((f,index)=>(    

            <li key={index} className='cursor-pointer' onClick={()=>removeFruit(index)}> {f} </li>
        ))}
      </ul>

      <input type="text" className='border mt-3 outline-none pl-2' placeholder='Enter Fruit name' id="input"/>

       <button className='border ml-3 w-15 cursor-pointer bg-gray-400' onClick={addFruit}>Enter</button>
    </div>
  )
}

export default Array
