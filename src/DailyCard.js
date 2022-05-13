import React from "react";

const DailyCard = () => {
    return (
        <div className="flex flex-row hover:scale-105 duration-150 justify-evenly items-center bg-indigo-100 p-6 bg-opacity-80 rounded-3xl shadow-md">
            <div>
                <p className="text-center text-gray-500 mt-2 text-sm">Sunny</p>
                <p className="text-2xl font-bold text-right text-gray-900">17°</p>
                <p className="text-center text-gray-500 mt-2 text-sm">Date</p>
            </div>        
        </div>
    )
}

export default DailyCard