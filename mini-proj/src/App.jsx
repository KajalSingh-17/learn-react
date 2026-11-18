import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

// navbar
// logo
// home , links , contact us

// body
// search bar
// cards :
//  image , name , catgeory,price,rating , veg

// footer
// links name and all

// "id": 102,
// "name": "Veg Fried Rice",
// "category": "Rice",
// "price": 160,
// "isVeg": true,
// "rating": 4.3,

const App = () => {
  return (
    <div>
      <Navbar/>
      
      <Body/>
    </div>
  );
};

export default App;
