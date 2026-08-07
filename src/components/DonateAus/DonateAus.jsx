"use client";
import React from "react";
import { DownloadPdfIcon } from "@/lib/svgs/svgIcons";
import newImage from "../../../public/images/newImage.png";
import Image from "next/image";
// import styles from "./DonateAus.module.css";
import styles from "./DonateAus.module.css";
import { toast } from "react-toastify";
import { reportsAndCertificates } from "@/lib/data/reportsAndCertificates";
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

const DonateAus = () => {
  return (
    <div className={`container ${styles.new_container}`}>
      <div className="row justify-content-between">
        <div
          className={`col-12 col-xl-6  ${styles.rightColumn}   ${styles.LeftSide} `}
        >
          <div className={styles.storyImg}>
            <Image
              className={styles.ourImg}
              src={newImage}
              width={685}
              height={542}
              alt="learning under tree"
            />
          </div>
        </div>

        <div className={`col-12 col-xl-6  ${styles.rightSide}`}>
          <h1 className={styles.donateTitle} > Donate Now </h1>

          <div className="banck_details">
            <div className="col-12 m-auto">
              <div className={` ${styles.BankInfoHeading}`}>
                <h3> Bank Account Details </h3>
                <hr />
              </div>
              <div className="accordionContent">
                <p>
                  Account Title:
                  <span> Aalam Bibi Foundation Aus</span>
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
                  BSB:
                  <span> 012370 </span>
                  <span className="d-flex justify-content-center">
                    <CopyToClipBoard text={"012370"} />
                  </span>
                </p>

                <p className="d-flex gap-3">
                  Email:
                  <span> aalambibiaus@gmail.com </span>
                  <span className="d-flex justify-content-center">
                    <CopyToClipBoard text={"aalambibiaus@gmail.com"} />
                  </span>
                </p>

                <p className="d-flex gap-3">
                  Whats App Number:
                  <span> +61 412076864 </span>
                  <span className="d-flex justify-content-center">
                    <CopyToClipBoard text={"+61 412076864"} />
                  </span>
                </p>

                <p>
                  Bank Address:
                  <span> ANZ Bank, Church Street, Parramatta NSW 2150</span>
                </p>
              </div>
            </div>
          </div>

          <div className={`col-lg-6 col-12 col-md-6 col-xl-8   ${styles.reportCard}`}>
            <a
              href="/pdf/ABF_DDR_Form.pdf"
              download
              className={styles.downloadLink}
              rel="noopener noreferrer"
              type="application/pdf"
            >
              <DownloadPdfIcon />
              <div className={styles.reportContent}>
                <strong>Download ABF DDR Form.pdf</strong>
              </div>
            </a>
          </div>

          {/* <div
            className={`col-lg-6 col-12  ${styles.reportCard} ${styles.new_downloadBtn}`}
          > 

          <div className={`${styles.test}`}>
            <DownloadPdfIcon />

          </div>
            <div className={`${styles.reportContent}`}>
             Download ABR DDR Form.pdf
            </div>
            <a href="/pdf/Aalam_Bibi_Trust_ Annual-report_2022.pdf"
              download
            ></a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default DonateAus;
