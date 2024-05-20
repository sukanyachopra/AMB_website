import DenominatorSheet from "../../components/dashboard/DenominatorSheet";
import NumeratorSheet from "../../components/dashboard/NumeratorSheet";

import "./Dashboard.css";

function DashboardDistrict() {
  return (
    <>
      <div className="dashboard-container mb-3">
        <div className="heading-page">Upload Sheets For District</div>
        <div className="content-dashboard container">
          <div className="row-dashboard">
            <DenominatorSheet name="District" />
          </div>

          <div className="row-dashboard">
            <NumeratorSheet name="District" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardDistrict;
