import { Fragment, useState } from "react";
import styles from "./currencyConversionForm.module.css";
import PayFastForm from "./PayFast";
import Portal from "../Popup/Portal";
import { paymentMethods } from "@/lib/data/commonConstants";
import { toast } from "react-toastify";
import { useContext } from "react";
import { DonateNowContext } from "@/app/donateNow/DonateNowForm";  


function copyToClipboard(text) {
  if (!text) {
    console.error("No text provided to copy.");
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast("Copied!");
    })
    .catch((err) => {
      console.error("Failed to copy text:", err);
    });
}

const CopyToClipBoard = ({ text }) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        copyToClipboard(text);
      }}
    >
      <path
        d="M9.52734 18H2.8125C1.26165 18 0 16.7383 0 15.1875V5.66016C0 4.10931 1.26165 2.84766 2.8125 2.84766H9.52734C11.0782 2.84766 12.3398 4.10931 12.3398 5.66016V15.1875C12.3398 16.7383 11.0782 18 9.52734 18ZM2.8125 4.25391C2.03713 4.25391 1.40625 4.88479 1.40625 5.66016V15.1875C1.40625 15.9629 2.03713 16.5938 2.8125 16.5938H9.52734C10.3027 16.5938 10.9336 15.9629 10.9336 15.1875V5.66016C10.9336 4.88479 10.3027 4.25391 9.52734 4.25391H2.8125ZM15.1523 13.4297V2.8125C15.1523 1.26165 13.8907 0 12.3398 0H4.53516C4.14679 0 3.83203 0.314754 3.83203 0.703125C3.83203 1.0915 4.14679 1.40625 4.53516 1.40625H12.3398C13.1152 1.40625 13.7461 2.03713 13.7461 2.8125V13.4297C13.7461 13.8181 14.0608 14.1328 14.4492 14.1328C14.8376 14.1328 15.1523 13.8181 15.1523 13.4297Z"
        fill="#9895FA"
      />
    </svg>
  );
};

const PaymentOptionsInfo = ({ activePaymentMethod }) => {
  switch (activePaymentMethod) {
    case 101:
      return (
        <div className={`row ${styles.contentCenter}`}>
          <div className={`col-8 col-lg-7 col-md-7  ${styles.BankInfo}`}>
            <PayFastForm />
          </div>
        </div>
      );
    case 2:
      return (
       <Fragment>
         <div className="col-10 m-auto">
          <div
            className={` ${styles.BankInfoHeading}`}
          >
            <h4>Bank transfer</h4>
          </div>
          <div className={styles.BankInfoHeading}>
            <h4> Total amount: Rs. 8,000 </h4>{" "}
          </div>
          <hr />

          <span> Account Title: </span>
          <p>
            <strong> AALAM BIBI FOUNDATION </strong>
          </p>
          <span> Branch Code: </span>
          <p>
            <strong> 1747 </strong>
          </p>
          <span> Accoun Number: </span>
          <p className="d-flex gap-3">
            <strong> 0783391471000489 </strong>
            <span className="d-flex justify-content-center">
              <CopyToClipBoard text={"0783391471000489"} />
            </span>
          </p>

          <span> IBAN </span>
          <p className="d-flex gap-3">
            <strong> 0783391471000489aa </strong>
            <span className="d-flex justify-content-center">
              <CopyToClipBoard text={"0783391471000489aa"} />
            </span>
          </p>
          <span> Branch Address: </span>
          <p>
            <strong>
             
              7-B Commercial Area Pak Arab Society, Ferozepur Road, Lahore,
              Pakistan.
            </strong>
          </p>
          <hr />

          <p>
            Kindly share a picture of your deposit slip via email or Whatsapp so
            that we can send you the receipt
          </p>

          <span> Email: </span>
          <p className="gap-3 d-flex">
            <strong> aalambibifoundation@gmail.com </strong>{" "}
            <span>
              <CopyToClipBoard text="aalambibifoundation@gmail.com" />
            </span>
          </p>

          <span> WhatsApp:</span>
          <p className="d-flex gap-3">
            <strong> +92320 6051234 </strong>
            <span>
              <CopyToClipBoard text="+92320 6051234" />
            </span>
          </p>
        </div>
        
       </Fragment>
      );
    case 3:
      return (
        <div className="col-10 d-blocl m-auto">
          <div
            className={`d-flex justify-content-between ${styles.BankInfoHeading}`}
          >
            <h4> Doorstep Collection</h4>
          </div>
          <div className={styles.BankInfoHeading}>
            <h4> Total amount: Rs. 8,000 </h4>
          </div>
          <hr />

          <p>
            Aalam Bibi can collect donations from your place within Lahore.
            Kindly confirm doorstep collection, Our team will contact you
            shortly.
          </p>
          <div className="d-flex justify-content-center pt-4">
            <button className="btn1 btn2">Confirm </button>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="col-10 d-blocl m-auto">
          {/* <div className="d-flex justify-content-between"> */}
          <div className={`d-flex justify-content-between ${styles.BankInfoHeading}`}>
            <h4> Cross Cheque</h4>
          </div>
          <h5> Total amount: Rs. 8,000 </h5>

          <hr />

          <span> Kindly post the Cross Cheque on this Address: </span>
          <p>
            <strong>
              House # 1 , Street # 6 , Mian Chowk, Kacha Jail Road, Chungi Amar
              Sadhu, Lahore{" "}
            </strong>
          </p>

          <hr />

          <p>
            Kindly share a picture of your deposit slip via email or Whatsapp so
            that we can send you the receipt
          </p>

          <span> Email: </span>
          <p className="gap-3 d-flex">
            <strong> aalambibitrust@gmail.com </strong>{" "}
            <span>
              <CopyToClipBoard text="aalambibitrust@gmail.com" />
            </span>
          </p>

          <span> WhatsApp:</span>
          <p className="d-flex gap-3">
            <strong> +92320 6051234 </strong>
            <span>
              <CopyToClipBoard text="+92320 6051234" />
            </span>
          </p>
        </div>
      );
    default:
      return null;
  }
};

const PaymentMethods = () => {
  const [activePaymentMethod, setactivePaymentMethod] = useState(2);
  const [showPopUp, setShowPopUp] = useState(false);
  const [
    _handleNext,
    _handleBack,
    _donationOption,
    _setDonationOption,
    _currencyRates,
    _updateQuantity,
    state,
  ] = useContext(DonateNowContext);  
 

  const handlePayment =async (id) => {
    if (id===1) {
      
    }else{
      setShowPopUp(true);
      setactivePaymentMethod(id);
    }
   
  };
  return (
    <Fragment>
      <h2 className="text-center">Total amount: Rs. 8,000 </h2>
      <div className={`row ${styles.PaymentTapButtons}`}>
        {paymentMethods.map((item) => {
          return (
            <div
              className={` col-md-4 col-lg-3 col-xl-2`}
              key={item.value}
              onClick={handlePayment.bind(null, item.value)}
            >
              <div className={styles.card}>
                <label className={styles.label}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h3>{item.name}</h3>
                </label>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container">
        <div className={`row ${styles.contentCenter}`}></div>
      </div>
      {showPopUp && (
        <Portal onClose={() => setShowPopUp(false)}>
          <PaymentOptionsInfo activePaymentMethod={activePaymentMethod} />
        </Portal>
      )}
    </Fragment>
  );
};
export default PaymentMethods;
