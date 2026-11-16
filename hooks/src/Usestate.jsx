import React from 'react'
import { useState } from 'react'

const Usestate = () => {
  const [name,setName] = useState("")
  const[age,setAge] = useState(0);
  const[student,setStudent]=useState(false)


  const click =(val)=>{
    if(!name){
      setName(val)
    }else{
      setName("");
    }
  }
   
  const increase=()=>{
    setAge(age + 1)
  }
  const decrease =()=>{
    setAge(age - 1)
  }

  const setstatus = () =>{
    setStudent(!student)
  }
  return (
    
    <div className='bg-gray-600 w-50 '>
    
        <p>Name:{name}</p>
        <button onClick={()=>click("kajal")}

        className='bg-yellow-200 text-black'>Click Me!</button>

        <p className='mt-4'>Age:{age}</p>
        <button onClick={increase}  className='bg-yellow-200 text-black ' >Increase Age</button>
        <button onClick={decrease} className='bg-yellow-200 text-black ml-4 mt-4'>Decrease Age</button>

        <p>Student : {student?"YES":"NO"}</p>
         <button onClick={setstatus} className='bg-yellow-200 text-black '>toggle status</button>
    </div>
  )
}

export default Usestate