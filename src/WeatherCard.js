import React from "react";

const WeatherCard = () => {
    return (
        <div className="flex flex-row justify-between items-center bg-white p-8 bg-opacity-70 rounded-3xl shadow-md">
            <p className="text-7xl font-bold text-right text-gray-900">12°</p>
            <p className="text-center text-gray-500 mt-2 text-sm">Cloudy</p>
            <p className="text-center text-gray-500 mt-2 text-sm">Date</p>
        </div>
    )
}

export default WeatherCard