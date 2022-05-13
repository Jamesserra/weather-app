import React from "react";

const WeatherCard = ({weatherCurrent, timezone}) => {
    const current = new Date()
    let monthNumber = (new Date().getMonth()+1);
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[monthNumber - 1];

    const newDate = (passedDate) => {
        let time = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', timeZone: timezone}).format(passedDate)
        return `${time}`
      }

    return (
        <div className="flex hover:scale-105 duration-150 justify-between xl:justify-around items-center bg-indigo-100 p-8 bg-opacity-80 rounded-3xl shadow-md">
            <div className="flex-none">
                <p className="text-4xl sm:text-8xl  font-bold text-right text-gray-900">{Math.round(weatherCurrent.temp)}°F</p> 
                <p className="text-center">{weatherCurrent.weather[0].description}</p>
            </div>
            <div className="">
                <img className="" alt="weather-icon" src={`http://openweathermap.org/img/wn/${weatherCurrent.weather[0].icon}@4x.png`}/>
            </div>
            <div className="flex-none sm:text-2xl">
                <p className="">{monthName} {current.getDate()}</p>
                <p className="temp">Humidity: {weatherCurrent.humidity}%</p>
                <p className="sunrise-sunset">Sunrise: {newDate(new Date(weatherCurrent.sunrise * 1000))}</p>
                <p className="sunrise-sunset">Sunset: {newDate(new Date(weatherCurrent.sunset * 1000))}</p>
            </div>
        </div>
    )
}

export default WeatherCard