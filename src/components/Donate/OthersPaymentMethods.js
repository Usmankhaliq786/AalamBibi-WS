import React from "react";
import styles from "./currencyConversionForm.module.css";
import { toast } from "react-toastify";

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
      className="c-pointer"
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
const OthersPaymentMethods = () => {
  return (
    <div
      className="accordion beforeBorderSecondColumn otherPaymentMethods"
      id="accordionExample"
    >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Bank Transfer Pakistan
          </button>
        </h2>

        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="col-12 m-auto">
              <div className={` ${styles.BankInfoHeading}`}>
                <hr />
                <h4>Pakistan Bank Account Detail</h4>
              </div>
              <div className="accordionContent">
                <p>
                  Account Title:
                  <span> Aalam Bibi Foundation </span>
                </p>
                <p>
                  Bank:
                  <span> MCB Bank</span>
                </p>
                <p className="d-flex gap-3">
                  Account Number:
                  <span>0783391471000489</span>
                  <span className="d-flex justify-content-center">
                    <CopyToClipBoard text={"0783391471000489"} />
                  </span>
                </p>

                <p className="d-flex gap-3">
                  IBAN
                  <span>PK55 MUCB 0783 3914 7100 0489</span>
                  <span className="d-flex justify-content-center">
                    <CopyToClipBoard text={"PK55 MUCB 0783 3914 7100 0489"} />
                  </span>
                </p>

                <p>
                  Branch Code:
                  <span> 1747 </span>
                </p>

                <p>
                  SWIFT Code:
                  <span> MUCBPKKA </span>
                </p>

                <p>
                  Bank Address:
                  <span>
                    7-B Commercial Area Pak Arab Society, Ferozepur Road, Lahore
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOneThree"
            aria-expanded="true"
            aria-controls="collapseOneThree"
          >
            Bank Transfer Australia
          </button>
        </h2>
        <div
          id="collapseOneThree"
          className="accordion-collapse collapse"
          data-bs-parent="#collapseOneThree"
        >
          <div className="accordion-body">
            <div className="col-12 m-auto">
              <div className={` ${styles.BankInfoHeading}`}>
                <hr />
                <h4>Australian Bank Account Detail</h4>
              </div>
              <div className="accordionContent">
                <p>
                  Account Title:
                  <span> Aalam Bibi Foundation Aus </span>
                </p>
                <p>
                  Bank:
                  <span> ANZ Bank</span>
                </p>
                <p className="d-flex gap-3">
                  Account Number:
                  <span>669787255</span>
                  <span className="d-flex justify-content-center">
                    <CopyToClipBoard text={"669787255"} />
                  </span>
                </p>

                <p className="d-flex gap-3">
                  BSB
                  <span> 012370</span>
                  <span className="d-flex justify-content-center">
                    <CopyToClipBoard text={"012370"} />
                  </span>
                </p>

                <p>
                  Bank Address:
                  <span>ANZ Bank, Church Street, Parramatta NSW 2150</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOneTwo"
            aria-expanded="true"
            aria-controls="collapseOneTwo"
          >
            Bank Transfer USA
          </button>
        </h2>
        <div
          id="collapseOneTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#collapseOneTwo"
        >
          <div className="accordion-body">
            <div className="col-12 m-auto">
              <div className={` ${styles.BankInfoHeading}`}>
                <h4>USA Bank Account Detail</h4>
              </div>

              <div className="accordionContent">
                <p>
                  Account Title:
                  <span> Aalam Bibi Foundation Inc, USA </span>
                </p>

                <p className="d-flex gap-3">
                  Account Number:
                  <span>4439585394</span>
                  <span className="d-flex justify-content-center">
                    <CopyToClipBoard text={"4439585394"} />
                  </span>
                </p>

                <p className="d-flex gap-3">
                  SWIFT Code:
                  <span> NRTHUS33XXX</span>
                  <span className="d-flex justify-content-center">
                    <CopyToClipBoard text={"NRTHUS33XXX"} />
                  </span>
                </p>
                <p className="d-flex gap-3">
                  Routing:
                  <span> 026013673</span>
                  <span className="d-flex justify-content-center">
                    <CopyToClipBoard text={"026013673"} />
                  </span>
                </p>

                <p>
                  Zelle:
                  <span>Donate@aalambibi.org</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOneFourth"
            aria-expanded="true"
            aria-controls="collapseOneFourth"
          >
            Online Transfer UK
          </button>
        </h2>
        <div
          id="collapseOneFourth"
          className="accordion-collapse collapse"
          data-bs-parent="#collapseOneFourth"
        >
          <div className="accordion-body">
            <div className="col-12 m-auto">
              <div className={` ${styles.BankInfoHeading}`}>
                <hr />
                <small>
                  Donation from UK please use{" "}
                  <a href="https://www.remitly.com/" target="_blank">
                    remitly.com
                  </a>{" "}
                </small>
                <small className="d-block">
                  Note:Use Aalam Bibi Tittle for transfer through remitly
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Doorstep Collection
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="col-12 d-blocl m-auto">
              {/* <div
                className={`d-flex justify-content-between ${styles.BankInfoHeading}`}
              >
                <h4> Doorstep Collection</h4>
              </div>
              <div className={styles.BankInfoHeading}>
                <h4> Total amount: Rs. 8,000 </h4>
              </div>
              <hr /> */}
              <hr />
              <p>
                Aalam Bibi can collect donations from your place within Lahore.
                Kindly contact via WhatsApp or email.
              </p>

              <div className={`accordionContent ${styles.EmailAndWhatsapp}`}>
                <p>
                  Email: <span> aalambibitrust@gmail.com </span>
                  <span className="d-inline-block ms-2">
                    <CopyToClipBoard text="AALAM BIBI FOUNDATION" />
                  </span>
                </p>

                <p>
                  WhatsApp: <span> +92320 6051234 </span>
                  <span className="d-inline-block ms-2">
                    <CopyToClipBoard text="+92320 6051234" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item ">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Cross Cheque
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="col-12 d-blocl m-auto">
              {/* <div
                className={`d-flex justify-content-between ${styles.BankInfoHeading}`}
              >
                <h4> Doorstep Collection</h4>
              </div> */}

              {/* <hr /> */}
              <hr />
              <p>Kindly post the Cross Cheque on this Address:</p>
              <p>
                <strong>
                  {" "}
                  House# 1, Street # 6 , Mian Chowk, Kacha Jail Road, Chungi
                  Amar Sadhu, Lahore{" "}
                </strong>
              </p>

              <p>
                {" "}
                Kindly share a picture of your deposit slip via email or
                Whatsapp so that we can send you the receipt{" "}
              </p>

              <div className={`accordionContent ${styles.EmailAndWhatsap}`}>
                <p>
                  Email: <span> aalambibitrust@gmail.com </span>
                  <span className="d-inline-block ms-2">
                    <CopyToClipBoard text="AALAM BIBI FOUNDATION" />
                  </span>
                </p>

                <p>
                  WhatsApp: <span>+92320 6051234 </span>
                  <span className="d-inline-block ms-2">
                    <CopyToClipBoard text="+92320 6051234" />{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OthersPaymentMethods;
