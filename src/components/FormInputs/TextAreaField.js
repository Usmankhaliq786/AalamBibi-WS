import React from "react";
import { Field } from "formik";
import classes from "./textarea.module.css"; // Your custom CSS

const TextAreaField = ({ name, isRequired, errorMessage, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <div className="mb-3">
          <textarea
            {...field}
            id={name}
            rows="3"
            placeholder={placeholder}
            className="form-control fromInput py-3 "
          />
          {form.errors[name] && form.touched[name] && (
            <div className={classes.error_message}>{form.errors[name]}</div>
          )}
        </div>
      )}
    </Field>
  );
};

export default TextAreaField;
