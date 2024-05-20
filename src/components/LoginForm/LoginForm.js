import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FixedHeader, Footer } from "../../containers";

function LoginForm() {
  const loginData = {
    username: "",
    password: "",
  };
  const [inputData, setInputData] = useState(loginData);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signin", inputData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <FixedHeader />

      <div className="login-heading">
        <div>AMB Login</div>
      </div>
      <form
        className="loginForm-container"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="loginForm-ele">
          <label className="login-label"> Username </label>
          <input
            type="text"
            placeholder="Enter your Username"
            name="username"
            value={inputData.username}
            onChange={handleData}
            required
          ></input>
          <br />
          <label className="login-label"> Password </label>
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
            required
          ></input>
          <br />
        </div>
        <div className="login-btn">
          <button className="login-submit" type="submit">
            Log In
          </button>
        </div>
        <div className="links">
          <Link className="forgot" to="/forgotPassword">
            Forgot Password
          </Link>
          <p>Don't have an account?</p>
          <Link className="signIn" to="/registration-form">
            Sign up
          </Link>
        </div>
      </form>

      <Footer />
    </>
  );
}

export default LoginForm;
