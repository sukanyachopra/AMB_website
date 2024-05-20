import React, { useEffect, useState } from "react";
import styles from "./DataIndiaMap.module.css";
import MapSvg from "./MapSvg";
import { DATA_NAMES, MAP_DATA } from "../../constants";
import DatamapsIndia from "react-datamaps-india";

// const DataIndiaMap = ({ kpiDataAll, dataIndexName }) => {
//     const [mapDataCalculated, setMapDataCalculated] = useState([]);

//     useEffect(() => {
//         (async () => {
//             const temp = [];

//             for (let i = 0; i < kpiDataAll.length; i++) {
//                 const kpiData = kpiDataAll[i];
//                 const stateName = kpiData.stateDistrict;
//                 const value = kpiData[dataIndexName];

//                 const arr = MAP_DATA.filter(
//                     (item) => item.name === stateName && item.code
//                 );

//                 for (let j = 0; j < arr.length; j++) {
//                     if (arr[j].codeMap)
//                         // const value = kpiData[dataIndexName];
//                         temp.push({
//                             code: arr[j].codeMap,
//                             value: value,
//                         });
//                 }
//             }
//             // console.log("HELLO TEMP", temp);
//             setMapDataCalculated(temp);
//         })();
//     }, [kpiDataAll, dataIndexName]);
//     // useEffect(e)

//     return (
//         <div className={styles["map-container"]}>
//             <div className={styles["india-map-legend-container"]}>
//                 <div className={styles["india-map-legend-text"]}>
//                     <span>Lowest</span> <span>Highest</span>
//                 </div>
//                 <div className={styles["india-map-legend"]}></div>
//             </div>
//             <MapSvg map={mapDataCalculated} />
//         </div>
//     );
// };

// export default DataIndiaMap;

const DataIndiaMap = ({ kpiDataAll, dataIndexName, queryForm }) => {
    const [mapDataCalculated, setMapDataCalculated] = useState(null);

    useEffect(() => {
        (async () => {
            const tempArr = {};
            kpiDataAll.forEach((data) => {
                const value = data[dataIndexName];
                const arr = MAP_DATA.filter(
                    (item) => item.name === data.stateDistrict
                );

                // console.log(MAP_DATA, data.stateDistrict);
                // console.log(arr);

                // const stateName = MAP_DATA.find(item=>item.mapName==)
                for (let i = 0; i < arr.length; i++) {
                    tempArr[arr[i].mapName] = {
                        value: value,
                    };
                }
            });
            console.log(tempArr);

            setMapDataCalculated(tempArr);
        })();
    }, [kpiDataAll, dataIndexName]);
    return (
        <div className={styles["map-container"]}>
            <DatamapsIndia
                regionData={mapDataCalculated || {}}
                hoverComponent={({ value }) => {
                    let percentValue = value.value;
                    let colorClass = "color-very-low";
                    if (!percentValue) colorClass = "no-data";
                    if (percentValue >= 25 && percentValue < 50)
                        colorClass = "color-low";
                    else if (percentValue >= 50 && percentValue < 75)
                        colorClass = "color-medium";
                    else if (percentValue >= 75) colorClass = "color-high";

                    if (queryForm.normalized && percentValue >= 95) {
                        colorClass = "color-normalized";
                        percentValue = 95;
                    }

                    return (
                        <span
                            className={`${styles["hover-component"]} ${styles[colorClass]}`}
                        >
                            {value.name} -{" "}
                            {percentValue
                                ? percentValue?.toFixed(2)
                                : "No data"}
                        </span>
                    );
                }}
                mapLayout={{
                    // title: DATA_NAMES.find((d) => d.key === dataIndexName)
                    //     .value,
                    // legendTitle: "Legend Title",
                    // startColor: "#FFDAB9",
                    // endColor: "#FF6347",
                    legend: false,
                    fillColor: "#f5f5f5",
                    hoverTitle: "Count",
                    noDataColor: "#f5f5f5",
                    borderColor: "#8D8D8D",
                    hoverBorderColor: "#8D8D8D",
                    hoverColor: "slateblue",
                }}
            />
        </div>
    );
};

export default DataIndiaMap;
