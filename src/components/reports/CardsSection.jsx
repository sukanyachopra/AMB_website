import React, { useEffect, useState } from "react";
import styles from "./CardsSection.module.css";
const CardsSection = ({ queryData, kpiDataAll }) => {
    const [cardsData, setCardsData] = useState({});
    useEffect(() => {
        const filteredStateData = kpiDataAll.filter(
            (state) => state.stateDistrict === queryData.stateCountry
        );
        const stateData = filteredStateData[0];
        if (stateData) {
            setCardsData({ ...stateData });
        }
    }, [queryData, kpiDataAll]);

    return (
        <div className={styles["cards-container"]}>
            <Card1 queryData={queryData} cardsData={cardsData} />
            <Card2 queryData={queryData} cardsData={cardsData} />
            <Card3 queryData={queryData} cardsData={cardsData} />
            <Card4 queryData={queryData} cardsData={cardsData} />
            <Card5 queryData={queryData} cardsData={cardsData} />
            {/* <Card6 /> */}
        </div>
    );
};

export default CardsSection;

const Card1 = ({ queryData, cardsData }) => (
    <CardWrapper
        headerText="Children 6-59 months"
        footerText={`Upto ${queryData.yearLabel}`}
        image="/kpi-monthly/kpi-card-img-1.jpg"
    >
        <div className={styles["percent-text-big"]}>
            {cardsData["months6_59IfaPercentO"]?.toFixed(2)}%
        </div>
        <div className={styles["card-body-small-text"]}>
            HMIS 9.9: Percentage of children 6-59 months provided 8-10 doses
            (1ml) of Iron and Folic Acid (IFA) syrup (Bi weekly)
        </div>
    </CardWrapper>
);
const Card2 = ({ queryData, cardsData }) => (
    <CardWrapper
        headerText="Children 5-9 years"
        footerText={`Upto ${queryData.yearLabel}`}
        image="/kpi-monthly/kpi-card-img-2.jpg"
    >
        <div className={styles["percent-text-big"]}>
            {cardsData["years6_9IfaPercentP"]?.toFixed(2)}%
        </div>
        <div className={styles["card-body-small-text"]}>
            HMIS 23.1+23.3: Percentage of children covered under WIFS JUNIOR
            (5-9 years) provided 4-5 iron and folic acid (IFA) tablets (In
            schools + out of school)
        </div>
    </CardWrapper>
);
const Card3 = ({ queryData, cardsData }) => (
    <CardWrapper
        headerText="Adolescents 10-19 yrs in schools"
        footerText={`Upto ${queryData.yearLabel}`}
        image="/kpi-monthly/kpi-card-img-3.jpg"
    >
        <div className={styles["percent-text-big"]}>
            {cardsData["adols10_15IfaPercentH"]?.toFixed(2)}%
        </div>
        {/* <div className={styles["percent-small-container"]}>
            <span>Boys</span>
            <span>9.5%</span>
        </div>
        <div className={styles["percent-small-container"]}>
            <span>Girls</span>
            <span>10%</span>
        </div>
        <div className={styles["percent-small-container"]}>
            <span>Adolescents</span>
            <span>9.7%</span>
        </div> */}
        <div className={styles["card-body-small-text"]}>
            HMIS 22.1.1: Percentage of (6-12 class) provided 4 Iron and Folic
            Acid (IFA) tablets in schools
        </div>
    </CardWrapper>
);
const Card4 = ({ queryData, cardsData }) => (
    <CardWrapper
        headerText="Women of reproductive age"
        footerText={`Upto ${queryData.yearLabel}`}
        image="/kpi-monthly/kpi-card-img-4.jpg"
    >
        <div className={styles["percent-text-big"]}>
            {cardsData["motherIfaPercentF"]?.toFixed(2)}%
        </div>
        <div className={styles["card-body-small-text"]}>
            (NEW) Percentage of women of reproductive age (WRA) 20-24 years,
            provided 4 Iron and Folic Acid (IFA) tablets (Under Mission Parivar
            Vikas)
        </div>
    </CardWrapper>
);
const Card5 = ({ queryData, cardsData }) => (
    <CardWrapper
        headerText="Pregnant Women"
        footerText={`Upto ${queryData.yearLabel}`}
        image="/kpi-monthly/kpi-card-img-5.jpg"
    >
        <div className={styles["percent-text-big"]}>
            {cardsData["pregWomenIfaPercentC"]?.toFixed(2)}%
        </div>
        <div className={styles["card-body-small-text"]}>
            HMIS 1.2.4: Percentage of pregnant women (PW) given 180 Iron and
            Folic Acid (IFA) tablets
        </div>
    </CardWrapper>
);
const Card6 = ({ queryData, cardsData }) => (
    <CardWrapper
        headerText="Available Stock"
        footerText={`Upto ${queryData.yearLabel}-`}
        image="/kpi-monthly/kpi-card-img-6.jpg"
    >
        <div className={`${styles["ifa"]} ${styles["ifa-red"]}`}>
            <span>IFA Red (Adult)</span>
            <span>22.9%</span>
        </div>
        <div className={`${styles["ifa"]} ${styles["ifa-blue"]}`}>
            <span>IFA Blue (10-19 yr)</span>
            <span>45.0%</span>
        </div>
        <div className={`${styles["ifa"]} ${styles["ifa-pink"]}`}>
            <span>IFA Pink (5-9 yr)</span>
            <span>52.6%</span>
        </div>
        <div className={`${styles["ifa"]} ${styles["ifa-syrup"]}`}>
            <span>IFA Syrup</span>
            <span>46.6%</span>
        </div>
    </CardWrapper>
);

const CardWrapper = ({ headerText, image, footerText, children, color }) => {
    return (
        <div className={styles["card-wrapper"]}>
            {/* <div className={styles["card-header"]}> */}
            <div className={styles["card-header-text"]}>{headerText}</div>
            {/* </div> */}
            <div className={styles["card-body"]}>
                <img src={image} alt="card" className={styles["card-image"]} />
                <div className={styles["card-body-text"]}>{children}</div>
            </div>
            {/* <div className={styles["card-footer"]}> */}
            <div className={styles["card-footer-text"]}>{footerText}</div>
            {/* </div> */}
        </div>
    );
};
