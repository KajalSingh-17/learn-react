import React, { useEffect } from 'react'
// import Student from './Student.jsx'
// import Usestate from "./Usestate.jsx"
import UseEffect from "./UseEffect.jsx"
import { useRef } from 'react'
import ComponentA from './ComponentA.jsx'
// React hook = Special function that allows functional components
//                         to use React features without writing class components 
//                         (useState, useEffect, useContext, useReducer, and more...)                

// useState() = A React hook that allows the creation of a stateful variable
//                       AND a setter function to update its value in the Virtual DOM.
//  

const App = () => {
   const val = useRef(0);
//  useRef returns a ref object with a single current property initially set to the initial value you provided.

  useEffect(()=>{
    console.log("rendered")
  })
   
   const handleClick = () =>{
    val.current = val.current + 1; 
    console.log(val.current)
   }
  return (
    <div className='min-h-screen bg-black text-white flex space-x-5 justify-center items-center'>
     
      {/* <Student name="Salman Khan" age="50" isStudent={true}/>
      
      <Student />
       <Usestate/> */}


       {/* <UseEffect/> */}
    
       <button className='bg-yellow-800 cursor-pointer' onClick={handleClick}>
        click me
       </button>
     
       <ComponentA/>

    </div>
  )
}

export default App