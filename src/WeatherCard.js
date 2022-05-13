import React from "react";

const WeatherCard = ({weatherCurrent}) => {
    const current = new Date()
    let monthNumber = (new Date().getMonth()+1);
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[monthNumber - 1];

    return (
        <div className="flex flex-row hover:scale-105 duration-150 justify-between xl:justify-around items-center bg-indigo-100 p-8 bg-opacity-80 rounded-3xl shadow-md">
            <p className="text-4xl sm:text-8xl  font-bold text-right text-gray-900">{Math.round(weatherCurrent.temp)}°F</p>
            <img alt="weather-icon" src={`http://openweathermap.org/img/wn/${weatherCurrent.weather[0].icon}@4x.png`}/>
            <div>
                <p className="text-2xl sm:text-6xl mt-2">{monthName} {current.getDate()}</p>
                <p className="text-2xl sm:text-4xl text-center mt-2 "></p>
            </div>
        </div>
    )
}

export default WeatherCard