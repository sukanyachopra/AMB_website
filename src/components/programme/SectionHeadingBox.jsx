import React from "react";
import styles from "./SectionHeadingBox.module.css";
const SectionHeadingBox = ({ locationText, headingText }) => {
    return (
        <div className={styles["heading-container"]}>
            <div className={styles["main-heading-content"]}>
                <div className={styles["location-text"]}>{locationText}</div>
                <div className={styles["heading-text"]}>{headingText}</div>
            </div>
        </div>
    );
};

export default SectionHeadingBox;
