import React, { useState } from "react";
import "./ForgotPassword.css";
import axios from "axios";

function ForgotPassword() {
  const reset = {
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  };
  const [resetData, setResetData] = useState(reset);
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [emailIDValid, setEmailIDValid] = useState(true);
  const [otpSentMessage, setOtpSentMessage] = useState("");

  function handleData(e) {
    setResetData({ ...resetData, [e.target.name]: e.target.value });
  }

  const handleGetOtp = () => {
    // Implement the logic to validate the phone number pattern
    const emailIDPattern = /^[0-9]{10}$/;
    if (!emailIDPattern.test(resetData.email)) {
      setEmailIDValid(false);
      return;
    }

    // Implement the logic to send the OTP to the user's email number
    // For simplicity, we'll just simulate it by calling the API to generate the OTP
    axios
      .get("localhost:8082/auth/genOtp")
      .then((response) => {
        setOtpSent(true);
        setEmailIDValid(true);
        setOtpSentMessage("OTP sent successfully"); // Display success message
        setResetData({ ...resetData, otp: response.data.otp }); // Generate a new code
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResendOtp = () => {
    // Implement the logic to resend the OTP
    // You can use the same or different message service here
    // Display a notification message indicating the OTP has been resent
    axios
      .get("localhost:8082/auth/genOtp")
      .then((response) => {
        setOtpSent(true);
        setResetData({ ...resetData, otp: response.data.otp }); // Generate a new code when OTP is resent
        setOtpSentMessage("OTP resent successfully"); // Display success message
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signin", resetData)
      .then((response) => {
        console.log(response);

        // Call the API to save the new password
        axios
          .post("localhost:8082/auth/setpassword", {
            password: resetData.newPassword,
          })
          .then((response) => {
            console.log(response);
            // Handle the response after setting the new password
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="heading-page">Reset Password</div>
      <form
        className="forgotformcont"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="forgotformele">
          <label className="forgotlabel">Email No.</label>
          <input
            type="email"
            placeholder="Enter your registered Email-ID."
            name="email"
            value={resetData.email}
            pattern="[0-9]{10}"
            onChange={handleData}
            required
          />
          {!emailIDValid && (
            <p className="errorMessage">Invalid Email-ID number</p>
          )}
          <br />
          {otpSent ? (
            <>
              <label className="forgotlabel">OTP</label>
              <input
                type="text"
                placeholder="One Time Password"
                name="otp"
                value={resetData.otp}
                onChange={handleData}
                required
              />
              <br />
              <label className="forgotlabel">New Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                name="newPassword"
                value={resetData.newPassword}
                onChange={handleData}
                required
              />
              <br />
              <label className="forgotlabel">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={resetData.confirmPassword}
                onChange={handleData}
                required
              />
              <button
                className="forgotshowhide"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <span>Hide Password</span>
                ) : (
                  <span>Show Password</span>
                )}
              </button>
              <br />
            </>
          ) : null}
          <div className="forgotbtn">
            {otpSent ? (
              <button className="forgotsubmit" type="submit">
                Submit
              </button>
            ) : (
              <button
                className="forgotsubmit"
                type="button"
                onClick={handleGetOtp}
              >
                Get OTP
              </button>
            )}
            {otpSent && (
              <>
                <div className="resendOTPLinkContainer">
                  <span className="resendOTPLink" onClick={handleResendOtp}>
                    Resend OTP
                  </span>
                </div>
                {otpSentMessage && (
                  <p className="successMessage">{otpSentMessage}</p>
                )}
              </>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
