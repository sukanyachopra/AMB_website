import React from "react";
import DenominatorsForm from "../../components/reports/DenominatorsForm";
import "./Denominators.css";

function Denominators() {
  return (
    <>
      <div className="denominators-container mb-3">
        <div className="heading-denominators">Denominators</div>

        <div className="container mx-auto content-denominators">
          <div className="row-denominators">
            <DenominatorsForm />
          </div>

          <div className="row-denominators">
            <div className="row-text">
              “The denominators are the target beneficiary numbers across each
              age group of Anemia Mukt Bharat. These denominators are
              estimations (based on Census 2011 data) and reported programme
              targets. The denominators for each of these target groups are
              fixed for the FY and no edits of the data are allowed in back
              end.”
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Denominators;
