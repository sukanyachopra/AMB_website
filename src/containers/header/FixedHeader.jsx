import { React, useState, useEffect } from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

import "./header.css";

import logo from "../../assets/img/LogoAmb.png";
import emblem from "../../assets/img/emblem.png";
import poshan from "../../assets/img/poshan.png";
import nhm from "../../assets/img/NHM-logo.png";

const FixedHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = `amb__header-sticky ${
    isScrolled ? "hide-on-scroll" : ""
  }`;
  const navbarClassName = `amb__navbar sticky-top shadow-sm p-3 ${
    isScrolled ? "scrolled " : ""
  }`;
  const navbarColor = `basic-navbar-nav ${isScrolled ? "scrolled" : ""}`;

  return (
    <header id="fixed-header">
      <div className={headerClassName}>
        <a href="https://www.mohfw.gov.in/" target="_blank"><img className="amb__sh-emblem" src={emblem} alt="emblem" /></a>
        <div className="middle-logo">
          <a href="http://localhost:3000/"><img className="amb__sh-logo" src={logo} alt="Logo" /></a>
          <a href="https://poshanabhiyaan.gov.in/" target="_blank"><img className="amb__sh-poshan" src={poshan} alt="Poshan" /></a>
        </div>
        <a href="https://nhm.gov.in/" target="_blank"><img className="amb__sh-nhm" src={nhm} alt="National Health Mission" /></a>
      </div>
      <Navbar className={navbarClassName} expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={navbarColor}>
          <Nav className="navbar-main">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Program" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="/target">Target</NavDropdown.Item>
              <NavDropdown.Item href="/6x6x6-strategy">
                6x6x6 Strategy
              </NavDropdown.Item>
              <NavDropdown.Item href="/eligible-beneficiaries">
                Eligible Beneficiaries
              </NavDropdown.Item>
              <NavDropdown.Item href="/interventions">
                Interventions
              </NavDropdown.Item>
              <NavDropdown.Item href="/institutional-mechanisms">
                Institutional Mechanisms
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reports" id="basic-nav-dropdown">
              <NavDropdown.Item href="/amb-target">AMB Target</NavDropdown.Item>
              <NavDropdown drop="end" title="Quarterly Reports">
                <NavDropdown.Item href="/key-performance-indicators-quarterly">
                  Key Performance <br /> Indicators (Quarterly)
                </NavDropdown.Item>

                <NavDropdown.Item href="/quarterly-progress-report-cumulative">
                  Quarterly Progress <br /> Report (Cumulative)
                </NavDropdown.Item>
                <NavDropdown.Item href="/quarterly-progress-report-non-cumulative">
                  Quarterly Progress <br /> Report (Non-Cumulative)
                </NavDropdown.Item>
                <NavDropdown.Item href="/amb-reports">
                  AMB Reports
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Monthly Reports" drop="end">
                <NavDropdown.Item href="/key-performance-indicators-monthly">
                  Key Performance <br /> Indicators (Monthly)
                </NavDropdown.Item>
                <NavDropdown.Item href="/view-your-data-monthly-cumulative">
                  View Your Data
                  <br /> Monthly (Cumulative)
                </NavDropdown.Item>
                <NavDropdown.Item href="/view-your-data-monthly-non-cumulative">
                  View Your Data
                  <br /> Monthly (Non-Cumulative)
                </NavDropdown.Item>
                <NavDropdown.Item href="/view-your-performance-monthly-non-cumulative">
                  View Your Performance
                  <br /> Monthly Trend (Non-Cumulative)
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="/denominators">
                Denominators
              </NavDropdown.Item>
              <NavDropdown title="Maternal Nutrition" drop="end">
                <NavDropdown title="Quarterly" drop="end">
                  <NavDropdown.Item href="/mn-quarterly-progress-report-cumulative">
                    MN Quarterly Progress
                    <br /> Report (Cumulative)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mn-quarterly-progress-report-non-cumulative">
                    MN Quarterly Progress
                    <br /> Report (Non-Cumulative)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mn-view-your-data-quarterly-cumulative">
                    MN View Your Data
                    <br /> Quarterly (Cumulative)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mn-view-your-data-quarterly-non-cumulative">
                    MN View Your Data
                    <br />
                    Quarterly (Non-Cumulative)
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Monthly" drop="end">
                  <NavDropdown.Item href="/mn-monthly-progress-report-cumulative">
                    MN Monthly Progress
                    <br /> Report (Cumulative)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mn-monthly-progress-report-non-cumulative">
                    MN Monthly Progress
                    <br /> Report (Non-Cumulative)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mn-view-your-data-monthly-cumulative">
                    MN View Your Data
                    <br /> Monthly (Cumulative)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mn-view-your-data-monthly-non-cumulative">
                    MN View Your Data
                    <br />
                    Monthly (Non-Cumulative)
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title="Stock">
              <NavDropdown title="Monthly" drop="end">
                <NavDropdown.Item href="/stock-monthly-progress-report-cumulative">
                  Stock Monthly Progress
                  <br /> Report (Cumulative)
                </NavDropdown.Item>
                <NavDropdown.Item href="/stock-monthly-progress-report-non-cumulative">
                  Stock Monthly Progress
                  <br /> Report (Non-Cumulative)
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Quarterly" drop="end">
                <NavDropdown.Item href="/stock-quarterly-progress-report-cumulative">
                  Stock Quarterly Progress
                  <br /> Report (Cumulative)
                </NavDropdown.Item>
                <NavDropdown.Item href="/stock-quarterly-progress-report-non-cumulative">
                  Stock Quarterly Progress
                  <br /> Report (Non-Cumulative)
                </NavDropdown.Item>
                <NavDropdown.Item href="/stock-status-quarterly">
                  Stock Status Quarterly
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title="Ranking" id="basic-nav-dropdown">
              <NavDropdown.Item href="/amb-ranking-monthly">
                Month-wise
              </NavDropdown.Item>
              <NavDropdown.Item href="/amb-ranking-quarter">
                Quarter-wise
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Dashboard" id="basic-nav-dropdown">
              <NavDropdown.Item href="/upload-state-district">
                For Upload Sheet - State + District
              </NavDropdown.Item>
              <NavDropdown.Item href="/upload-district">
                For Upload Sheet - District
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <NavDropdown title="Connect" id="basic-nav-dropdown">
              <NavDropdown.Item href="/partner-institutes">
                Partner Institutes
              </NavDropdown.Item>
              <NavDropdown.Item href="/contact-us">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>{" "}
    </header>
  );
};

export default FixedHeader;
