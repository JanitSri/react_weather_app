import { Row, Col } from 'react-bootstrap';

import { capitalize} from '../utils/Data'   

function Current(props){

  const data = props.currentData;
  const timeData = props.time;

  return (
    <>
      {data != null && timeData != null &&
      <Row className="mt-2">
        <Col className="pl-5">
          <h1 className="current-header d-flex justify-content-start">{data.name}, {data.sys.country}</h1>
          <p className="current-loc d-flex justify-content-start">{timeData.date_time_txt.slice(0,-9)} | {timeData.time_12}</p>
          <div className="d-flex justify-content-start">
            <img className="current-img pl-2" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="weather icon"></img>
            <p className="current-temp align-self-center pl-4 pt-4">
              {Math.round(parseInt(data.main.temp))} <sup>&deg;c</sup>
            </p>
          </div>
        </Col>
        <Col className="current-desc align-self-center pl-5">
          <p>Condition: {data.weather[0].main}</p>
          <p>Description: {data.weather[0].description.split(' ').map(capitalize).join(' ')}</p>
          <p>Humidity: {data.main.humidity} %</p>
          <p>Wind: {data.wind.speed} m/s</p>
          <p>Feels Like: {Math.round(parseInt(data.main.feels_like))} <sup>&deg;c</sup></p>
        </Col>
      </Row>
      }
    </>
  );
}

export default Current;