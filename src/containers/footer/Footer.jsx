import React from "react";
import "./footer.css";
import { Card, Col, Row } from "react-bootstrap";
import unicef from "../../assets/img/UNICEFLogo.png";
import nutrition from "../../assets/img/nutritionlogo.png";
import ieg from "../../assets/img/IELogo.png";

const Footer = () => {
  return (
    <footer className="amb__footer">
      <a href="https://iegindia.org/" target="blank"><img
        className="amb__logo-ieg"
        src={ieg}
        alt="Institute of Economic Growth"
      /></a>
        <a href="https://healthnutritionindia.in/" target="blank"><img className="amb__logo-nutrition" src={nutrition} alt="Nutrition" /></a>{" "}
        <a href="https://www.unicef.org/india/" target="blank"><img className="amb__logo-unicef" src={unicef} alt="unicef" /></a>
    </footer>
  );
};

export default Footer;
