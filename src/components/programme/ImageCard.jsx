import React from "react";
import styles from "./ImageCard.module.css";
const ImageCard = (props) => {
  return (
    <div className="mx-auto">
      <div className={styles["image-container"]}>
        <img src={props.imageSrc} alt={props.imageSrc} />
      </div>
    </div>
  );
};

export default ImageCard;
