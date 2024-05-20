import React, { useState, useEffect } from "react";
import "./RegistrationForm.css";
import axios from "axios";

function RegistrationForm() {
  const data = {
    name: "",
    email: "",
    empId: "",
    phoneNumber: "",
    password: "",
  };
  const [regData, setRegData] = useState(data);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let timer;

    if (submitted) {
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 50000);
    }

    return () => clearTimeout(timer);
  }, [submitted]);

  function handleData(e) {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http:///amb-qa-env.eba-prycu9wy.eu-north-1.elasticbeanstalk.com/auth/signup",
        regData
      )
      .then((response) => {
        setSubmitted(true);
        setRegData(data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="regisheading">
        <h1>AMB Admin Registration</h1>
      </div>
      <form
        className="regisformcontainer"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="regisformele">
          <label className="regislabel"> Name </label>
          <span className="valid">:</span>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={regData.name}
            onChange={handleData}
            required
          />

          <br />
          <label className="regislabel">Email-ID </label>
          <span className="valid">:</span>
          <input
            type="email"
            placeholder="Enter your Email-ID"
            name="email"
            value={regData.email}
            onChange={handleData}
            required
          />

          <br />

          <label className="regislabel"> Employment ID </label>
          <span className="valid">:</span>
          <input
            type="text"
            placeholder="Enter your Name"
            name="empId"
            value={regData.empId}
            onChange={handleData}
            required
          />

          <br />
          <label className="regislabel"> Contact No. </label>
          <span className="valid">:</span>
          <input
            type="tel"
            placeholder="Enter your Contact No."
            name="phoneNumber"
            pattern="[0-9]{10}"
            value={regData.phoneNumber}
            onChange={handleData}
            required
          />

          <br />
          <label className="regislabel"> Password </label>
          <span className="valid">:</span>
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={regData.password}
            onChange={handleData}
            required
          />

          <br />
        </div>
        <div className="regisbtn">
          <button className="regisbutton" type="submit">
            Submit
          </button>
        </div>
      </form>
      {submitted && (
        <div className="success">
          <p>Your form is submitted successfully!</p>
        </div>
      )}
    </>
  );
}

export default RegistrationForm;
