import React from "react";
import WeatherCard from "../components/WeatherCard";
import HourlyCard from "../components/HourlyCard";
import DailyCard from "../components/DailyCard";

const WeatherContainer = ({name, weatherCurrent, weatherHourly, weatherDaily, timezone}) => {
  return (            
    <div className="container lg:w-1/2 mx-auto flex flex-col justify-evenly space-y-6">   
      <div className="text-4xl text-center">{name.toUpperCase()}</div>       
      <WeatherCard weatherCurrent={weatherCurrent} timezone={timezone}/>
      <HourlyCard weatherHourly={weatherHourly} timezone={timezone}/>
      <DailyCard weatherDaily={weatherDaily}/>
    </div>
  );
}

export default WeatherContainer
             