import React from 'react'

import logo from './Pork Grill Logo.jpeg'
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

const Navbar = () =>{
  return(
    <>
   <div className='border h-22 m-2 flex items-center justify-between border-r-3 border-b-3'>
    <div className='logo'>
      <img className='h-20 w-40 object-cover' src={logo} alt="logo" />
    </div>

    <div className='flex space-x-8 pr-10 font-semibold text-xl font-serif' >
      <p>
        Home
      </p>
      <p>Link</p>
      <p>Contact Us</p>
      <p>Cart</p>
    </div>
   </div>
    </>
  )
}

const Card = ({val}) =>{

  const{name , category , price ,rating ,image,isVeg} = val;

  return(
    <>
    <div className='border w-60 h-80 ml-2 mt-10 flex flex-col '>

      <div className='h-80 w-60 mt-3 ml-5 '>
        <img src={image}  className="object-cover h-50 w-50"  alt="img" />
      </div>

      <div className='ml-4'>

        <div className='flex justify-between mb-2'>
          <p>{name}</p>
           
          <p className='mr-4'>{rating}⭐</p>
          
        </div>
        <p>{isVeg ? "Veg":"Non-veg" }</p>
      
      <div className='flex justify-between '>
       <p>{category}</p>
       <p className='mr-4'>{price}</p>
      </div>
      
      </div>
      
    </div>
    </>
  )
}

const cardObj = [
  {
        "id": 401,
        "name": "Veg Dum Biryani",
        "category": "Biryani",
        "price": 219,
        "isVeg": true,
        "rating": 4.4,
        "image": "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": 402,
        "name": "Chicken Biryani",
        "category": "Biryani",
        "price": 279,
        "isVeg": false,
        "rating": 4.6,
        "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": 403,
        "name": "Paneer Tikka",
        "category": "Starters",
        "price": 239,
        "isVeg": true,
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": 404,
        "name": "Gulab Jamun",
        "category": "Desserts",
        "price": 89,
        "isVeg": true,
        "rating": 4.3,
        "image": "https://images.unsplash.com/photo-1666190092159-4c2a8f2e7f3b?auto=format&fit=crop&w=600&q=80"
      }]

const App = () => {
  return (
    <div>
      <Navbar>

      </Navbar>

      <div className='flex'>
        {
        cardObj.map((element,index)=>(
          <div className='flex flex-col justify-center items-center space-y-2' key={element.id}>
            <Card  val={element}/>
            <button className='bg-gray-400 h-8 flex justify-center  items-center w-40'>Add to Cart</button>
            </div>
             
             
        ))
      }

      </div>
      
     

    </div>
  )
}

export default App