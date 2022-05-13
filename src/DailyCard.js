import React from "react";

const DailyCard = ({weatherDaily}) => {
    const weekAheadWeather = weatherDaily.slice(1,6).map(weatherDay => {
        return weatherDay
      })

    function convertTimestamptoTime(passedDate) {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let d = new Date(passedDate * 1000)
        let day = weekday[d.getDay()];
        return `${day.slice(0,3)}`
      }

    return (
        <div className="flex hover:scale-105 duration-150 justify-evenly items-center bg-indigo-100 p-6 bg-opacity-80 rounded-3xl shadow-md">
            {
                weekAheadWeather.map(object => {
                    return (
                        <div className="text-center" key={object.dt}>
                            <span className="flex justify-center items-center">
                                <img alt="weather-icon flex" src={`http://openweathermap.org/img/wn/${object.weather[0].icon}.png`}/>
                            </span>
                            <p className="text-sm">{object.weather[0].description}</p>
                            <p className="text-sm">{Math.round(object.temp.min)}°-{Math.round(object.temp.max)}° </p>
                            <p className=" text-gray-500 mt-2 text-sm">{convertTimestamptoTime(object.dt)}</p>
                        </div>        
                    )
                })
            }
        </div>
    )
}

export default DailyCard