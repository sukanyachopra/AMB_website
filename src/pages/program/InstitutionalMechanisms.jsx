import React from "react";
import {
  TopCard,
  LinksSection,
  InstitutionalMechanismsContent,
} from "../../components/programme";
import stylesC from "./ProgrammeCommon.module.css";
const InstitutionalMechanisms = () => {
  return (
    <>
      <div className="container">
        <div className={stylesC["main-page-container"]}>
          <TopCard text="6 InstitutionalMechanisms" />
          <LinksSection links={LINKS_DATA} />
          <InstitutionalMechanismsContent />
        </div>
      </div>
    </>
  );
};

export default InstitutionalMechanisms;

const LINKS_DATA = [
  "1. Intra-Ministerial Coordination",
  "2. National Anemia Mukt Bharat Unit",
  "3. National Centre of Excellence and Advanced Research on Anemia Control (NCEAR-A)",
  "4. Convergence with other Ministries",
  "5. Strengthening Supply Chain and Logistics",
  "6. Anemia Mukt Bharat Dashboard and Digital Portal - One-Stop Shop on Anemia",
];
