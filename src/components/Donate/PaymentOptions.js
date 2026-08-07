import React, { useContext } from "react";
import OthersPaymentMethods from "./OthersPaymentMethods";
import { DonateNowContext } from "@/app/donateNow/DonateNowForm";

const PaymentOptions = ({ children }) => {
  const [
    handleNext,
    handleBack,
    donationOption,
    setDonationOption,
    currencyRates,
    updateQuantity,
    state,
  ] = useContext(DonateNowContext); 
  return (
    <div className="row justify-content-between px-3">
      <div className="col-md-6 col-lg-5">
        <h2> Pay online </h2>
        <div className="d-flex gap-3 py-3 backIcon">
          {/* <button
                    type="button"
                    className="btn btn-outline-warning px-4"
                    onClick={handleBackClick}
                  > </button> */}
                  
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="c-pointer"
            onClick={handleBack}
          >
            <path
              d="M7.24654 12C7.24654 12.3462 7.36193 12.5769 7.5927 12.8077L12.4389 17.6538C12.9004 18.1154 13.5927 18.1154 14.0542 17.6538C14.5158 17.1923 14.5158 16.5 14.0542 16.0385L10.0158 12L14.0542 7.96154C14.5158 7.5 14.5158 6.80769 14.0542 6.34615C13.5927 5.88462 12.9004 5.88462 12.4389 6.34615L7.5927 11.1923C7.36193 11.4231 7.24654 11.6538 7.24654 12Z"
              fill="#26237D"
            />
          </svg>

          <span>{state.donationOption}</span>

          {Object.keys(state.userDetails).length!==0 &&<> <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.24654 12C7.24654 12.3462 7.36193 12.5769 7.5927 12.8077L12.4389 17.6538C12.9004 18.1154 13.5927 18.1154 14.0542 17.6538C14.5158 17.1923 14.5158 16.5 14.0542 16.0385L10.0158 12L14.0542 7.96154C14.5158 7.5 14.5158 6.80769 14.0542 6.34615C13.5927 5.88462 12.9004 5.88462 12.4389 6.34615L7.5927 11.1923C7.36193 11.4231 7.24654 11.6538 7.24654 12Z"
              fill="#26237D"
            />
          </svg>

          <span> Rs. {state.userDetails.actualAmount*state.quantity} </span></>}
         
        </div>
        {children}
      </div>
      <div className="col-md-5">
        <h2>Other Payment Modes</h2>
        <OthersPaymentMethods />
      </div>
    </div>
  );
};

export default PaymentOptions;
