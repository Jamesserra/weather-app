import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
    return (
        <div className="relative flex sm:w-1/3 flex-wrap items-center">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="border-0 px-3 py-3 placeholder-blueGray-300 relative bg-white rounded-full text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10" 
                />
                <span className="absolute text-center w-8 pl-3 py-3">
                     <div className="Search"><SearchIcon/></div>
                </span>
              </div>


        // <div className="flex flex-row justify-center items-center">
        //     <input 
        //         className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" 
        //         type='search' 
        //         placeholder='Search Location...'>
        //     </input>
        //     <div className="Search"><SearchIcon/></div>
        // </div>
    )
}

export default SearchBox