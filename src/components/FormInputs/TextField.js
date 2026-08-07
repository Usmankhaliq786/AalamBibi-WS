import React from "react";
import { Field } from "formik";
import classes from "./emailfield.module.css"; // Your custom CSS

const TextField = ({ name, isRequired, errorMessage, placeholder, className }) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <div className={className}>
          <input
            {...field}
            type="text"
            placeholder={placeholder}
            className={`form-control fromInput  py-2 `}
          />
          {form.errors[name] && form.touched[name] && (
            <div className={classes.error_message}>{form.errors[name]}</div>
          )}
        </div>
      )}
    </Field>
  );
};

export default TextField;
