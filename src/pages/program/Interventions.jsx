import React from "react";
import {
  TopCard,
  LinksSection,
  InterventionsContent,
} from "../../components/programme";
import stylesC from "./ProgrammeCommon.module.css";
const Interventions = () => {
  return (
    <>
      <div className="container">
        <div className={stylesC["main-page-container"]}>
          <TopCard text="6 Interventions" />
          <LinksSection className="container" links={LINKS_DATA} />
          <InterventionsContent />
        </div>
      </div>
    </>
  );
};

export default Interventions;

const LINKS_DATA = [
  "1. Prophylactic Iron and Folic Acid supplementation",
  "2. Deworming",
  "3. Intensified year-round Behaviour Change Communication Campaign (Solid Body, Smart Mind) including ensuring delayed cord clamping in newborns",
  "4. Testing of anemia using digital methods and point of care treatment",
  "5. Mandatory provision of Iron and Folic Acid fortified foods in government-funded health programmes",
  "6. Addressing non-nutritional causes of anemia in endemic pockets, with special focus on malaria, haemoglobinopathies and fluorosis",
];
