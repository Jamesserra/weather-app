import React from "react";

const HourlyCard = ({weatherHourly}) => {

  const nextHours = weatherHourly.slice(0,6).map(nextWeatherHour => {
    return nextWeatherHour
  })

  return (
    <div className="flex flex-row justify-evenly items-center bg-white p-6 bg-opacity-70 rounded-3xl shadow-md">
      {
        nextHours.map(object => {
          return (
            <div className="text-center">
                <p className="text-gray-500 mt-2 text-sm">Cloudy</p>
                <p className="text-2xl font-bold text-gray-900">{Math.round(object.temp)}</p>
                <p className="text-gray-500 mt-2 text-sm">Time</p>
            </div>    
          )
        })
      }
    </div>
  )
}

export default HourlyCard