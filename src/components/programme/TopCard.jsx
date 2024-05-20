import React from "react";
import styles from "./TopCard.module.css";
const TopCard = (props) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card"]}>
        <div className={styles["card-image"]}>
          <img src="/LogoAmb.png" alt="Anaemia Mukt Bharat Logo" />
        </div>
        <div className={styles["card-content"]}>
          <h2 className={styles["card-content-text"]}>{props.text}</h2>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
