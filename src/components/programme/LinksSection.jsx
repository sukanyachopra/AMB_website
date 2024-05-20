import React from "react";

import styles from "./LinksSection.module.css";

const LinksSection = ({ links }) => {
  return (
    <div className="container">
      <div className={styles["info-container"]}>
        {links.map((link, idx) => (
          <a key={idx} href={`#link-${idx + 1}`} className={styles["info-box"]}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksSection;
