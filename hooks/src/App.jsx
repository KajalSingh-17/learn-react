import React from 'react'
// import Student from './Student.jsx'
// import Usestate from "./Usestate.jsx"
import UseEffect from "./UseEffect.jsx"
// React hook = Special function that allows functional components
//                         to use React features without writing class components 
//                         (useState, useEffect, useContext, useReducer, and more...)                

// useState() = A React hook that allows the creation of a stateful variable
//                       AND a setter function to update its value in the Virtual DOM.
//  

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white flex space-x-5 justify-center items-center'>
     
      {/* <Student name="Salman Khan" age="50" isStudent={true}/>
      
      <Student />
       <Usestate/> */}


       <UseEffect/>

    </div>
  )
}

export default App