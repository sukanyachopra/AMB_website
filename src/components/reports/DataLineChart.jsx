import React from "react";

import { Line } from "react-chartjs-2";
import styles from "./DataLineChart.module.css";

const DataLineChart = () => {
    return (
        <div className={styles["main-chart-container"]}>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default DataLineChart;

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
            position: "right",
            fullSize: false,
        },
        tooltip: { enabled: true },
        title: {
            display: true,
            text: [
                "Percentage of children 6-59 months provided 8-10 doses (1ml)",
                " of Iron and Folic Acid (IFA) syrup",
            ],
        },
        responsive: true,
    },
    elements: { point: { pointStyle: "star" } },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const chartData = {
    labels: ["Upto Q1", "Upto Q2", "Upto Q3", "Upto Q4"],
    datasets: [
        {
            label: "2020-21",
            data: [8, 11],
            fill: true,
            borderColor: "#36A2EB",
            backgroundColor: "#36A2EB",
            borderWidth: 2,
        },
        {
            label: "2019-20",
            data: [6, 7, 7.5, 8],
            borderColor: "#FF6384",
            backgroundColor: "#FF6384",
            borderWidth: 2,
        },
        {
            label: "2018-19",
            data: [9, 10, 14, 15],
            borderColor: "#FF9F40",
            backgroundColor: "#FF9F40",
            borderWidth: 2,
        },
        {
            label: "2017-18",
            data: [4, 5, 5.5, 6],
            borderColor: "#9966FF",
            backgroundColor: "#9966FF",
            borderWidth: 2,
        },
    ],
};
