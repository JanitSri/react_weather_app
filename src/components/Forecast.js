import { Row, Col } from 'react-bootstrap';

const Forecast = (props) => {
  
  let data = props.forecastData;
  let date = new Date(1605978000*1000).toLocaleString("en",{weekday: "long"});

  return (
    <>
      <Row>
        <Col className="forecast-box">
          <p className="mt-2 forecast-date">{date}</p>
          <img className="forecast-img" src="http://openweathermap.org/img/wn/04d@2x.png"></img>
          <p className="forecast-temp">
            -5.05 <sup>&deg;c</sup>
          </p>
          <p className="forecast-cond">
            Clouds
          </p>
          <p className="forecast-desc">
            Scattered Clouds
          </p>
        </Col>
        <Col className="forecast-box">
          <p className="mt-2 forecast-date">{date}</p>
          <img className="forecast-img" src="http://openweathermap.org/img/wn/04d@2x.png"></img>
          <p className="forecast-temp">
            -5.05 <sup>&deg;c</sup>
          </p>
          <p className="forecast-cond">
            Clouds
          </p>
          <p className="forecast-desc">
            Scattered Clouds
          </p>
        </Col>
        <Col className="forecast-box">
          <p className="mt-2 forecast-date">{date}</p>
          <img className="forecast-img" src="http://openweathermap.org/img/wn/04d@2x.png"></img>
          <p className="forecast-temp">
            -5.05 <sup>&deg;c</sup>
          </p>
          <p className="forecast-cond">
            Clouds
          </p>
          <p className="forecast-desc">
            Scattered Clouds
          </p>
        </Col>
        <Col className="forecast-box">
          <p className="mt-2 forecast-date">{date}</p>
          <img className="forecast-img" src="http://openweathermap.org/img/wn/04d@2x.png"></img>
          <p className="forecast-temp">
            -5.05 <sup>&deg;c</sup>
          </p>
          <p className="forecast-cond">
            Clouds
          </p>
          <p className="forecast-desc">
            Scattered Clouds
          </p>
        </Col>
        <Col className="forecast-box">
          <p className="mt-2 forecast-date">{date}</p>
          <img className="forecast-img" src="http://openweathermap.org/img/wn/04d@2x.png"></img>
          <p className="forecast-temp">
            -5.05 <sup>&deg;c</sup>
          </p>
          <p className="forecast-cond">
            Clouds
          </p>
          <p className="forecast-desc">
            Scattered Clouds
          </p>
        </Col>
        <Col className="forecast-box">
          <p className="mt-2 forecast-date">{date}</p>
          <img className="forecast-img" src="http://openweathermap.org/img/wn/04d@2x.png"></img>
          <p className="forecast-temp">
            -5.05 <sup>&deg;c</sup>
          </p>
          <p className="forecast-cond">
            Clouds
          </p>
          <p className="forecast-desc">
            Scattered Clouds
          </p>
        </Col>
        <Col className="forecast-box">
          <p className="mt-2 forecast-date">{date}</p>
          <img className="forecast-img" src="http://openweathermap.org/img/wn/04d@2x.png"></img>
          <p className="forecast-temp">
            -5.05 <sup>&deg;c</sup>
          </p>
          <p className="forecast-cond">
            Clouds
          </p>
          <p className="forecast-desc">
            Scattered Clouds
          </p>
        </Col>
      </Row>
    </>    
  );
};

export default Forecast;