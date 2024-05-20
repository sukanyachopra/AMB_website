import React from "react";
import styles from "./DataQueryForm.module.css";
import { STATES, MONTHS, YEARS } from "../../constants";
const DataQueryFormMonthly = ({
    queryForm,
    queryFormDispatch,
    stateNames,
    queryData,
    setQueryData,
    setKpiDataAll,
}) => {
    const submitFormHandler = (e) => {
        e.preventDefault();

        setKpiDataAll([]);
        const { stateCountry, month, year, yearLabel } = queryForm;
        setQueryData({
            ...queryForm,
        });
        console.log(queryForm);
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
                        onChange={(e) =>
                            queryFormDispatch({
                                type: "SET_YEAR_LABEL",
                                payload: e.target.value,
                            })
                        }
                    >
                        {YEARS.map((year, index) => (
                            <option key={index} value={year.label}>
                                {year.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles["form__group"]}>
                    <label htmlFor="month" className={styles["form__label"]}>
                        Month
                    </label>
                    <select
                        type="text"
                        className={styles["form__input"]}
                        name="month"
                        id="month"
                        onChange={(e) =>
                            queryFormDispatch({
                                type: "SET_MONTH",
                                payload: e.target.value,
                            })
                        }
                    >
                        {MONTHS.map((item, index) => (
                            <option key={index} value={item.value}>
                                {item.month}
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

export default DataQueryFormMonthly;
