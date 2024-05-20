import React from "react";
import ImageCard from "../../components/programme/ImageCard";
import TopCard from "../../components/programme/TopCard";
import stylesC from "./ProgrammeCommon.module.css";
const StrategyPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className={stylesC["main-page-container"]}>
          <TopCard text="6x6x6 Strategy" />
          <ImageCard imageSrc="/programme/666strategy.jpg" />
        </div>
      </div>
    </>
  );
};

export default StrategyPage;
