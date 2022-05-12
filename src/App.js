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
      weather: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch(`${API.base}weather?q=houston&units=metric&APPID=${API.key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return ( 
      <div className="space-y-7">
        <h1 className="m-2">Weather App</h1>
        <div className="w-full h-[25rem] flex items-center justify-center">
          <SearchBox/>
        </div>
        <WeatherContainer/>
      </div>
    );
  }
}

export default App;
