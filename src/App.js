import React, { useState } from 'react';

import './App.css';
import Container from 'react-bootstrap/Container'; 
import Input from './components/Input';
import Current from './components/Current';
import Forecast from './components/Forecast';
import ErrorOut from './components/ErrorOut';
import { getInput, getForecast, getCurrentWeather, getLocalTime } from './utils/Data'


function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  const [timeData, setTimeData] = useState(null);
  
  const [isInvalid, setIsInvalid] = useState(false);
  
  const [currentWeatherError, setCurrentWeatherError] = useState(false);
  const [forecastError, setforecastError] = useState(false);

  const inputHandler = async (e) => {
    let cityInput = getInput(e);
    if(cityInput == null){
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);

    // get current weather data
    let currentWeather;
    try {
      currentWeather = await getCurrentWeather(cityInput);
      setCurrentWeatherData(currentWeather);
      setCurrentWeatherError(false);

      let currentTime = await getLocalTime(currentWeather.name, currentWeather.coord.lat, currentWeather.coord.lon);
      setTimeData(currentTime);
    } catch (error) {
      console.log(error);
      setCurrentWeatherError(true);
    }

    // get daily forecast data
    try{
      const forecast = await getForecast(cityInput, currentWeather.coord.lat, currentWeather.coord.lon);
      setForecastWeatherData(forecast);
      setforecastError(false);
    } catch (error){
      console.log(error);
      setforecastError(true);
    }
  }

  return (
    <div className="app-bg-color py-5">
      <Container className="app-font bg-color p-4 text-center">
        <Input onSubmit={inputHandler} invalidInput={isInvalid}></Input>
        {currentWeatherError
          ? <ErrorOut></ErrorOut>
          : <Current currentData={currentWeatherData} time={timeData}></Current>
        }
        <hr className="hr"></hr>
        {forecastError
          ? <ErrorOut></ErrorOut>
          : <Forecast forecastData={forecastWeatherData}></Forecast>
        }
      </Container>
    </div>
  );
}

export default App;
