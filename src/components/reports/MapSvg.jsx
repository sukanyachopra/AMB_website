import React, { useRef } from "react";
import { VectorMap } from "react-jvectormap";

//on hover on state, it call getdata(with state code) and display it on screen
const MapSvg = ({ map }) => {
    function getdata(key) {
        var countryData = [];
        map.forEach(function (obj) {
            countryData[obj.code] = obj.value;
        });
        return countryData[key];
    }

    function getalldata() {
        var countryData = {};
        map.forEach(function (obj) {
            countryData[obj.code] = obj.value;
        });

        // console.log(countryData);
        return countryData;
    }

    const getAllColorData = () => {
        const colorData = [];

        map.forEach(function (obj) {
            colorData.push(getColorData(obj.value));
        });

        // console.log(colorData);
        return colorData;
    };

    const getColorData = (d) => {
        let borderColor = "#c81919";
        let color = "rgb(200, 25, 25, 0.5)";
        if (d > 25 && d <= 50) {
            borderColor = "#4bc0c0";
            color = "rgb(75,192, 192, 0.5)";
        } else if (d > 50 && d <= 75) {
            borderColor = "#ffcd32";
            color = "rgb(255, 205, 50, 0.5)";
        } else if (d > 75) {
            borderColor = "#008000";
            color = "rgb(0, 128, 0, 0.5)";
        }

        return borderColor;
    };

    //getdata(key) is function that maps code to the value of array (JSON)and it return only value specific state code
    const handleshow2 = (e, el, code) => {
        el.html(el.html() + ` <br> Value: ${getdata(code)}`);
    };

    return (
        <div>
            <VectorMap
                map="in_mill"
                backgroundColor="#fff"
                zoomOnScroll={false}
                containerStyle={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "90%",
                    height: "550px",
                }}
                onRegionClick={(event, code) => {
                    // console.log(code);
                }}
                onRegionTipShow={handleshow2}
                containerClassName="map"
                regionStyle={{
                    initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0,
                    },
                    hover: {
                        "fill-opacity": 0.8,
                        cursor: "pointer",
                    },
                    selected: {
                        fill: "#8d8d8d",
                    },
                    selectedHover: {},
                }}
                regionsSelectable={false}
                series={{
                    regions: [
                        {
                            values: getalldata(),
                            // scale: [
                            //     "rgb(200, 25, 25)",
                            //     "rgb(255, 205, 50)",
                            //     "rgb(75,192, 192 )",
                            //     "rgb(0, 128, 0)",
                            // ],
                            scale: ["#c81919", "#4bc0c0", "#ffcd32", "#008000"],
                            // scale: getAllColorData(),

                            // normalizeFunction: getAllColorData(),
                            // setNormalizeFunction: getColorData,
                        },
                    ],
                }}
                setNormalizeFunction={getColorData}
            />
        </div>
    );
};
export default MapSvg;
