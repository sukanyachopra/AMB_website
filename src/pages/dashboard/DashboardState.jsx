import DenominatorSheet from "../../components/dashboard/DenominatorSheet";
import NumeratorSheet from "../../components/dashboard/NumeratorSheet";

import "./Dashboard.css";

function DashboardState() {
  return (
    <>
      <div className="dashboard-container mb-3">
        <div className="heading-page">Upload Sheets for State - District</div>
        <div className="content-dashboard container">
          <div className="row-dashboard">
            <DenominatorSheet name="State - District" />
          </div>

          <div className="row-dashboard">
            <NumeratorSheet name="State - District" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardState;
