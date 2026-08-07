import { Form, Formik } from "formik";
import styles from "./userInfoForm.module.css";
import TextField from "../FormInputs/TextField";
import EmailField from "../FormInputs/EmailField";
import PhoneField from "../FormInputs/PhoneField";
import TextAreaField from "../FormInputs/TextAreaField";
import { Fragment, useContext } from "react";
import { DonateNowContext } from "@/app/donateNow/DonateNowForm";
import { RadioButtonOptions } from "@/lib/data/commonConstants";

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
  if (!values.address) {
    errors.address = "Please write the address";
  }
  if (!values.firstName) {
    errors.firstName = "Please enter your First name";
  }
  if (!values.lastName) {
    errors.lastName = "Please enter your last name";
  }
  if (!values.country) {
    errors.country = "Please enter your Country";
  }
  if (!values.province) {
    errors.province = "Please enter your Province";
  }
  if (!values.city) {
    errors.city = "Please enter your city";
  }
  if (!values.zipCode) {
    errors.zipCode = "Please enter your Zip/Postal Code";
  }
  return errors;
};
// import styles from "./Donate.module.css";
const UserInfoForm = () => {
  const [handleNext, handleBack, donationOption] = useContext(DonateNowContext);

  return (
    <Fragment>
      <div className="row sponsorRow">
        <EmailField
          name="firstName"
          isRequired={true}
          errorMessage="Please enter a valid email"
          placeholder="Enter First Name"
        />

        <EmailField
          name="lastName"
          isRequired={true}
          errorMessage="Please enter a valid email"
          placeholder="Enter Last Name"
        />
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
          placeholder="Contact no."
        />
      </div>
      <TextAreaField
        name="address"
        isRequired={true}
        errorMessage="Please enter your Address"
        placeholder="Address"
      />
      <div className="row">
        <TextField
          className="col-md-6 mb-3"
          name="province"
          isRequired={true}
          errorMessage="Please enter your Province"
          placeholder="Province"
        />
        <TextField
          className="col-md-6 mb-3"
          name="country"
          isRequired={true}
          errorMessage="Please enter your Country"
          placeholder="Country"
        />

        <TextField
          className="col-md-6 mb-3"
          name="zipCode"
          isRequired={true}
          errorMessage="Please enter your Zip/Postal Code"
          placeholder="Zip/Postal Code"
        />
        <TextField
          className="col-md-6 mb-3"
          name="city"
          isRequired={true}
          errorMessage="Please enter your City"
          placeholder="City"
        />
      </div>
      <div className="row justify-content-between">
        <div className="col-6 pt-2">
        <button type="submit" className="btn btn-warning sponsorFormButtons">
          Pay via Payfast
        </button>
        </div>
      </div>
    </Fragment>
  );
};
export default UserInfoForm;
