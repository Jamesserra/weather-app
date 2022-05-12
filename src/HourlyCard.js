import React from "react";

const HourlyCard = () => {
    return (
        <div className="flex flex-row justify-evenly items-center bg-white p-6 bg-opacity-70 rounded-3xl shadow-md">
            <div>
                <p className="text-center text-gray-500 mt-2 text-sm">Cloudy</p>
                <p className="text-2xl font-bold text-right text-gray-900">12°</p>
                <p className="text-center text-gray-500 mt-2 text-sm">Time</p>
            </div>
        </div>
    )
}

export default HourlyCard