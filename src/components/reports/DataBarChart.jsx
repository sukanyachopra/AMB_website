import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import styles from "./DataBarChart.module.css";
import { DATA_NAMES } from "../../constants";

const DataBarChart = ({ kpiDataAll, dataIndexName }) => {
    const [DATA, SETDATA] = useState([]);

    useEffect(() => {
        let currData = [];
        currData = kpiDataAll.map((state) => {
            return {
                state: state.stateDistrict,
                value: state[dataIndexName]
                    ? +state[dataIndexName]?.toFixed(2)
                    : 0,
            };
        });
        SETDATA([...currData]);
        // console.log(kpiDataAll);
    }, [kpiDataAll, dataIndexName]);

    DATA.sort((a, b) => b.value - a.value);

    const chartLabels = [];
    const chartValues = [];
    const colorValues = [];
    const borderColorValues = [];

    DATA.forEach((d) => {
        chartLabels.push(d.state);
        chartValues.push(d.value);

        let borderColor = "rgb(200, 25, 25)";
        let color = "rgb(200, 25, 25, 0.5)";
        if (d.value > 25 && d.value <= 50) {
            borderColor = "rgb(75,192, 192 )";
            color = "rgb(75,192, 192, 0.5)";
        } else if (d.value > 50 && d.value <= 75) {
            borderColor = "rgb(255, 205, 50)";
            color = "rgb(255, 205, 50, 0.5)";
        } else if (d.value > 75) {
            borderColor = "rgb(0, 128, 0)";
            color = "rgb(0, 128, 0, 0.5)";
        }
        colorValues.push(color);
        borderColorValues.push(borderColor);
    });

    const chartData = {
        // labels: ["Upto Q1", "Upto Q2", "Upto Q3", "Upto Q4"],
        labels: chartLabels,
        datasets: [
            {
                // label: "Percentage of children 6-59 months provided 8-10 doses (1ml) of Iron and Folic Acid (IFA) syrup",
                data: chartValues,
                borderWidth: 2,
                borderColor: borderColorValues,
                backgroundColor: colorValues,
            },
        ],
    };

    const chartOptions = {
        tooltips: {
            enabled: true,
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
        plugins: {
            legend: {
                display: false,
                position: "right",
                fullSize: false,
            },
            tooltip: { enabled: true },
            title: {
                display: true,
                text: DATA_NAMES.find((d) => d.key === dataIndexName).value,
            },
            responsive: true,
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className={styles["main-chart-container"]}>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default DataBarChart;
