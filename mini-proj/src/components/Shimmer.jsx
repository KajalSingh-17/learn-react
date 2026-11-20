import React from "react";

const Shimmer = () => {
  const shimObj = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <>
      <div className="flex items-center mt-4 ">
        <div className="flex items-center ml-3">
          <div className="h-8 w-60 bg-gray-200"></div>
          <div className="ml-2 bg-gray-200 h-8 w-15 "></div>
        </div>

        <div className=" ml-20 h-8 w-40  bg-gray-200 "> </div>
      </div>

      <div className="flex flex-wrap p-2">
        {shimObj.map((element) => (
          <div
            key={element}
            className="flex flex-col justify-center items-center space-y-2"
          >
            <div className="border w-60 h-80 ml-2 bg-gray-200 mt-10 flex flex-col ">
              <div className="h-50 w-50 mt-3 ml-5 bg-gray-300"></div>
            </div>

            <button className="bg-gray-200 h-8 flex justify-center cursor-pointer  items-center w-40"></button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
