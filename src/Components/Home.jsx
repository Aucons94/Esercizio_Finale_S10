import { Row, Col, Container } from "react-bootstrap";
import CityWeather from "./CityWeather";

function Home(props) {
  return (
    <div className="container-fluid">
      <Row className="d-flex align-items-center h-100">
        <Col className="justify-content-center text-center p-5">
          {props.showCity ? (
            <CityWeather cityName={props.showCity} />
          ) : (
            <Container className="container-home w-100 w-md-50">
              <h1 className="display-5 fw-bold">Meteo</h1>
              <p className="fs-4 m-0">Che tempo troverai oggi nella tua città?</p>
            </Container>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Home;
