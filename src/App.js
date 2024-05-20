import React from "react";
import { Container, Col, Row } from "react-bootstrap";
// import { Footer, Header, Feature } from "./containers";
import "./App.css";
import { Slider } from "./components";
const App = () => {
  return (
    <div className="App">
      <Container fluid={true} className="px-0">
        <Row nogutters={true}>
          <Col>
            {/* <Header />  */}
            <Slider />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
