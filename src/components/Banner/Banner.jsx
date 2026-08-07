import React from "react";
// import "./globals.css";

// import styles from "./Banner.css"
// import Image from 'next/image'
// import baner from "../../../public/images/Bannner.png"

const Banner = () => {
  return (
    <>
      {/* <div className={`${styles.test}`}> */}

      <div className="bg-info w-25 p-5 border-1 mainDiv">
        <div className="just">
          <h5>number of students </h5>
          <h1> 19k+</h1>
        </div>

        <div className="shaap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="254"
            height="201"
            viewBox="0 0 254 201"
            fill="none"
          >
            <mask id="path-1-inside-1_1478_84" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 91C10.7452 91 0 101.745 0 115V177C0 190.255 10.7452 201 24 201H230C243.255 201 254 190.255 254 177V24C254 10.7452 243.255 0 230 0H114C100.745 0 90 10.7452 90 24V51C90 73.0914 72.0914 91 50 91H24Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 91C10.7452 91 0 101.745 0 115V177C0 190.255 10.7452 201 24 201H230C243.255 201 254 190.255 254 177V24C254 10.7452 243.255 0 230 0H114C100.745 0 90 10.7452 90 24V51C90 73.0914 72.0914 91 50 91H24Z"
              fill="white"
            />
            <path
              d="M1 177V115H-1V177H1ZM24 200C11.2975 200 1 189.703 1 177H-1C-1 190.807 10.1929 202 24 202V200ZM230 200H24V202H230V200ZM253 177C253 189.703 242.703 200 230 200V202C243.807 202 255 190.807 255 177H253ZM253 24V177H255V24H253ZM230 1C242.703 1 253 11.2975 253 24H255C255 10.1929 243.807 -1 230 -1V1ZM114 1H230V-1H114V1ZM89 24V51H91V24H89ZM89 51C89 72.5391 71.5391 90 50 90V92C72.6437 92 91 73.6437 91 51H89ZM50 90H24V92H50V90ZM114 -1C100.193 -1 89 10.1929 89 24H91C91 11.2975 101.297 1 114 1V-1ZM1 115C1 102.297 11.2975 92 24 92V90C10.1929 90 -1 101.193 -1 115H1Z"
              fill="#9895FA"
              mask="url(#path-1-inside-1_1478_84)"
            />
          </svg>
          {/* <Image src={baner} width={1920} height={811}  alt="Logo" /> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
