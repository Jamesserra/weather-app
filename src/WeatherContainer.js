import React from "react";
import WeatherCard from "./WeatherCard";
import HourlyCard from "./HourlyCard";
import DailyCard from "./DailyCard";

const WeatherContainer = ({name, weatherCurrent, weatherHourly, weatherDaily}) => {
  return (            
    <div className="container lg:w-1/2 mx-auto flex flex-col justify-evenly space-y-6">   
      <div className="text-4xl text-center">{name.toUpperCase()}</div>       
      <WeatherCard weatherCurrent={weatherCurrent}/>
      <HourlyCard weatherHourly={weatherHourly}/>
      <DailyCard weatherDaily={weatherDaily}/>
    </div>
  );
}

export default WeatherContainer
             