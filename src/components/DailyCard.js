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
        <div className="grid grid-cols-5 h-[15rem] hover:scale-105 duration-150 justify-evenly items-center bg-indigo-100 p-6 bg-opacity-80 rounded-3xl shadow-md">
            {
                weekAheadWeather.map(object => {
                    return (
                        <div className="grid grid-rows-4 justify-center justify-items-center" key={object.dt}>
                            <div>
                                <p className=" text-gray-500 text-sm">{convertTimestamptoTime(object.dt)}</p>
                            </div>
                            <div>
                                <img alt="weather-icon" src={`http://openweathermap.org/img/wn/${object.weather[0].icon}.png`}/>
                            </div>
                            <div>
                                <p className="text-xs sm:text-sm">{Math.round(object.temp.min)}° - {Math.round(object.temp.max)}° </p>
                            </div>
                            <div>
                                <p className="text-xs sm:text-sm">{object.weather[0].description}</p>
                            </div>
                        </div>        
                    )
                })
            }
        </div>
    )
}

export default DailyCard