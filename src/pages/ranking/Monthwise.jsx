/* eslint-disable no-new-object */
import React, { useState, useEffect } from "react";
import {
  Card,
  Form,
  Container,
  Col,
  Row,
  Button,
  Table,
  ListGroup,
  Badge,
} from "react-bootstrap";
import "./ranking.css";
import "../../styles/style.css";

import {
  fetchRankData,
  getMapData,
  getState,
} from "../../services/DataRequest";
import VisualMap from "./VisualMap";
import Datepicker from "react-datepicker";

const Monthwise = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [records, setRecords] = useState([""]);
  const [performance_record_title, setPerformanceRecordTitle] = useState(
    "AMB Score Card (INDIA)"
  );
  const [region, setRegion] = useState("INDIA");
  const [stateList, setStateList] = useState(["INDIA"]);
  const [visualization_map_title, setVisualizationMapTitle] = useState(
    "VISUALIZATION: RANKING FOR ALL STATES OF INDIA " +
      new Date().getFullYear() +
      "-" +
      String(new Date().getFullYear() + 1).slice(-2) +
      " : UPTO " +
      new Date().toLocaleString("default", { month: "long" })
  );
  const [mData, setMapData] = useState([]);
  const [mMapTemp, setMapTemp] = useState({});
  const [StatesDetails, setStateDetails] = useState([""]);

  // Fetch state data and populate
  useEffect(() => {
    (async () => {
      try {
        const stateData = await getState();
        if (Object.keys(stateData.data).length !== 0) {
          setStateList(stateData.data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // Initial data fetching for the table
  useEffect(() => {
    (async () => {
      try {
        let filterValues = new Object();
        filterValues.stateCountry = "INDIA";
        filterValues.startYear = new Date().getFullYear();
        filterValues.startMonth = new Date().getMonth() + 1;
        filterValues.normalized = "TRUE";

        const idata = await fetchRankData(filterValues);
        setPerformanceRecordTitle(idata.message.toUpperCase());
        if (Object.keys(idata.data).length !== 0) {
          setStateDetails(idata);
          setRecords(idata.data);
          let mapTempObj = new Object();
          mapTempObj = idata.data[0];
          setMapTemp(mapTempObj);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // On submit populate the table and map with updated values
  const submitFilter = async (e) => {
    e.preventDefault();
    const { stateCountry, year, startMonth, customDate, normalize } =
      e.target.elements;
    setRegion(stateCountry.value);

    let filterValues = {
      stateCountry: stateCountry.value,
      startYear: customDate.value.slice(3, 7),
      startMonth: customDate.value.slice(0, 2),
      normalized: normalize.value === "on" ? "TRUE" : "FALSE",
    };
    const idata = await fetchRankData(filterValues);
    setPerformanceRecordTitle(idata.message.toUpperCase());
    const date = new Date();
    date.setMonth(filterValues.startMonth - 1);
    setVisualizationMapTitle(
      "VISUALIZATION: RANKING FOR ALL STATES OF INDIA " +
        customDate.value.slice(3, 7) +
        " : UPTO " +
        date.toLocaleString("default", { month: "long" })
    );
    if (Object.keys(idata.data).length !== 0) {
      setRecords(idata.data);
      let stateFilter = {
        stateCountry: "INDIA",
        startYear: filterValues.startYear,
        startMonth: filterValues.startMonth,
        normalized: filterValues.normalized,
      };
      try {
        const stateDetails = await fetchRankData(stateFilter);
        setStateDetails(stateDetails);
        // eslint-disable-next-line no-new-object
        let mapTempObj = new Object();
        mapTempObj = idata.data[0];
        setMapTemp(mapTempObj);
      } catch (e) {
        console.error(e);
      }
      let mapFilter = new Object();
      mapFilter.stateCountry = "INDIA";
      mapFilter.startYear = filterValues.startYear;
      mapFilter.endYear = 0;
      mapFilter.startMonth = filterValues.startMonth;
      mapFilter.endMonth = 0;
      mapFilter.normalized = filterValues.normalized;

      const mapDataFiltered = await getMapData(mapFilter);
      if (Object.keys(mapDataFiltered.data).length !== 0) {
        let mapResData = [];
        for (var k in mapDataFiltered.data) {
          let mapObject = new Object();
          mapObject = mapDataFiltered.data[k];
          let tempData = [];
          tempData.push(mapObject.stateDistrict);
          tempData.push(mapObject.indexValue);
          mapResData.push(tempData);
        }
        setMapData(mapResData);
      }
    } else {
      alert("No record found");
      setRecords([""]);
    }
  };

  // Intial Map data request
  useEffect(() => {
    (async () => {
      try {
        let mapFilter = new Object();
        mapFilter.stateCountry = "INDIA";
        mapFilter.startYear = new Date().getFullYear();
        mapFilter.endYear = 0;
        mapFilter.startMonth = new Date().getMonth() + 1;
        mapFilter.endMonth = 0;
        mapFilter.normalized = "TRUE";

        const mapDataFiltered = await getMapData(mapFilter);
        if (Object.keys(mapDataFiltered.data).length !== 0) {
          let mapResData = [];
          for (var k in mapDataFiltered.data) {
            let mapObject = new Object();
            mapObject = mapDataFiltered.data[k];
            let tempData = [];
            tempData.push(mapObject.stateDistrict);
            tempData.push(mapObject.indexValue);
            mapResData.push(tempData);
          }
          setMapData(mapResData);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // Get the code based on state or country
  const getCode = (distCode, stateCode) => {
    return region === "INDIA" ? stateCode : distCode;
  };

  // Get the rank based on country and state
  const getRank = (distCode, stateCode) => {
    return region === "INDIA" ? stateCode : distCode;
  };

  const getYear = () => {
    let content = [];
    const current_year = new Date().getFullYear();
    for (let i = current_year; i > 2017; i--) {
      var y = String(i + 1).slice(-2);
      content.push(
        <option key={i} value={i}>
          {i}-{y}
        </option>
      );
    }
    return content;
  };

  const getStatusColor = (val) => {
    if (val >= 0 && val < 25) {
      return "bg-brown";
    } else if (val >= 25 && val < 50) {
      return "bg-blue";
    } else if (val >= 50 && val < 75) {
      return "bg-yellow";
    } else if (val >= 75 && val < 95) {
      return "bg-green";
    } else if (val >= 95) {
      return "bg-black";
    }
  };

  return (
    <div className="amb__ranking-container">
      <Container fluid={true} className="px-0">
        <Row>
          <Col>
            <div className="heading-page">Ranking</div>
            <section id="amb__ranking-filter_class">
              <Container fluid={false} className="mx-auto">
                <div className="amb__ranking-filter">
                  <Card
                    border="danger"
                    style={{
                      borderRadius: "4px",
                      marginTop: "16px",
                      padding: "4px",
                    }}
                    className="mb-0"
                  >
                    <Card.Body>
                      <Form onSubmit={submitFilter}>
                        <Row className="row-ranking justify-content-center">
                          <Col sm={12} md lg xl="3">
                            <Form.Group className="mb-3">
                              <Form.Label> Country/State </Form.Label>
                              <Form.Select required name="stateCountry">
                                {stateList.map((state) => (
                                  <option
                                    value={state.name}
                                    key={state.id}
                                    type={state.type}
                                  >
                                    {state.name}{" "}
                                  </option>
                                ))}
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          {/*
                                                    <Col sm={12} md lg xl="2">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label> Year </Form.Label>
                                                            <Form.Select required name="year">
                                                                { getYear() }
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Col>

                                                    <Col sm={12} md lg xl="2">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label> Month </Form.Label>
                                                            <Form.Select required name="startMonth" >
                                                                {months.map(
                                                                    (month) => (
                                                                        <option key={ month.id } value={ month.id } > { month.name } </option>
                                                                    )
                                                                )}
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Col>

                                                */}
                          <Col sm={12} md lg xl="2">
                            <Form.Group className="mb-3">
                              <Form.Label> Month/Year </Form.Label>
                              <Datepicker
                                id="myPicker"
                                name="customDate"
                                dateFormat="MM/yyyy"
                                placeholderText="Select Month & Year"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                maxDate={new Date()}
                                showMonthYearPicker
                              ></Datepicker>
                            </Form.Group>
                          </Col>
                          <Col sm={12} md lg xl="2">
                            <Form.Group
                              className="mb-3"
                              controlId="normalized-input"
                            >
                              <Form.Label>Normalized</Form.Label>
                              <div key={`normalize__data`} className="mb-3">
                                <Form.Check
                                  defaultChecked
                                  inline
                                  label="Yes"
                                  name="normalize"
                                  type="radio"
                                  id={`normalize__data-true`}
                                />
                                <Form.Check
                                  inline
                                  label="No"
                                  name="normalize"
                                  type="radio"
                                  id={`normalize__data-false`}
                                />
                              </div>
                            </Form.Group>
                          </Col>
                          {/* <Row className="justify-content-center"> */}
                          <Col sm={12} md lg xl="1">
                            <Button
                              className="btn-danger mt-4 float-md-end"
                              type="submit"
                              style={{ width: "150px" }}
                            >
                              View Details
                            </Button>
                          </Col>
                          {/* </Row> */}
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </div>
              </Container>
            </section>

            <section className="sec__data">
              <div className="amb__data-space">
                <Container fluid={false} className="mx-auto">
                  <Card border="danger" style={{ height: "600px" }}>
                    <Card.Body>
                      <div className="sec__data-title">
                        {" "}
                        {performance_record_title}
                      </div>
                      <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <p id="amb__ranking-montly-perf_title">
                          {" "}
                          IFA COVERAGE – KEY PERFORMANCE INDICATORS, HMIS
                        </p>
                        <hr style={{ border: "2px solid red" }} />
                      </div>
                      <div
                        className="amb__fixedtable mx-3"
                        style={{ overflowY: "auto", height: "400px" }}
                      >
                        <Table
                          responsive
                          bordered
                          hover
                          style={{ borderColor: "#212121" }}
                        >
                          <thead
                            style={{
                              height: "5rem",
                              backgroundColor: "#FF8A80",
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            <tr>
                              <th scope="Col">State/UT</th>
                              {/* <th scope="Col">Code</th> */}
                              <th scope="Col">
                                HMIS: 9.9 - Percentage of children (6-59 months)
                              </th>
                              <th scope="Col">
                                HMIS: 23.1+23.3 - Percentage of Children (6-9
                                yrs)
                              </th>
                              <th scope="Col">
                                HMIS: 22.1.1+22.1.3 - Percentage of adolescents
                                (10-19 years)
                              </th>
                              <th scope="Col">
                                HMIS: 1.2.4 - Percentage of Pregnant Women
                              </th>
                              <th scope="Col">
                                HMIS: 6.3 - Percentage of mothers
                              </th>
                              {/* <th scope="Col">Index Value (%)</th> */}
                              <th scope="Col">Rank</th>
                            </tr>
                          </thead>
                          <tbody>
                            {records.map((rec) => {
                              return (
                                <tr>
                                  <td>{rec.stateDistrict}</td>
                                  {/* <td>{ getCode(rec.indDistCode, rec.indStateCode) } </td> */}
                                  <td
                                    className={getStatusColor(
                                      rec.months6_59IfaPercentO
                                    )}
                                  >
                                    {rec.months6_59IfaPercentO}
                                  </td>
                                  <td
                                    className={getStatusColor(
                                      rec.years6_9IfaPercentP
                                    )}
                                  >
                                    {rec.years6_9IfaPercentP}
                                  </td>
                                  <td
                                    className={getStatusColor(
                                      rec.adols10_15IfaPercentH
                                    )}
                                  >
                                    {rec.adols10_15IfaPercentH}
                                  </td>
                                  <td
                                    className={getStatusColor(
                                      rec.pregWomenIfaPercentC
                                    )}
                                  >
                                    {rec.pregWomenIfaPercentC}
                                  </td>
                                  <td
                                    className={getStatusColor(
                                      rec.motherIfaPercentF
                                    )}
                                  >
                                    {rec.motherIfaPercentF}
                                  </td>
                                  {/* <td className={ getStatusColor(rec.motherIfaPercentF)}>{ rec.indexValue}</td> */}
                                  <td>
                                    {" "}
                                    {getRank(rec.rankDist, rec.rankState)}{" "}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                    </Card.Body>
                  </Card>
                </Container>
              </div>
            </section>

            <section className="sec__map">
              <div className="amb__visual-space">
                <Container fluid={false} className="mx-auto mb-2">
                  <Card border="danger" style={{ height: "auto" }}>
                    <Card.Body>
                      <div className="visual__data-title">
                        {" "}
                        {visualization_map_title}
                      </div>
                      <Row className="row-ranking">
                        <Col md={7}>
                          <ListGroup horizontal className="mt-3">
                            <ListGroup.Item className="d-flex justify-content-start align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">State/Country</div>
                                {mMapTemp.stateDistrict}
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-end align-items-end">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Code</div>
                                {mMapTemp.indStateCode}
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                          <ListGroup as="ol" numbered className="mt-3">
                            <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                            >
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Rank</div>
                              </div>
                              <Badge id="list__map-rank" bg="primary" pill>
                                {mMapTemp.rankState}
                              </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                            >
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Cummilative Value</div>
                              </div>
                              <Badge bg="primary" pill>
                                {mMapTemp.indexValue}
                              </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                            >
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                  HMIS: 9.9 - Percentage of children (6-59
                                  months)
                                </div>
                              </div>
                              <Badge bg="primary" pill>
                                {mMapTemp.months6_59IfaPercentO}
                              </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                            >
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                  HMIS: 23.1+23.3 - Percentage of Children (6-9
                                  yrs)
                                </div>
                              </div>
                              <Badge bg="primary" pill>
                                {mMapTemp.years6_9IfaPercentP}
                              </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                            >
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                  HMIS: 22.1.1+22.1.3 - Percentage of
                                  adolescents (10-19 years)
                                </div>
                              </div>
                              <Badge bg="primary" pill>
                                {mMapTemp.adols10_15IfaPercentH}
                              </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                            >
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                  HMIS: 1.2.4 - Percentage of Pregnant Women
                                </div>
                              </div>
                              <Badge bg="primary" pill>
                                {mMapTemp.pregWomenIfaPercentC}
                              </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                            >
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                  HMIS: 6.3 - Percentage of mothers
                                </div>
                              </div>
                              <Badge bg="primary" pill>
                                {mMapTemp.motherIfaPercentF}
                              </Badge>
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                        <Col md={5}>
                          <div style={{ position: "relative" }}>
                            <VisualMap
                              mData={mData}
                              StatesDetails={StatesDetails}
                              setMapTemp={setMapTemp}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Container>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Monthwise;
