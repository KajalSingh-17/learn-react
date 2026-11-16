import React from 'react'
import PropTypes from "prop-types"

const Student = ({name = "Guest" , age = 0, isStudent = false}) => {
  return (
    <div>
        <p>name : {name}</p>
        <p>age : {age}</p>
        <p>student : {isStudent ? "YES" : "NO"}</p>
    </div>
  )
}

Student.propTypes ={
 name:PropTypes.string,
 age:PropTypes.number,
 isStudent:PropTypes.bool
}



export default Student