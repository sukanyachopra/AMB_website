import React, { useState } from "react";
import styles from "./KpiIndexSelector.module.css";
import { DATA_NAMES } from "../../constants";
const KpiIndexSelector = ({ dataIndexName, setDataIndexName }) => {
    const [index, setIndex] = useState(dataIndexName);
    const formSubmitHandler = (e) => {
        e.preventDefault();
        setDataIndexName(index);
    };

    return (
        <div className={styles["form-container"]}>
            <form onSubmit={formSubmitHandler} className={styles["form"]}>
                <select
                    name="index"
                    id="index"
                    value={index}
                    className={styles["form__input"]}
                    onChange={(e) => setIndex(e.target.value)}
                >
                    {DATA_NAMES.map((dataName, index) => (
                        <option key={index} value={dataName.key}>
                            {dataName.value}
                        </option>
                    ))}
                </select>
                <button type="submit" className={styles["submit-btn"]}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default KpiIndexSelector;
