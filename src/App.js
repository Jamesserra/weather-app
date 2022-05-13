import React, { Component } from "react";
import SearchBox from './SearchBox';
import WeatherContainer from './WeatherContainer';

const API = {
  key: 'aa9c488d56ea990a5881886e7450459f',
  base: 'https://api.openweathermap.org/data/2.5/'
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherCurrent: [],
      weatherHourly: [],
      weatherDaily: [],
      timezone: '',
      query: '',
    }
  }
  
  onSearchSubmit = (searchInputValue) => {
    fetch(`${API.base}weather?q=${searchInputValue}&units=imperial&APPID=${API.key}`)
    .then(res => res.json())
    .then(data => {
      fetch(`${API.base}onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&exclude=alerts,minutely&appid=${API.key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ weatherCurrent: data.current })
        this.setState({ weatherHourly: data.hourly })
        this.setState({ weatherDaily: data.daily })
        this.setState({ timezone: data.timezone })
        this.setState({ query: searchInputValue })
      })
    })
  }
        
  render() {
    const {weatherCurrent, weatherHourly, weatherDaily, query, timezone} = this.state
    return ( 
      <div className="space-y-7">
        <h1 className="m-2">Weather App</h1>
        <div className="w-full h-[2rem] lg:h-[25rem] flex items-center justify-center">
          <SearchBox onSearchSubmit = {this.onSearchSubmit}/>
        </div>
        {(weatherCurrent.length !== 0) ? (
          <WeatherContainer name={query} weatherCurrent={weatherCurrent} weatherHourly={weatherHourly} weatherDaily={weatherDaily} timezone={timezone}/>
        ) : ('')}
      </div>
    );
  }
}

export default App;
