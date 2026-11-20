import React, { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listResto, setListResto] = useState([]);
  const [topRated, setTopRated] = useState(false);
  const [search,setSearch] = useState("");
 

  useEffect(() => {
    call();
    console.log("useffect render");
  }, []);

  const call = async () => {
    const response = await fetch(
      "https://indiarestros.com/api/v1/restaurants?city=mumbai&limit=20",
    );

        await new Promise(resolve => setTimeout(resolve, 1000));


    const data = await response.json();
    setListResto(data?.results);
    
    console.log(data.results);
  };

  const visibleList =  listResto
          .filter((element) => element.photo != null)
          .filter((element)=> element.name.toLowerCase().includes(search.toLowerCase().trim()))
        .filter((element) => !topRated || element.rating_external?.value >= 4.5)
  
  
  // shimmer ui logic

  return listResto.length === 0 ? <Shimmer/> : (
    <div>
       
       <div className="flex items-center mt-4 ">

        <div className="flex items-center ml-3">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="bg-gray-300 h-8 w-60 pl-2 outline-none" placeholder="Search for Restaurants"/>
       
       </div>

      <button
        onClick={() => setTopRated(t => !t)}
         style={{backgroundColor:topRated?"green":"gray"}}
        className=" ml-20 h-8 w-40 cursor-pointer bg-gray-200 " 
      >
        Top-rated Menu
      </button>
       </div>
      

      <div className="flex flex-wrap p-2">
        {visibleList.length === 0 ? 
        (<p className="mt-4 text-2xl font-bold">No restaurants found.</p>) :
          (visibleList.map((element) => (
            <div
              className="flex flex-col justify-center items-center space-y-2"
              key={element.id}
            >
              <Card val={element} />

              {/* toggle logic */}
              <button onClick={()=>window.open(element.url)}  
                className="bg-gray-300 h-8 flex justify-center cursor-pointer  items-center w-40"
              >
                Add to Cart
              </button>
             
            </div>
          )) )}
      </div>
    </div>
  );
};

export default Body;
