import React from "react";
import WeatherCard from "./WeatherCard";
import HourlyCard from "./HourlyCard";
import DailyCard from "./DailyCard";

const WeatherContainer = () => {
  return (            
    <div className="container lg:w-1/2 mx-auto flex flex-col justify-evenly space-y-6">               
      <WeatherCard/>
      <HourlyCard/>
      <DailyCard />
    </div>
  );
}

export default WeatherContainer
             