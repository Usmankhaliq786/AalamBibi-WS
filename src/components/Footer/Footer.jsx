 import React from "react";
import footerLogo from "../../../public/images/footerLogo.png";
import Image from "next/image";
import styles from "./footer.module.css"; 
import Link from "next/link"; 

import FooterSubcriptionForm from "./FooterSubcriptionForm";

const Footer = () => {
  return (
    <footer>
      <div className={` ${styles.foterBg}`}>
        <div className="container ">
          <div className="row justify-content-between">
            <div
              className={`col-lg-2  pt-0  ${styles.fotterFirstColumn} ${styles.headingUl}`}
            >
              <div className={styles.footerLogo}>
                <a href="/">
                  <Image
                    src={footerLogo}
                    width={162}
                    height={265}
                    alt="aalam bibi foundation logo"
                  />
                </a>
              </div>
            </div>
            <div
              className={`col-lg-3   ${styles.headingUl} ${styles.headingAbout}`}
            >
              <h3>About Aalam Bibi</h3>
              <ul>
                <li>
                  <Link href="/"> Home</Link>
                </li>
                <li>
                  <Link href="/aboutus">About</Link>
                </li>
                <li>
                  <a href="#whatwedo">What we do</a>
                </li>
                <li>
                  <a href="/volunteer">Volunteer with Aalam Bibi</a>
                </li>
                <li>
                  <Link href="/stories">News & Stories</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3   px-0">
              <div className={styles.headingUl}>
                <h3>Information</h3>
                <ul>
                  <li>
                    <a href="tel:+923206051234"> +923206051234 </a>
                  </li>
                  <li>
                    <a href="mailto:aalambibifoundation@gmail.com">
                      <span className={styles.fotterEmail}>
                        aalambibifoundation@gmail.com
                      </span>
                    </a>
                  </li>
                  <li>Mon - Sat 9:00 am - 05:00 pm</li>
                  <li>
                   6km-off Ferozepur Road Chandrai Village, Near Joya Market, Defence Road, Lahore- Pakistan
                  </li>
                </ul>
              </div>
            </div>
            <div className={`col-lg-4 ${styles.headingUl}`}>
              <h3> Stay up to data </h3>
              <ul>
                <li>
                  <a href="#"> Get Newsletter & Stories </a>
                </li>
              </ul>

              <div className={styles.fotertInput}>
                <FooterSubcriptionForm />
              </div>

              <div className={styles.Sicons}>
                <ul className="pt-3" role="list">
                  <li>
                    <a
                      aria-label="facebook"
                      href="https://www.facebook.com/aalambibifoundation/"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.292 28V17.164H22.9211L23.464 12.9516H19.292V10.2636C19.292 9.044 19.6311 8.21178 21.3796 8.21178H23.6102V4.44422C22.5304 4.32965 21.445 4.27408 20.3591 4.27778C17.1438 4.27778 14.9427 6.24089 14.9427 9.84667V12.9516H11.3058V17.164H14.9427V28H1.55556C1.143 28 0.747335 27.8361 0.455612 27.5444C0.163888 27.2527 0 26.857 0 26.4444V1.55556C0 1.143 0.163888 0.747335 0.455612 0.455612C0.747335 0.163888 1.143 0 1.55556 0H26.4444C26.857 0 27.2527 0.163888 27.5444 0.455612C27.8361 0.747335 28 1.143 28 1.55556V26.4444C28 26.857 27.8361 27.2527 27.5444 27.5444C27.2527 27.8361 26.857 28 26.4444 28H19.292Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Instagram"
                      href="https://www.instagram.com/aalam_bibi_foundation/"
                      target="_blank"
                    >
                      <svg
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.12 7H25.88C30.36 7 34 10.64 34 15.12V26.88C34 29.0336 33.1445 31.0989 31.6217 32.6217C30.0989 34.1445 28.0336 35 25.88 35H14.12C9.64 35 6 31.36 6 26.88V15.12C6 12.9664 6.8555 10.9011 8.37829 9.37829C9.90109 7.8555 11.9664 7 14.12 7ZM13.84 9.8C12.5033 9.8 11.2214 10.331 10.2762 11.2762C9.331 12.2214 8.8 13.5033 8.8 14.84V27.16C8.8 29.946 11.054 32.2 13.84 32.2H26.16C27.4967 32.2 28.7786 31.669 29.7238 30.7238C30.669 29.7786 31.2 28.4967 31.2 27.16V14.84C31.2 12.054 28.946 9.8 26.16 9.8H13.84ZM27.35 11.9C27.8141 11.9 28.2592 12.0844 28.5874 12.4126C28.9156 12.7408 29.1 13.1859 29.1 13.65C29.1 14.1141 28.9156 14.5592 28.5874 14.8874C28.2592 15.2156 27.8141 15.4 27.35 15.4C26.8859 15.4 26.4408 15.2156 26.1126 14.8874C25.7844 14.5592 25.6 14.1141 25.6 13.65C25.6 13.1859 25.7844 12.7408 26.1126 12.4126C26.4408 12.0844 26.8859 11.9 27.35 11.9ZM20 14C21.8565 14 23.637 14.7375 24.9497 16.0503C26.2625 17.363 27 19.1435 27 21C27 22.8565 26.2625 24.637 24.9497 25.9497C23.637 27.2625 21.8565 28 20 28C18.1435 28 16.363 27.2625 15.0503 25.9497C13.7375 24.637 13 22.8565 13 21C13 19.1435 13.7375 17.363 15.0503 16.0503C16.363 14.7375 18.1435 14 20 14ZM20 16.8C18.8861 16.8 17.8178 17.2425 17.0302 18.0302C16.2425 18.8178 15.8 19.8861 15.8 21C15.8 22.1139 16.2425 23.1822 17.0302 23.9698C17.8178 24.7575 18.8861 25.2 20 25.2C21.1139 25.2 22.1822 24.7575 22.9698 23.9698C23.7575 23.1822 24.2 22.1139 24.2 21C24.2 19.8861 23.7575 18.8178 22.9698 18.0302C22.1822 17.2425 21.1139 16.8 20 16.8Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="twitter" aria-label="#">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1394_5348)">
                          <path
                            d="M16.6043 11.858L26.8038 0.00195312H24.3869L15.5306 10.2964L8.4572 0.00195312H0.298828L10.9953 15.569L0.298828 28.002H2.71592L12.0683 17.1306L19.5384 28.002H27.6968L16.6037 11.858H16.6043ZM13.2938 15.7062L12.21 14.156L3.58683 1.8215H7.29934L14.2583 11.7759L15.3421 13.326L24.388 26.2652H20.6755L13.2938 15.7068V15.7062Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1394_5348">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="linkedin"
                      href="https://www.linkedin.com/company/aalam-bibi/?viewAsMember=true"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1394_5352)">
                          <path
                            d="M27.991 28.002L27.998 28.0008V17.7318C27.998 12.7081 26.9165 8.83829 21.0435 8.83829C18.2202 8.83829 16.3255 10.3876 15.552 11.8565H15.4704V9.30729H9.90188V28.0008H15.7002V18.7445C15.7002 16.3073 16.1622 13.9506 19.1804 13.9506C22.1542 13.9506 22.1985 16.732 22.1985 18.9008V28.002H27.991ZM0.460047 9.30845H6.26538V28.002H0.460047V9.30845ZM3.36038 0.00195313C1.50421 0.00195313 -0.00195312 1.50812 -0.00195312 3.36429C-0.00195312 5.22045 1.50421 6.75812 3.36038 6.75812C5.21655 6.75812 6.72271 5.22045 6.72271 3.36429C6.7221 2.47273 6.36765 1.61787 5.73723 0.98744C5.1068 0.357015 4.25194 0.00257119 3.36038 0.00195313Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1394_5352">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Youtube"
                      href="https://www.youtube.com/@AalamBibi"
                      target="_blank"
                    >
                      <svg
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1394_5355)">
                          <path
                            d="M16 27L26.38 21L16 15V27ZM39.12 11.34C39.38 12.28 39.56 13.54 39.68 15.14C39.82 16.74 39.88 18.12 39.88 19.32L40 21C40 25.38 39.68 28.6 39.12 30.66C38.62 32.46 37.46 33.62 35.66 34.12C34.72 34.38 33 34.56 30.36 34.68C27.76 34.82 25.38 34.88 23.18 34.88L20 35C11.62 35 6.4 34.68 4.34 34.12C2.54 33.62 1.38 32.46 0.88 30.66C0.62 29.72 0.44 28.46 0.32 26.86C0.18 25.26 0.12 23.88 0.12 22.68L0 21C0 16.62 0.32 13.4 0.88 11.34C1.38 9.54 2.54 8.38 4.34 7.88C5.28 7.62 7 7.44 9.64 7.32C12.24 7.18 14.62 7.12 16.82 7.12L20 7C28.38 7 33.6 7.32 35.66 7.88C37.46 8.38 38.62 9.54 39.12 11.34Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1394_5355">
                            <rect
                              y="0.632812"
                              width="40"
                              height="40"
                              rx="5.33333"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className="container ">
          <div className={`${styles.mainCopy}`}>
            <div className={` ${styles.copyContent}`}>
              <span> © 2024 Aalam Bibi Foundation. All Rights Reserved. </span>
            </div>
            <div className={`  ${styles.copyContent}`}>
              <span>
                Powered by&nbsp;-
                <a
                  href="https://crunchcraft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp; Crunch Craft
                </a>
              </span>
            </div>
            <div className={styles.privacy}>
              <ul className="p-0">
                <li>
                  <Link href="/privacyPolicy">Privacy policy</Link>
                </li>
                <li>
                  <Link href="/termsAndConditions">Term and Condition </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
