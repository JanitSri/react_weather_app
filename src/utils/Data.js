import axios from "axios";

// get the city input
export const getInput = (e) => {
  e.preventDefault();

  const city = e.target.elements.city.value;

  if(city.trim() === ''){
    return null;
  }
  return city.trim();
}

// GET request for the weather data 
const getData = async (url) => {
  let response = await axios.get(url, {https:true});
  let jsonData = await response.data;
  return jsonData;
}

// get the current weather forecast
export const getCurrentWeather = (city) => {
  console.log(`GETTING THE CURRENT WEATHER FOR ${city}`);
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`;
  let currentResult = getData(URL);
  return currentResult;
}

// get the daily forecast for 7 days
export const getForecast = (city, latitude, longitude) => {
  console.log(`GETTING THE DAILY WEATHER FORECAST FOR ${city}`);
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`;
  let forecastResult = getData(URL);
  return forecastResult;
}

// get the local time for the city
export const getLocalTime = (city, latitude, longitude) => {
  console.log(`GETTING THE LOCAL TIME FOR ${city}`);
  const URL = `https://api.ipgeolocation.io/timezone?apiKey=${process.env.REACT_APP_IPGEOLOCATION_API}&lat=${latitude}&long=${longitude}`;
  let timeResult = getData(URL);
  return timeResult;
}

// capitalize the first letter of a string
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
