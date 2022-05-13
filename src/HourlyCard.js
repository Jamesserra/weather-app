import React from "react";

const HourlyCard = ({weatherHourly}) => {
  const nextHours = weatherHourly.slice(0,6).map(nextWeatherHour => {
    return nextWeatherHour
  })

  const newDate = (passedDate) => {
    let time = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit'}).format(passedDate)
    return `${time}`
  }

  return (
    <div className="flex flex-row hover:scale-105 duration-150 justify-evenly items-center bg-indigo-100 p-6 bg-opacity-80 rounded-3xl shadow-md">
      {
        nextHours.map(object => {
          return (
            <div className="text-center" key={object.dt}>
                <img alt="weather-icon" src={`http://openweathermap.org/img/wn/${object.weather[0].icon}@2x.png`}/>
                <p className="text-xl text-gray-900">{Math.round(object.temp)}°F</p>
                <p className="text-gray-500 mt-2 text-sm">{newDate(new Date(object.dt))}</p>
            </div>    
          )
        })
      }
    </div>
  )
}

export default HourlyCard