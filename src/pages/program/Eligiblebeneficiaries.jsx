import React from "react";
import "./Eligiblebeneficiaries.css";
import six from "../../assets/img/6.png";
import logo from "../../assets/img/LogoAmb.png";
import eligible from "../../assets/img/eligible-new1-635x520-1.png";

function EligibleBeneficiaries() {
  return (
    <>
      <div className="heading-page">Eligible Beneficiaries</div>
      <div class="box-container container">
        <div class="box-left-column">
          <div class="text_wrap">
            <h3 class="alignCenter">
              <img src={six} width="28" alt="text" /> ELIGIBLE GROUPS OF
              BENEFICIARIES
            </h3>

            <div className="image_wrap">
              <img className="logo" src={logo} width="70" alt="logo" />
            </div>
            <div>
              <span style={{ color: "#ed1b23" }}>*</span>
              <span>
                Beneficiary estimations are as per Census estimations for
                2017-18. Estimated number of beneficiaries will be annually
                revised and updated
              </span>
            </div>
          </div>
        </div>
        <div className="box-right-column">
          <img
            className="right-image"
            src={eligible}
            sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 635px, 100vw"
            width="635"
            height="480"
            alt="right-side"
          />
        </div>
      </div>
    </>
  );
}

export default EligibleBeneficiaries;
