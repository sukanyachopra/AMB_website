import React from "react";
import styles from "./DataQueryForm.module.css";
import { STATES, MONTHS, YEARS, QUARTERS } from "../../constants";
const DataQueryFormQuarterly = ({
    queryForm,
    queryFormDispatch,
    stateNames,
    queryData,
    setQueryData,
    setKpiDataAll,
}) => {
    const submitFormHandler = (e) => {
        console.log("HELLO", queryForm);
        e.preventDefault();

        setKpiDataAll([]);
        setQueryData({
            ...queryForm,
        });
        // console.log(queryForm);
        console.log("form submitted");
    };

    return (
        <div className={styles["form-container"]}>
            <form className={styles["form"]} onSubmit={submitFormHandler}>
                <div className={styles["form__group"]}>
                    <label htmlFor="" className={styles["form__label"]}></label>
                    <select
                        type="text"
                        className={styles["form__input"]}
                        name="state"
                        id="state"
                        onChange={(e) =>
                            queryFormDispatch({
                                type: "SET_STATE_COUNTRY",
                                payload: e.target.value,
                            })
                        }
                    >
                        {stateNames.map((state, index) => (
                            <option key={index} value={state.name}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles["form__group"]}>
                    <label htmlFor="" className={styles["form__label"]}>
                        Year
                    </label>
                    <select
                        type="text"
                        className={styles["form__input"]}
                        name="year"
                        id="year"
                        onChange={(e) => {
                            queryFormDispatch({
                                type: "SET_YEAR",
                                payload: +e.target.value,
                            });
                            const yearLabel = YEARS.find(
                                (year) => +year.value === +e.target.value
                            ).label;
                            queryFormDispatch({
                                type: "SET_YEAR_LABEL",
                                payload: yearLabel,
                            });
                        }}
                    >
                        {YEARS.map((year, index) => (
                            <option key={index} value={year.value}>
                                {year.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles["form__group"]}>
                    <label htmlFor="quarter" className={styles["form__label"]}>
                        Quarter
                    </label>
                    <select
                        type="text"
                        className={styles["form__input"]}
                        name="quarter"
                        id="quarter"
                        onChange={(e) =>
                            queryFormDispatch({
                                type: "SET_QUARTER",
                                payload: +e.target.value,
                            })
                        }
                    >
                        {QUARTERS.map((quarter, index) => (
                            <option key={index} value={quarter.value}>
                                {quarter.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles["form__group"]}>
                    <div className={styles["radio-heading"]}>Normalized</div>
                    <div className={styles["form__group"]}>
                        <div className={styles["form__group"]}>
                            <input
                                type="radio"
                                name="normalized"
                                id="yes"
                                value={"yes"}
                                defaultChecked
                                className={styles["form__input"]}
                                onClick={(e) =>
                                    queryFormDispatch({
                                        type: "SET_NORMALIZED",
                                        payload: true,
                                    })
                                }
                            />
                            <label
                                htmlFor="yes"
                                className={styles["form__label"]}
                            >
                                Yes
                            </label>
                        </div>
                        <div className={styles["form__group"]}>
                            <input
                                type="radio"
                                name="normalized"
                                id="no"
                                value={"no"}
                                className={styles["form__input"]}
                                onClick={(e) =>
                                    queryFormDispatch({
                                        type: "SET_NORMALIZED",
                                        payload: false,
                                    })
                                }
                            />
                            <label
                                htmlFor="no"
                                className={styles["form__label"]}
                            >
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles["form__group"]}>
                    <button type="submit" className={styles["submit-btn"]}>
                        View
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DataQueryFormQuarterly;
