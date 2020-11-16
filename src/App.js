import React, { useState } from 'react';
import axios from "axios";

import './App.css';
import Container from 'react-bootstrap/Container'; 
import Input from './components/Input';
import Output from './components/Output';
import ErrorOut from './components/ErrorOut';


function App() {
  const [data, setData] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isError, setIsError] = useState(false);

  const getWeatherData = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    if(city.trim() === ''){
      setIsInvalid(true);
      return;
    }
    
    try {
      setIsInvalid(false);
      console.log(`GETTING WEATHER DATA FOR ${city}`);
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API}`;
      let response = await axios.get(URL);
      let jsonData = await response.data;
      setData(jsonData);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  }
  
  return (
    <Container className="p-4">
      <h1>Weather Application</h1>
      <Input onSubmit={getWeatherData} invalidInput={isInvalid}></Input>
      {isError
        ? <ErrorOut></ErrorOut>
        : <Output outputData={data}></Output>
      }
    </Container>
  );
}

export default App;
