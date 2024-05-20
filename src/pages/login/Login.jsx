import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    employmentId: "",
    contactNo: "",
    password: "",
  });

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegistrationInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signin", loginData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http:///amb-qa-env.eba-prycu9wy.eu-north-1.elasticbeanstalk.com/auth/signup",
        registrationData
      )
      .then((response) => {
        setSubmitted(true);
        setRegistrationData(registrationData);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="tabbed-interface">
          <div className="tab-buttons">
            <button
              onClick={() => handleTabClick("login")}
              className={activeTab === "login" ? "active" : "login-button"}
            >
              Login
            </button>
            <button
              onClick={() => handleTabClick("register")}
              className={
                activeTab === "register" ? "active" : "registration-button"
              }
            >
              Register
            </button>
          </div>

          {activeTab === "login" ? (
            <form onSubmit={handleLoginSubmit} className="login-form">
              <div className="login-form-label">
                <label>
                  Username
                  <input
                    type="text"
                    name="username"
                    value={loginData.username}
                    onChange={handleLoginInputChange}
                  />
                </label>

                <label>
                  Password
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginInputChange}
                  />
                </label>
              </div>

              <div className="login-form-buttons">
                <button className="user-button" type="submit">
                  Login
                </button>

                <button className="user-button">
                  <Link className="forgot-password" to="/forgotPassword">
                    Forgot Password
                  </Link>
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegistrationSubmit}>
              <div className="register-form-label">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={registrationData.name}
                    onChange={handleRegistrationInputChange}
                  />
                </label>

                <label>
                  Email-ID
                  <input
                    type="email"
                    name="email"
                    value={registrationData.email}
                    onChange={handleRegistrationInputChange}
                  />
                </label>

                <label>
                  Employment ID
                  <input
                    type="text"
                    name="employmentId"
                    value={registrationData.employmentId}
                    onChange={handleRegistrationInputChange}
                  />
                </label>

                <label>
                  Contact No.
                  <input
                    type="text"
                    name="contactNo"
                    value={registrationData.contactNo}
                    onChange={handleRegistrationInputChange}
                  />
                </label>

                <label>
                  Password
                  <input
                    type="password"
                    name="password"
                    value={registrationData.password}
                    onChange={handleRegistrationInputChange}
                  />
                </label>
              </div>

              <div className="register-form-button">
                <button type="submit" className="user-button">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
