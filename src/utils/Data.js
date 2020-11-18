import axios from "axios";


export const getInput = (e) => {
  e.preventDefault();

  const city = e.target.elements.city.value;

  if(city.trim() === ''){
    return null;
  }
  return city.trim();
}


const getData = async (url) => {
  let response = await axios.get(URL);
  let jsonData = await response.data;
  return jsonData;
}

export const getCurrentWeather = async (city) => {
  console.log(`GETTING CURRENT WEATHER FOR ${city}`);
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`;
  let currentResult = getData(URL);
  return currentResult;
}

export const getForecast = async (city, latitude, longitude) => {
  console.log(`GETTING WEATHER FORECAST FOR ${city}`);
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`;
  let forecastResult = getData(URL);
  return forecastResult;
}

