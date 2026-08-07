import React from "react";
import { Field } from "formik";
import classes from "./selectfield.module.css"; // Your custom CSS

const SelectField = ({ name, label, options }) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <div className={classes.form_item}>
          <div className="mb-3">
            <label htmlFor={name} className="form-label">
              {label}
            </label>
          </div>
          <select
            id={name}
            {...field}
            className="form-select py-2"
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {form.errors[name] && form.touched[name] && (
            <div className={classes.error_message}>{form.errors[name]}</div>
          )}
        </div>
      )}
    </Field>
  );
};

export default SelectField;
