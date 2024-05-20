import React from "react";

import styles from "./PartnerInstituteTopCard.module.css";
const PartnerInstituteTopCard = () => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card"]}>
        <div className={styles["card-image"]}>
          <img src="/LogoAmb.png" alt="Anaemia mukt bharat logo" />
        </div>
        <div className={styles["card-content"]}>
          <h2 className={styles["card-content-text"]}>4 Partner Institutes</h2>
        </div>
      </div>
    </div>
  );
};

export default PartnerInstituteTopCard;
