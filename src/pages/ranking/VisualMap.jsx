import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataIndia from "./mapDataIndia";

require("highcharts/modules/map")(Highcharts);

const VisualMap = ({ mData, StatesDetails, setMapTemp }) => {
  const mapOptions = {
    chart: {
      // borderColor: '#dc3545',
      // borderWidth: 1,
      height: "80%",
    },
    title: {
      text: "",
    },
    accessibility: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    colors: [
      "rgb(201, 203, 201)",
      "rgb(200, 25, 25)",
      "rgb(75, 192, 192)",
      "rgb(255, 205, 50)",
      "rgb(0, 128, 0)",
      "rgb(22, 23, 22)",
    ],
    legend: {
      enabled: true,
      // title: { text: 'AMB Data' },
      align: "center",
      marginTop: 12,
      verticalAlign: "bottom",
      floating: false,
      layout: "horizontal",
      valueDecimals: 1,
      backgroundColor: "rgba(255,255,255,0.9)",
      symbolRadius: 8,
    },
    colorAxis: {
      dataClassColor: "category",
      dataClasses: [
        {
          to: -1,
          name: "No Data",
        },
        {
          from: 0,
          to: 24.9,
          name: "0 - 24.9%",
        },
        {
          from: 25,
          to: 49.9,
          name: "25 - 49.9%",
        },
        {
          from: 50,
          to: 74.9,
          name: "50 - 74.9%",
        },
        {
          from: 75,
          to: 100,
          name: "75 - 100%",
        },
        {
          from: 100,
          name: "Error",
        },
      ],
    },
    mapNavigation: {
      enabled: true,
      enableDoubleClickZoomTo: true,
      enableMouseWheelZoom: true,
      enableTouchZoom: true,
      mouseWheelSensitivity: 2,
      buttonOptions: {
        verticalAlign: "top",
      },
    },
    plotOptions: {
      series: {
        point: {
          events: {
            click: function () {
              for (let k in StatesDetails.data) {
                var istate = new Object();
                istate = StatesDetails.data[k];
                var sname = istate.stateDistrict.toLowerCase();
                if (sname.match(this.name.toLowerCase())) {
                  setMapTemp({
                    stateDistrict: istate.stateDistrict,
                    indDistCode: istate.indDistCode,
                    indStateCode: istate.indStateCode,
                    months6_59IfaPercentO: istate.months6_59IfaPercentO,
                    pregWomenIfaPercentC: istate.pregWomenIfaPercentC,
                    motherIfaPercentF: istate.motherIfaPercentF,
                    adols10_15IfaPercentH: istate.adols10_15IfaPercentH,
                    years6_9IfaPercentP: istate.years6_9IfaPercentP,
                    indexValue: istate.indexValue,
                    rankDist: istate.rankDist,
                    rankState: istate.rankState,
                  });
                }
              }
            },
          },
        },
      },
    },
    series: [
      {
        mapData: mapDataIndia,
        name: "India",
        states: {
          hover: {
            borderColor: "#007bff",
            borderWidth: 2,
            color: "#4A148C",
          },
        },
        data: mData,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        options={mapOptions}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    </div>
  );
};

export default VisualMap;
