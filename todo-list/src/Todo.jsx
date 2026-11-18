import React from 'react'
import { useState } from 'react'

const Todo = () => {

    const [tasks,setTasks] = useState(["get up" , "finish dsa", "exercise"])

    const [newTask,setnewTask] = useState("")

    const addTask = () =>{
       if(newTask.trim() !== ""){
        setTasks(t => ([...t,newTask]))
        setnewTask("")
       }
    }

    const deleteTask = (val) => { 
        setTasks(tasks.filter((_,i)=> i != val))
    }

    const moveUp = (index) => {
          if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks)
          }
    }

    const moveDown = (index) => {
        if(index < tasks.length - 1){
            // In JavaScript, if you start a line with a bracket [ right after a statement without a semicolon ;, JavaScript gets confused. It thinks you are trying to read a property from the line above it.
          const updatedTasks = [...tasks];
          [updatedTasks[index],updatedTasks[index + 1]]= [updatedTasks[index+1],updatedTasks[index]]
           
          setTasks(updatedTasks)
        }
    }
     
  return (
    <div className='min-h-screen flex flex-col items-center  bg-black text-white'>
        <p className='text-2xl font-bold mt-3'>To-Do-List</p>

        <div className='mt-20'>

            <input type="text" placeholder='Enter Your Task' className='border outline-none h-10 w-100 pl-2' value={newTask} onChange={(e) => setnewTask(e.target.value)} />

            <button className='bg-green-300 text-black h-10 ml-2  w-20  cursor-pointer' onClick={addTask}>Add task</button>

        </div>

        <div className='mt-15 '>
           <ol >
            {tasks.map((task,index)=>(
                <li key={index} className='w-100 mt-3 h-10 flex justify-center items-center'>

                <span className='w-100 h-10 flex justify-center items-center border-r-2 border-b-2 bg-pink-300 '>{task}</span> 

                 <button onClick={()=>deleteTask(index)} className='ml-3 h-10 w-20 bg-red-600 cursor-pointer'>
                    Delete
                 </button>

                 <button className='ml-3 h-10 w-10 bg-blue-300 cursor-pointer' onClick={()=>moveUp(index)}>
                    ⬆
                 </button>

                  <button className='ml-3 h-10 w-10 bg-blue-300 cursor-pointer' onClick={()=>moveDown(index)}>
                    ⬇️
                 </button>

                </li>
            ))}
            
           </ol>


        </div>
       

        </div>
  )
}

export default Todo