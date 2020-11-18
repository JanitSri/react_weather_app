import { Row, Col } from 'react-bootstrap';

import { capitalize } from '../utils/Data'   

const Forecast = (props) => {
  
  let data = props.forecastData != null ? props.forecastData.daily : null;

  return (
    <>
      { data !== null && 
        <Row>
          {data.map((item, index) => (
            index !== 0 &&
            <Col key={index.toString()} className="forecast-box">
              <p className="mt-1 forecast-date">{new Date(item.dt*1000).toLocaleString("en",{weekday: "long"})}</p>
              <img className="forecast-img" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="weather icon"></img>
              <p className="forecast-temp pt-3">
                {Math.floor(parseInt(item.temp.day))} <sup>&deg;c</sup>
              </p>
              <p className="forecast-cond pt-4">
                {item.weather[0].main}
              </p>
              <p className="forecast-desc">
              {item.weather[0].description.split(' ').map(capitalize).join(' ')}
              </p>
            </Col>
          ))}
        </Row>
      }
    </>    
  );
};

export default Forecast;