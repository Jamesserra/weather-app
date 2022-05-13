import React from "react";

const HourlyCard = ({weatherHourly, timezone}) => {
  const nextHours = weatherHourly.slice(0,6).map(nextWeatherHour => {
    return nextWeatherHour
  })

  function convertTimestamptoTime(passedDate, timezone) {
    let time = new Date(passedDate * 1000).toLocaleString('en-US', {timeZone: timezone});
    let timeSystem = time.slice(-2)
    let hour = time.match(/([ ])[0-9]+/).join('').trim()
    return `${hour} ${timeSystem}`
  }

  return (
    <div className="flex flex-row hover:scale-105 duration-150 justify-evenly items-center bg-indigo-100 p-6 bg-opacity-80 rounded-3xl shadow-md">
      {
        nextHours.map((object) => {
          return (
            <div className="text-center" key={object.dt}>
                <img alt="weather-icon" src={`http://openweathermap.org/img/wn/${object.weather[0].icon}@2x.png`}/>
                <p className="text-xl text-gray-900">{Math.round(object.temp)}°F</p>
                <p className="text-gray-500 mt-2 text-sm">{convertTimestamptoTime(object.dt, timezone)}</p>
            </div>    
          )
        })
      }
    </div>
  )
}

export default HourlyCard