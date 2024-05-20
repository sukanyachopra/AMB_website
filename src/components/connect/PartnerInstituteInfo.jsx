import React from "react";
import styles from "./PartnerInstituteInfo.module.css";
const PartnerInstituteInfo = () => {
  return (
    <div className={styles["info-container"]}>
      <a href="#" className={styles["info-box"]}>
        1. Institute of Economic Growth - AMB
      </a>
      <a href="#" className={styles["info-box"]}>
        2. NCEAR-A [National Centre of Excellence and Advanced Research on
        Anemia Control, AIIMS]
      </a>
      <a href="#" className={styles["info-box"]}>
        3. NCEAR-D [National Centre of Excellence and Advanced Research on
        Diets]
      </a>
      <a href="#" className={styles["info-box"]}>
        4. Tarang Hub
      </a>
    </div>
  );
};

export default PartnerInstituteInfo;
