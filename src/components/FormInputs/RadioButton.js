import React, { useContext } from "react";
import { Field } from "formik";
import styles from "./radioButton.module.css";
import { DonateNowContext } from "@/app/donateNow/DonateNowForm";

const RadioButton = ({ name, value, label, icon, id }) => {
  const [handleNext, handleBack, _donationOption, setDonationOption] = useContext(DonateNowContext);

  return (
    <Field name={name}>
      {({ field, form }) => {
        const { setFieldValue } = form;
        return (
          <div className={`col-md-6 col-lg-4`}>
            <div className={styles.card}>
              <input
                name={name}
                {...field}
                type="radio"
                value={value}
                id={value}
                checked={field.value === value}
                className={`me-2 ${styles.radioBtn}`}
                onChange={(event) => { 
                  setDonationOption(event.target.value)
                  console.log(event.target.value)
                  setFieldValue(name, event.target.value);
                  handleNext();
                }}
              />
              <label htmlFor={value} className={styles.label}>
                <div className={styles.icon}>{icon}</div>
                <h3>{value}</h3>
                <span>{label}</span>
              </label>
            </div>
          </div>
        );
      }}
    </Field>
  );
};

export default RadioButton;
{
  /* <label className="d-flex align-items-center me-3">
        <input
          {...field}
          type="radio"
          value={value}
          checked={field.value === value}
          className="me-2"
        />
        {label}
      </label> */
}
