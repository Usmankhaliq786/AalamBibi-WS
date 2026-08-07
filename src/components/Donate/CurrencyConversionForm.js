import { Fragment, useContext, useState } from "react";
import styles from "./currencyConversionForm.module.css";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { DonateNowContext } from "@/app/donateNow/DonateNowForm";
import { RadioButtonOptions } from "@/lib/data/commonConstants";
import { useEffect } from "react";
import { getExchangeRates } from "@/lib/api/getExchangeRates";
import OthersPaymentMethods from "./OthersPaymentMethods";

const CurrencyConversionForm = () => {
  const [
    handleNext,
    handleBack,
    donationOption,
    setDonationOption,
    currencyRates,
    updateQuantity,
    state,
  ] = useContext(DonateNowContext);
  let option = RadioButtonOptions.find((item) => item.value === donationOption);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const { setFieldValue, values } = useFormikContext();

  const handleDecrement = () => {
    setQuantity((value) => {
      updateQuantity(value > 1 ? value - 1 : value);
      return value > 1 ? value - 1 : value;
    });
  };

  const handleIncrement = () => {
    setQuantity((value) => {
      updateQuantity(value + 1);
      return value + 1;
    });
  };

  const handleBackClick = () => {
    setDonationOption(0);
    handleBack();
  };
  useEffect(() => {
    if (option) {
      const converted = getExchangeRates(
        "PKR",
        "USD",
        option.amount,
        currencyRates?.rates
      );
      setTotalAmount(option.amount);

      setFieldValue("actualAmount", option.amount);
      setFieldValue("convertedAmount", Math.ceil(converted));
    }
  }, [option]);

  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    const converted = getExchangeRates(
      "PKR",
      selectedCurrency,
      values.actualAmount,
      currencyRates?.rates
    );
    setTotalAmount(values.actualAmount);
    setFieldValue("currencyFrom", selectedCurrency);
    setFieldValue("actualAmount", values.actualAmount);
    setFieldValue("convertedAmount", Math.ceil(converted));
  };

  return (
    <Fragment>
      <form>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="currencyFrom" className="form-label">
              Currency Converter
            </label>

            <Field
              as="select"
              id="currencyTo"
              name="currencyTo"
              className="form-select"
            >
              <option value="PKR">PKR</option>
            </Field>
          </div>
          <div className="col-md-6">
            <label htmlFor="currencyTo" className="form-label">
              &nbsp;
            </label>
            <Field
              as="select"
              id="currencyFrom"
              name="currencyFrom"
              className="form-select"
              onChange={handleCurrencyChange} // Attach the handler here
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="AUD">AUD</option>
            </Field>
          </div>
        </div>
        <div className="row mb-4 g-4">
          <div className="col-md-6">
            <Field
              type="number"
              className="form-control"
              id="actualAmount"
              name="actualAmount"
              onChange={(e) => {
                const converted = getExchangeRates(
                  "PKR",
                  "USD",
                  e.target.value,
                  currencyRates?.rates
                );
                setTotalAmount(e.target.value);
                setFieldValue("actualAmount", e.target.value);
                setFieldValue("convertedAmount", converted);
              }}
              disabled={option.id !== 4 ? true : false}
            />
          </div>
          <div className="col-md-6">
            <Field
              type="number"
              id="convertedAmount"
              name="convertedAmount"
              className="form-control"
              disabled={true}
            />
          </div>
          <ErrorMessage
            name={"actualAmount"}
            component="p"
            className="error_message"
          />
        </div>
        <div className="row align-items-center mb-4">
          <div
            className="mb-4
          "
          >
            <label className="form-label">{option?.text}</label>
            {option.id !== 4 && (
              <div className="input-group">
                <a href="#" className="minsBtn" onClick={handleDecrement}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="8" fill="#26237D" />
                    <path
                      d="M8.75 14H19.25"
                      stroke="white"
                      strokeWidth="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <p className=" text-center px-4 m-0 text-aline-center">
                  <strong>{quantity}</strong>
                </p>
                <a href="#" className="minsBtn" onClick={handleIncrement}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="8" fill="#26237D" />
                    <path
                      d="M13.9993 8.16602V19.8327M8.16602 13.9993H19.8327"
                      stroke="white"
                      strokeWidth="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
          <div className="">
            <p className="mb-0">Total amount</p>
            <h4 className="fw-bold">Rs. {totalAmount * quantity}</h4>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-warning continue">
          Continue
        </button>
      </div>
    </Fragment>
  );
};
export default CurrencyConversionForm;
