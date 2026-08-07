import React from "react";
import { Field } from "formik";
import classes from "./emailfield.module.css"; // Your custom CSS

const PhoneField = ({ name, isRequired, errorMessage, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <div className="col-md-6 mb-3">
          <input
            {...field}
            type="tel"
            placeholder={placeholder}
            className="form-control fromInput py-2"
          />
          {form.errors[name] && form.touched[name] && (
            <div className={classes.error_message}>{form.errors[name]}</div>
          )}
        </div>
      )}
    </Field>
  );
};

export default PhoneField;
