import { Row, Col } from 'react-bootstrap';

function Current(props){

  const data = " ";//props.currentData;
  var options = {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric"
  };
  const date = new Date().toLocaleString("en", options);
  const time = new Date().toLocaleTimeString();

  return (
    <>
      {data != null &&
      <Row className="mt-5">
        <Col className="pl-5">
          <h1 className="current-header d-flex justify-content-start">Toronto, CA</h1>
          <p className="current-loc d-flex justify-content-start">{date} | {time}</p>
          <div className="d-flex justify-content-start">
            <img className="current-img pl-2" src="http://openweathermap.org/img/wn/04d@2x.png"></img>
            <p className="current-temp align-self-center pl-4 pt-4">
              -5.05 <sup>&deg;c</sup>
            </p>
          </div>
        </Col>
        <Col className="current-desc align-self-center pl-5">
          <p>Condition: Cloudy</p>
          <p>Description: Overcast Clouds</p>
          <p>Humidity: 62%</p>
          <p>Wind: 2.57 kph</p>
          <p>Feels Like: -9.99 <sup>&deg;c</sup></p>
        </Col>
      </Row>
      }
    </>
  );
}

export default Current;