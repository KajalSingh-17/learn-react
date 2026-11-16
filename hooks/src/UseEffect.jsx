import React from 'react'
import { useState,useEffect } from 'react'

// useEffect is a hook some effect you want to do after this any of these : 

// 1. useEffect(() => {}) runs after every re-render
// 2. useEffect(() => {}, []) runs only on mount
// 1. useEffect(() => {}, [value]) runs only on mount + when value changes


    
    //1. this means whenevr the components render/changes this also changes 
    // useEffect(()=>{
    //     document.title = `Count:${count}`
    // })

    //2. this one runs only one time when component mounts means no change in count will be seeen on title as it changes for only once and therefore not valuable for a dynamically changing data like this . could be useful for a title thats constant (statistical data)

    // useEffect(()=>{
    //     document.title = `Count:${count}`
    // },[])

    // 3. this effect or function changes / renders everytime the count state changes 

    // useEffect(()=>{
    //     document.title = `Count:${count}`
    // },[count])

    // cleanup function i.e when the component unmounts (When a user navigates to a new page, closes a modal, or when conditional logic toggles off (e.g., switching showProfile to false).

    // • What does React do? It destroys the component instance, clears its internal state completely, and scrubs its HTML off the screen.

    // cleanups are only necessary for actions that may keep going after compoent is not rendering like global api, setTimer , accessing external or browser thinggy 


    
    // If the guest changes the color of the pillow on the couch (modifies local UI), the room looks different while they are there, and nobody cares when they leave.
// But if the guest turns on the kitchen sink faucet (setInterval) or subscribes to a daily newspaper (window.addEventListener), that water will keep running and those newspapers will keep piling up at the front door long after the guest has packed up and left the house.
  


 const UseEffect = () => {

      const[count,setCount] = useState(0);

    
    const inc = () =>{
        setCount(c => c+1)
    }
    
    useEffect(()=>{
        document.title = `Count:${count}`
    })

 return (
    <div>
        <p>Count:{count}</p>
        <button onClick = {inc}
         className='bg-amber-600'>Click</button>
    </div>

  )
 }
 


export default UseEffect