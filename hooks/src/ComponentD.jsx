import React from 'react'
import { useContext } from 'react'
import { UserContext } from './ComponentA'


const ComponentD = () => {

    const user = useContext(UserContext);

  return (
    <div>ComponentD
       <p>Bye {user}</p>
    </div>
  )
}

export default ComponentD