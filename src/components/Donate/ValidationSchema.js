import * as Yup from "yup";

// Step 1: Validate only "donation"
export const step1ValidationSchema = Yup.object().shape({});

// Step 2: Validate currency-related fields
export const step2ValidationSchema = Yup.object().shape({
  actualAmount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive"),
});

// Step 3: Validate all remaining fields
export const step3ValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  province: Yup.string().required("Province is required"),
  city: Yup.string().required("City is required"),
  zipCode: Yup.string()
    .matches(/^[0-9]+$/, "Zip code must be numeric")
    .required("Zip code is required"),
});
