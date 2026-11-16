import React from 'react'
import { useState } from 'react'
const ColorPicker = () => {
 const [color,setColor] = useState("#FFFFFF")
  return (
    <div className='min-h-screen p-2 flex items-center flex-col space-y-40 '>
        <h1 className='text-2xl mt-4 font-semibold'>Color Picker</h1>
        <div className='mt-3 flex flex-col items-center space-y-8'>
            {/* using style<> as i was unable to set dynamic state as bg-color  */}
<p className='h-50 w-50 flex justify-center items-center transition-colors' style={{backgroundColor : color}}>{color} </p>
<div className='flex justify-center items-center space-x-2 flex-col'>
<p>select a color :</p>
<input className='h-10 w-15   outline-none  cursor-pointer' type="color" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
</div>

        </div>
       
    </div>
  )
}

export default ColorPicker