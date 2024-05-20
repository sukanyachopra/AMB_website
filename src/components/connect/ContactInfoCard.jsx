import React from "react";
import styles from "./ContactInfoCard.module.css";
import { FaEnvelope } from "react-icons/fa";
const ContactInfoCard = () => {
  return (
    <div className={styles["card-container"]}>
      <h2 className={styles["card-heading"]}>Contact Info</h2>
      <div className={styles["card-content"]}>
        <div className={styles["mail-box"]}>
          <h2>For Programme:</h2>
          <div>
            <h3>National AMB PMU MoHFW</h3>
            <a href="mailto:amb.mohfw@gmail.com">
              <FaEnvelope /> amb.mohfw@gmail.com
            </a>
          </div>
        </div>
        <div className={styles["mail-box"]}>
          <h2>For Dashboard:</h2>
          <div>
            <h3>AMB Help Desk MoHFW</h3>
            <a href="mailto:ambhelpdeskmohfw@gmail.com">
              <FaEnvelope /> ambhelpdeskmohfw@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
