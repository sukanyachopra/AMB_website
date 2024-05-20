import React from "react";
import styles from "./ContactQueryCard.module.css";
const ContactQueryCard = () => {
  return (
    <div className={styles["card-container"]}>
      <h2 className={styles["card-heading"]}>Submit your queries</h2>
      <div className={styles["card-content"]}>
        <form className={styles["form"]}>
          <div
            className={`${styles["form__group-1"]} ${styles["form__group"]}`}
          >
            <label htmlFor="querytype" className={styles["form__label"]}>
              Query Type <span className={styles["required-star"]}>*</span>
            </label>
            <select
              name="querytype"
              id="querytype"
              required
              className={styles["form__input"]}
            >
              <option value="">Please select one</option>
              <option value="Program Related">Programme Related</option>
              <option value="Dashboard Related">Dashboard Related</option>
            </select>
          </div>
          <div
            className={`${styles["form__group-2"]} ${styles["form__group"]}`}
          >
            <label className={styles["form__label"]} htmlFor="name">
              Your Name <span className={styles["required-star"]}>*</span>
            </label>
            <input
              className={styles["form__input"]}
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div
            className={`${styles["form__group-3"]} ${styles["form__group"]}`}
          >
            <label className={styles["form__label"]} htmlFor="email">
              Your Email <span className={styles["required-star"]}>*</span>
            </label>
            <input
              className={styles["form__input"]}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div
            className={`${styles["form__group-4"]} ${styles["form__group"]}`}
          >
            <label className={styles["form__label"]} htmlFor="subject">
              Subject <span className={styles["required-star"]}>*</span>
            </label>
            <input
              className={styles["form__input"]}
              type="text"
              name="subject"
              id="subject"
              required
            />
          </div>
          <div
            className={`${styles["form__group-5"]} ${styles["form__group"]}`}
          >
            <label className={styles["form__label"]} htmlFor="message">
              Message <span className={styles["required-star"]}>*</span>
            </label>
            <textarea
              className={styles["form__input"]}
              name="message"
              id="message"
              required
            />
          </div>
          <div
            className={`${styles["form__group-6"]} ${styles["form__group"]}`}
          >
            <label className={styles["form__label"]} htmlFor="organization">
              Organization <span className={styles["required-star"]}>*</span>
            </label>
            <input
              className={styles["form__input"]}
              type="text"
              name="organization"
              id="organization"
              required
            />
          </div>
          <div
            className={`${styles["form__group-7"]} ${styles["form__group"]}`}
          >
            <label className={styles["form__label"]} htmlFor="contact">
              Contact No.
            </label>
            <input
              className={styles["form__input"]}
              type="text"
              name="contact"
              id="contact"
              required
            />
          </div>
          <div
            className={`${styles["form__group-8"]} ${styles["form__group"]}`}
          >
            <label className={styles["form__label"]} htmlFor="file">
              File
            </label>
            <input
              className={styles["form__input"]}
              type="file"
              name="file"
              id="file"
              required
            />
          </div>
          <div
            className={`${styles["form__group-9"]} ${styles["form__group"]}`}
          >
            <button type="submit" className={styles["submit-btn"]}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactQueryCard;
