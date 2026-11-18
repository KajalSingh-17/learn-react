// useContext : helps to transfer data to multiple levels of component instead of passing it to each level. irrespective of parent child relationship (prop drilling)

// now to send the data to component D from A w have to first send it to B then C then D 
// with useContext we can drectly send data to A->D

//PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//           <Child/>
//  //   < / MyContext.Provider>


//CONSUMER COMPONENTS
// 1. import React,{useContext} from 'react'
// 2. import {MyContext} from './ComponentA'
// const value = useContext(MyContext)

import React from 'react'
import ComponentB from './ComponentB'
import { createContext } from 'react';

export const UserContext = createContext();

const ComponentA = () => {
    const user = "kajal";
  return (
    <div >
        Component A
        <p>hey {user}</p>
        <UserContext.Provider value={user}>
 <ComponentB />
        </UserContext.Provider>

        
    </div>
  )
}

export default ComponentA