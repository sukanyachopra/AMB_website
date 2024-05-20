import PartnerInstituteTopCard from "../../components/connect/PartnerInstituteTopCard";
import PartnerInstituteInfo from "../../components/connect/PartnerInstituteInfo";
import "./PartnerInstitutes.css";

const PartnerInstitutes = () => {
  return (
    <>
      <div className="heading-page">Partner Institutes</div>

      <div id="partner-container">
        <PartnerInstituteTopCard />
        <PartnerInstituteInfo />
      </div>
    </>
  );
};

export default PartnerInstitutes;
