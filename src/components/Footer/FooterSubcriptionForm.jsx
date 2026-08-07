"use client";
import React, { Fragment } from "react";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import styles from "./footer.module.css";
import { subcription } from "@/lib/api/subscribe";
const FooterSubcriptionForm = () => {
  return (
    <Fragment>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = <p className={styles.fotertInputError}>Required</p>;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = (
              <p className={styles.fotertInputError}>Invalid email address</p>
            );
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          let requestObject = {
            to: values.email,
            subject: "Subcription",
          };
          let result = await subcription(requestObject);
          if (!result.error) {
            if (result.result.isSuccess) {
              toast("Subcribed Successfully!");
              setSubmitting(false);
              resetForm();
            }
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,

          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              className={`${styles.inputstyle}`}
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn ${styles.nvaBtn} ${styles.foterBtn}`}
            >
              Subscribe
            </button>
          </form>
        )}
      </Formik>{" "}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Fragment>
  );
};

export default FooterSubcriptionForm;
