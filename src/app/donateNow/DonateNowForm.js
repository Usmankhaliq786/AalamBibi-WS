"use client";
import React, {   useReducer } from "react";
import DonateController from "@/components/Donate/DonateController";
import { Form, Formik } from "formik";
import {
  step1ValidationSchema,
  step2ValidationSchema,
  step3ValidationSchema,
} from "@/components/Donate/ValidationSchema"; 

const steps = ["1", "2", "3"];

export const DonateNowContext = React.createContext();
const initialState = {
  donationOption: null,
  activeStep: 0,
  completed: {},
  quantity: 1,
  userDetails: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DONATION_OPTION":
      return { ...state, donationOption: action.payload };
    case "NEXT_STEP":
      const newActiveStep =
        action.isLastStep && !action.allStepsCompleted
          ? steps.findIndex((step, i) => !(i in state.completed))
          : state.activeStep + 1;
      return { ...state, activeStep: newActiveStep };
    case "PREV_STEP":
      return { ...state, activeStep: state.activeStep - 1 };
    case "COMPLETE_STEP":
      return {
        ...state,
        completed: { ...state.completed, [state.activeStep]: true },
      };
    case "SET_FORM_DETAILS":
      return { ...state, userDetails: action.payload };
    case "UPDATE_QUANTITY":
      return { ...state, quantity: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
const validationSchemas = [
  step1ValidationSchema,
  step2ValidationSchema,
  step3ValidationSchema,
];

const Heading = ({ activeStep, donationOption }) => {
  switch (activeStep) {
    case 0:
      return <h1>No Donation Is Too Small To Transform Lives.</h1>;
    case 1:
      return <h1>{donationOption}</h1>;
    case 2:
      return <h1>Enter Your Information</h1>;
    case 3:
      return <h1>Choose payment method</h1>;
    default:
      break;
  }
};

const DonateNowForm = ({ currencyRates }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const totalSteps = () => steps.length;
  const completedSteps = () => Object.keys(state.completed).length;
  const isLastStep = () => state.activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps(); 

  return (
    <div className="row justify-content-center">
      <DonateNowContext.Provider
        value={[
          () =>
            dispatch({
              type: "NEXT_STEP",
              isLastStep: isLastStep(),
              allStepsCompleted: allStepsCompleted(),
            }),
          () => dispatch({ type: "PREV_STEP" }),
          state.donationOption,
          (value) =>
            dispatch({
              type: "SET_DONATION_OPTION",
              payload: value,
            }),
          currencyRates,
          (value) =>
            dispatch({
              type: "UPDATE_QUANTITY",
              payload: value,
            }),
          state,
        ]}
      >
        <Formik
          initialValues={{
            donation: "",
            currencyFrom: "PKR",
            currencyTo: "USD",
            actualAmount: "",
            convertedAmount: "",
            email: "",
            phone: "",
            address: "",
            country: "",
            firstName: "",
            lastName: "",
            province: "",
            city: "",
            zipCode: "",
          }}
          validationSchema={validationSchemas[state.activeStep]}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            if (state.activeStep == 2) {
              try {
                const { quantity } = state;
                const formData = {
                  basket_id:
                    values.donation.replace(/ /g, "") + "-" + Date.now(),
                  trans_amount: values.actualAmount * quantity.toString(),
                  currency_code: "PKR",
                  order_date: new Date().toISOString(),
                  customer_email: values.email,
                  customer_phone: values.phone,
                  txn_desc: values.donation,
                };

                const response = await fetch("/api/getAccessToken", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (!response.ok || !data.token) {
                  alert(
                    "Failed to fetch token: " + (data.error || "Unknown error")
                  );
                  return;
                }

                // Create the form dynamically
                const form = document.createElement("form");
                form.id = "PayFast_payment_form";
                form.name = "PayFast-payment-form";
                form.method = "post";
                form.action = process.env.PAYMENT_URL;

                // Define form fields
                const fields = [
                  {
                    label: "Currency Code:",
                    name: "CURRENCY_CODE",
                    value: "PKR",
                  },
                  {
                    label: "Merchant ID:",
                    name: "MERCHANT_ID",
                    value: process.env.MERCHANT_ID,
                  },
                  {
                    label: "Merchant Name:",
                    name: "MERCHANT_NAME",
                    value: "Aalam Bibi Foundation",
                  },
                  { label: "Token:", name: "TOKEN", value: data.token },
                  {
                    label: "Success URL:",
                    name: "SUCCESS_URL",
                    value: `${window.location.origin}${process.env.SUCCESS_URL}`,
                  },
                  {
                    label: "Failure URL:",
                    name: "FAILURE_URL",
                    value: `${window.location.origin}${process.env.FAILURE_URL}`,
                  },
                  {
                    label: "Checkout URL:",
                    name: "CHECKOUT_URL",
                    value: `${window.location.origin}${process.env.CHECKOUT_URL}`,
                  },
                  {
                    label: "Customer Email:",
                    name: "CUSTOMER_EMAIL_ADDRESS",
                    value: formData.customer_email,
                  },
                  {
                    label: "Customer Mobile:",
                    name: "CUSTOMER_MOBILE_NO",
                    value: formData.customer_phone,
                  },
                  {
                    label: "Transaction Amount:",
                    name: "TXNAMT",
                    value: formData.trans_amount,
                  },
                  {
                    label: "Basket ID:",
                    name: "BASKET_ID",
                    value: formData.basket_id,
                  },
                  {
                    label: "Order Date:",
                    name: "ORDER_DATE",
                    value: formData.order_date,
                  },
                ];

                // Add fields to the form
                fields.forEach((field) => {
                  const input = document.createElement("input");
                  input.type = "hidden"; // Hidden inputs for silent submission
                  input.name = field.name;
                  input.value = field.value;
                  form.appendChild(input);
                });

                // Append form to the body
                document.body.appendChild(form);

                // Automatically submit the form
                form.submit();
              } catch (error) {
                console.error("Error during form submission:", error);
              }
            } else {
              dispatch({
                type: "NEXT_STEP",
                isLastStep: isLastStep(),
                allStepsCompleted: allStepsCompleted(),
              });
              dispatch({
                type: "SET_FORM_DETAILS",
                payload: values,
              });
            }
          }}
        >
          {({ isSubmitting, resetForm }) => (
            <Form>
              <DonateController activeStep={state.activeStep} />
            </Form>
          )}
        </Formik>
      </DonateNowContext.Provider>
    </div>
  );
};

export default DonateNowForm;
