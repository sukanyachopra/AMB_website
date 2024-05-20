import React from "react";
import ImageCard from "../../components/programme/ImageCard";
import TopCard from "../../components/programme/TopCard";
import stylesC from "./ProgrammeCommon.module.css";

const Target = () => {
  return (
    <>
      <div className={stylesC["main-page-container"]}>
        <TopCard text="Target" />
        <ImageCard imageSrc="/programme/target.png" />
      </div>
    </>
  );
};

export default Target;
