import React from "react";
import WeatherCard from "./WeatherCard";
import HourlyCard from "./HourlyCard";
import DailyCard from "./DailyCard";

const WeatherContainer = ({weatherCurrent, weatherHourly, weatherDaily}) => {
  console.log(weatherCurrent)
  console.log(weatherHourly)
  console.log(weatherDaily)

  return (            
    <div className="container lg:w-1/2 mx-auto flex flex-col justify-evenly space-y-6">               
      <WeatherCard weatherCurrent={weatherCurrent}/>
      <HourlyCard weatherHourly={weatherHourly}/>
      <DailyCard weatherDaily={weatherDaily}/>
    </div>
  );
}

export default WeatherContainer
             