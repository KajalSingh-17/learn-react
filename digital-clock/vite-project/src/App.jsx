import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const[time,setTime] = useState(new Date())
  
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date());
    },1000);

    // cleanup

    return()=>{
      clearInterval(intervalId)
    }
  },[])

  const formatTime = () =>{
    let hours = time.getHours()
    const minutes = time.getMinutes();
    const seconds = time.getSeconds()
    const meridiem = hours >= 12 ? "PM" : "AM" ;
    hours = hours % 12 || 12
     
    return `${zero(hours)}:${zero(minutes)}:${zero(seconds)} ${meridiem}`
     
    }

    function zero(number){
       return (number < 10 ? "0" : " ") + number;

    }

  return (
    <div className='bg-[url(./img.jpeg)] min-h-screen bg-no-repeat bg-cover flex justify-center items-center'>
      <div className='bg-white/20 backdrop-blur-md min-w-screen flex justify-center'>
        <p className='text-white font-bold text-4xl '>{formatTime()}</p>
      </div>
    </div>
  )
}

export default App