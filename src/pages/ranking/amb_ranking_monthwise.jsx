import React from "react";
import { Card, Form, Container, Col, Row, Button } from "react-bootstrap";
import { Footer, FixedHeader } from "../../containers";
import "./ranking.css";
import "../../styles/style.css";
import { stateList } from "./state";
import { fetchRankData } from "../../services/DataRequest";

function amb_ranking_monthwise() {
  const submitFilter = (e) => {
    e.preventDefault();
    const { stateCountry, year, startMonth, endMonth } = e.target.elements;
    console.log(
      stateCountry.value +
        " : " +
        stateCountry.message +
        " : " +
        stateCountry.label +
        " : " +
        stateCountry.name +
        ":" +
        stateCountry.html
    );
    let filterValues = {
      stateCountry: stateCountry.value,
      year: year.value,
      startMonth: startMonth.value,
      endMonth: endMonth.value,
    };

    console.log(filterValues);

    const data = fetchRankData(filterValues);
    console.log(data);
  };

  const getYear = () => {
    let content = [];
    const current_year = new Date().getFullYear();
    for (let i = current_year; i > 2017; i--) {
      content.push(<option key={i}>{i}</option>);
    }
    return content;
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="amb__ranking-container">
      <div className="heading-page">Ranking</div>
      <Container fluid={false} className="m-5">
        <Row>
          <Col>
            <section id="amb__ranking-filter_class">
              <Container className="m-5">
                <div className="amb__ranking-filter">
                  <Card
                    style={{
                      borderRadius: "4px",
                      marginTop: "16px",
                      padding: "4px",
                    }}
                    className="mb-0"
                  >
                    <Card.Body>
                      <Form onSubmit={submitFilter}>
                        <Row>
                          <Col sm={12} md lg xl="3">
                            <Form.Group className="mb-3">
                              <Form.Label>Country/State</Form.Label>
                              <Form.Select required name="stateCountry">
                                <option value="0" key={0}>
                                  --Select Country/State--
                                </option>
                                {stateList.map((state) => (
                                  <option value={state.value} key={state.uid}>
                                    {state.name}
                                  </option>
                                ))}
                              </Form.Select>
                            </Form.Group>
                          </Col>

                          <Col sm={12} md lg xl="3">
                            <Form.Group className="mb-3">
                              <Form.Label>Year</Form.Label>
                              <Form.Select required name="year">
                                <option key={0} value="0">
                                  --Select Year--
                                </option>
                                {getYear()}
                              </Form.Select>
                            </Form.Group>
                          </Col>

                          <Col sm={12} md lg xl="3">
                            <Form.Group className="mb-3">
                              <Form.Label>From</Form.Label>
                              <Form.Select required name="startMonth">
                                <option key={0} value="0">
                                  --Select Month--
                                </option>
                                {months.map((month) => (
                                  <option key={month} value={month}>
                                    {month}
                                  </option>
                                ))}
                              </Form.Select>
                            </Form.Group>
                          </Col>

                          <Col sm={12} md lg xl="3">
                            <Form.Group className="mb-3">
                              <Form.Label>To</Form.Label>
                              <Form.Select required name="endMonth">
                                <option key={0} value="0">
                                  --Select Month--
                                </option>
                                {months.map((month) => (
                                  <option key={month} value={month}>
                                    {month}
                                  </option>
                                ))}
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Row className="justify-content-center">
                            <Col sm={12} md lg xl="3">
                              <Button
                                variant="primary"
                                type="submit"
                                style={{
                                  width: "100%",
                                  borderColor: "#880E4F",
                                  backgroundColor: "#AD1457",
                                }}
                                size="md"
                              >
                                View Details
                              </Button>{" "}
                            </Col>
                          </Row>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </div>
              </Container>
            </section>

            <section>
              <div className="amb__data-space">
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
                sadsa dasdasddffdfdfasd
                <br />
              </div>
            </section>

            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default amb_ranking_monthwise;
