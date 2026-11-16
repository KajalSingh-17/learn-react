// -how spread operator works and how to update a object inside a state

// ...obj is spread operator inorder to update a object.something / object.

//inorder to change only a particular keyvalue insidie the object i.e object.something with also keeping the other prev values alive we use spread operator 

// ex.

import React from 'react'
import { useState } from 'react'
const Object = () => {
    const [car,setCar] = useState({year:2024,
                                   comp:"xyz", 
                                   model:"xyz" })

    
    
                                   
    const carComp = (e)=>{
        
        // c here is updater function whihc is a safe way to update state 
        // we are saying taking prev value of objects in that only update comp:input 

        // ...c looks like this
        // {year:2024, comp:bmw , model: thar, comp:honda}
        // whatever comes last is the only update considered inthis case its honda 

        setCar(c => ({...c,comp:e.target.value}))
    }

      const carModel = (e)=>{
        setCar(c => ({...c,model:e.target.value}))
    }

  return (
    <div>
      <p>Your Fav car is : {car.year} {car.comp} {car.model}</p>

      <input type="text" value={car.year} onChange={ (e) => {setCar ( c =>({...c,year:e.target.value}) ) } } className='border m-4 outline-none'/>

       <input type="text" value={car.comp} onChange={carComp} className='border m-4 outline-none'/>

        <input type="text" value={car.model} onChange={carModel} className='border m-4 outline-none'/>
        
    </div>
  )
}

export default Object