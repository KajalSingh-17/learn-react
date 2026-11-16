// updater-function = A function passed as an argument too setter function setState() usually ex. setState(y => y + 1)

// Allow safe updates based on prev states
// used with multiple state and synchronous functions 
// GOOD PRACTICE TO USE UPDATER FUNCTION



import React from 'react'
import { useState } from 'react'

const MyComponent = () => {
    const [count,setCount] = useState(0);
//    if we have to do this setCount(count+1) doing this three times wont update it to 3 
// react processes state functions in batches 
// using three csetCount with updater function helps them to actually increase it by three and not 1 unlike the old method setCount(count+1)


    const Increment = () =>{
           setCount(c => c+1)
    }

    const Decrement = () =>{
        setCount(c => c-1)
    }

    const Reset = () =>{
        setCount(0)
    }

  return (
    <div className='min-h-screen p-4'>
        <p className='text-xl font-semibold ml-20'>Count: {count}</p>
        <div className='flex space-x-3 mt-3'>
        <button onClick={Increment} className='cursor-pointer bg-yellow-200'>Increment</button>
        <button onClick={Decrement}  className='cursor-pointer bg-yellow-200'>Decrement</button>
        <button onClick={Reset} className='cursor-pointer bg-yellow-200'>Reset</button>
        </div>
      
    </div>
  )
}

export default MyComponent