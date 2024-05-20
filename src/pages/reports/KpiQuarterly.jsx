import React, { useEffect, useState, useReducer } from "react";
import styles from "./KpiCommon.module.css";
import API from "../../services/api";
import {
    DataQueryFormQuarterly,
    CardsSection,
    DataTable,
    DataBarChart,
    KpiIndexSelector,
    DataIndiaMap,
} from "../../components/reports";
import { YEARS } from "../../constants";
// import axios from axios;

const KpiQuarterly = () => {
    const [stateNames, setStateNames] = useState([]);
    const [dataIndexName, setDataIndexName] = useState("months6_59IfaPercentO");

    const [queryForm, queryFormDispatch] = useReducer(
        queryFormReducer,
        intialQueryFormState
    );

    const [kpiDataAll, setKpiDataAll] = useState([]);

    const [queryData, setQueryData] = useState({
        stateCountry: "INDIA",
        quarter: 1,
        year: +YEARS[0].value,
        yearLabel: YEARS[0].label,
    });

    useEffect(() => {
        (async () => {
            // console.log("HII I AM QUERY DATA", queryData);

            const temp = [];
            for (let i = 0; i < stateNames.length; i++) {
                const stateName = stateNames[i];
                try {
                    const resp = await API.getKpiQuarterlyData({
                        ...queryData,
                        stateCountry: stateName.name,
                    });
                    // console.log(resp, queryData);
                    if (resp) {
                        // console.log(resp);
                        temp.push(resp);
                    } else {
                        temp.push({
                            stateDistrict: stateName.name,
                        });
                    }
                } catch (err) {
                    console.log(err);
                }
            }
            setKpiDataAll([...temp]);
        })();
        // })();
    }, [stateNames, queryData]);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const resp = await API.getKpiQuarterlyData({ ...queryData });
    //             console.log(resp);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     })();
    // }, []);

    useEffect(() => {
        (async () => {
            try {
                const resp = await API.getAllStates();
                // console.log(resp);
                setStateNames(resp);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <div className={styles["main-page-container"]}>
            <h1 className={styles["page-heading"]}>
                KEY PERFORMANCE INDICATORS (Quarterly)
            </h1>
            <DataQueryFormQuarterly
                queryForm={queryForm}
                queryFormDispatch={queryFormDispatch}
                stateNames={stateNames}
                queryData={queryData}
                setQueryData={setQueryData}
                setKpiDataAll={setKpiDataAll}
                kpiDataAll={kpiDataAll}
            />

            <CardsSection queryData={queryData} kpiDataAll={kpiDataAll} />
            <DataTable kpiDataAll={kpiDataAll} queryForm={queryForm} />
            <KpiIndexSelector
                dataIndexName={dataIndexName}
                setDataIndexName={setDataIndexName}
            />
            <DataIndiaMap
                kpiDataAll={kpiDataAll}
                dataIndexName={dataIndexName}
                queryForm={queryForm}
            />
            <DataBarChart
                kpiDataAll={kpiDataAll}
                dataIndexName={dataIndexName}
            />
        </div>
    );
};

export default KpiQuarterly;

const intialQueryFormState = {
    stateCountry: "INDIA",
    quarter: 1,
    year: +YEARS[0].value,
    yearLabel: YEARS[0].label,
    normalized: true,
};

const queryFormReducer = (state, action) => {
    switch (action.type) {
        case "SET_STATE_COUNTRY":
            return {
                ...state,
                stateCountry: action.payload,
            };
        // case "SET_MONTH": {
        //     let year = state.year;
        //     let newMonth = +action.payload;

        //     if (newMonth === 1 || newMonth === 2 || newMonth === 3) {
        //         year = +state.yearLabel.split("-")[0] + 1;
        //     } else {
        //         year = +state.yearLabel.split("-")[0];
        //     }

        //     return {
        //         ...state,
        //         month: action.payload,
        //         year: year,
        //     };
        // }

        case "SET_QUARTER": {
            let year = state.year;
            let currQuarter = +action.payload;
            if (currQuarter === 4) {
                year = +state.yearLabel.split("-")[0] + 1;
            } else {
                year = +state.yearLabel.split("-")[0];
            }
            return {
                ...state,
                quarter: +action.payload,
                year: year,
            };
        }
        case "SET_YEAR_LABEL": {
            let year = state.year;
            let currQuarter = +state.quarter;
            if (currQuarter === 4) {
                year = +action.payload.split("-")[0] + 1;
            } else {
                year = +action.payload.split("-")[0];
            }
            return {
                ...state,
                yearLabel: action.payload,
                year: year,

                // year: year,
            };
        }

        case "SET_NORMALIZED":
            return {
                ...state,
                normalized: action.payload,
            };

        default:
            return state;
    }
};
