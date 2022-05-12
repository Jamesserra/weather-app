import React from "react";

const WeatherCard = ({weatherCurrent}) => {
    let date = String(new window.Date())
    date = date.slice(3,10)

    return (
        <div className="flex flex-row justify-between items-center bg-white p-8 bg-opacity-70 rounded-3xl shadow-md">
            <p className="text-7xl font-bold text-right text-gray-900">{Math.round(weatherCurrent.temp)}°F</p>
            <img className="" src = {`http://openweathermap.org/img/wn/${weatherCurrent.weather[0].icon}@4x.png`}/>
            <p className="text-2xl text-center mt-2">{date}</p>
        </div>
    )
}

export default WeatherCard