"use client";
import { Formik, Form } from "formik";
import SelectField from "../FormInputs/SelectField";
import TextField from "../FormInputs/TextField";
import EmailField from "../FormInputs/EmailField";
import PhoneField from "../FormInputs/PhoneField";
import TextAreaField from "../FormInputs/TextAreaField";
import styles from "./volunteerform.module.css";
import { requestBecomeAVolunteer } from "@/lib/api/requestBecomeAVolunteer";
import { ToastContainer, toast } from "react-toastify";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{11}$/.test(values.phone)) {
    errors.phone = "Invalid phone number, must be 10 digits";
  }
  if (!values.department) {
    errors.department = "Please select a department";
  }
  if (!values.fullName) {
    errors.fullName = "Please enter your full name";
  }
  if (!values.qualification) {
    errors.qualification = "Please enter your Qualification";
  }
  if (!values.age) {
    errors.age = "Please enter your Age";
  }
  if (!values.experience) {
    errors.experience = "Please enter your previous experience";
  }
  return errors;
};
const VolunteerForm = () => {
  return (
    <div>
      <div className={styles.VolunteerFrom}>
        <Formik
          initialValues={{
            email: "",
            phone: "",
            qualification: "",
            age: "",
            fullName: "",
            department: "",
            experience: "",
          }}
          validate={validate} // Manual validation
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const result = await requestBecomeAVolunteer(values);

            if (!result.error) {
              if (result.result.isSuccess) {
                toast("Subcribed Successfully!");
                setSubmitting(false); // To stop the form from submitting forever
                resetForm(); // Reset the form fields here
              }
            }
          }}
        >
          {({ isSubmitting, resetForm }) => (
            <Form>
              <SelectField
                name="department"
                label="Choose Department/Activity"
                options={[
                  { value: "", label: "Select Department" },
                  {
                    value: "Education and Training",
                    label: "Education and Training",
                  },
                  {
                    value: "Outreach Department",
                    label: "Outreach Department",
                  },
                  {
                    value: "Creative Department",
                    label: "Creative Department",
                  },
                  {
                    value: "Medical Camp",
                    label: "Medical Camp",
                  },
                ]}
              />
              <TextField
                className="mb-3"
                name="fullName"
                isRequired={true}
                errorMessage="Please enter a valid email"
                placeholder="Enter full name"
              />
              <div className="row">
                <EmailField
                  name="email"
                  isRequired={true}
                  errorMessage="Please enter a valid email"
                  placeholder="Email"
                />
                <PhoneField
                  name="phone"
                  isRequired={true}
                  errorMessage="Please enter a valid phone number"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="row">
                <TextField
                  className="col-md-6 mb-3"
                  name="qualification"
                  isRequired={true}
                  errorMessage="Please enter your qualification"
                  placeholder="Qualification"
                />
                <TextField
                  className="col-md-6 mb-3"
                  name="age"
                  isRequired={true}
                  errorMessage="Please enter your Age"
                  placeholder="Age"
                />
                <TextAreaField
                  name="experience"
                  isRequired={true}
                  errorMessage="Please enter your previous experience"
                  placeholder="Previous experience of volunteer activity"
                />
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn px-5 py-3 ${styles.nvaBtn}`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
export default VolunteerForm;
