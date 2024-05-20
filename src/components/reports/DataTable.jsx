import React from "react";
import styles from "./DataTable.module.css";
import { DATA_NAMES } from "../../constants";
import { useEffect } from "react";

const DataTable = ({ kpiDataAll, queryForm }) => {
    useEffect(() => {
        console.log(queryForm);
    }, [queryForm]);
    return (
        <div className={styles["table-main-container"]}>
            {/* <h1>DATA TABLE</h1> */}
            <div className={styles["legend-table-container"]}>
                {queryForm.normalized && (
                    <table className={styles["legend-table"]}>
                        <thead>
                            <tr>
                                <th>No data</th>
                                <th>0 to 25</th>
                                <th>25 to 50</th>
                                <th>50 to 75</th>
                                <th>75 to 95</th>
                                <th>More than 95</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                )}
                {!queryForm.normalized && (
                    <table className={styles["legend-table"]}>
                        <thead>
                            <tr>
                                <th>No data</th>
                                <th>0 to 25</th>
                                <th>25 to 50</th>
                                <th>50 to 75</th>
                                <th>More than 75</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
            <div className={styles["table-container"]}>
                <table className={styles["table"]}>
                    <thead>
                        <tr>
                            <th>States</th>
                            {DATA_NAMES.map((name, index) => (
                                <th key={index}>{name.value}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {kpiDataAll.map((state, index) => (
                            <tr key={index}>
                                <th scope="row">{state.stateDistrict}</th>
                                {DATA_NAMES.map((name, index) => {
                                    // <td key={index}>{name.value}</td>
                                    let percentValue = state[name.key];
                                    if (!percentValue)
                                        return (
                                            <td
                                                key={index}
                                                className={styles["no-data"]}
                                            ></td>
                                        );
                                    let colorClass = "color-very-low";
                                    if (percentValue >= 25 && percentValue < 50)
                                        colorClass = "color-low";
                                    else if (
                                        percentValue >= 50 &&
                                        percentValue < 75
                                    )
                                        colorClass = "color-medium";
                                    else if (percentValue >= 75)
                                        colorClass = "color-high";

                                    if (
                                        queryForm.normalized &&
                                        percentValue >= 95
                                    ) {
                                        colorClass = "color-normalized";
                                        percentValue = 95;
                                    }
                                    return (
                                        <td
                                            className={styles[colorClass]}
                                            key={index}
                                        >
                                            {percentValue?.toFixed(2)}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
