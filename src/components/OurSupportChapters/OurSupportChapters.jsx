"use client";
import React from "react";
import gazala from "../../../public/images/gazala.png";
import shaid from "../../../public/images/shahid.png";
import asad from "../../../public/images/asad.png";
import heenaPanchal from "../../../public/images/HeenaPanchal.png";
import asifIqbal from "../../../public/images/asifIqbal.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./OurSupportChapters.module.css";


const OurSupportChapters = () => {
  return (
    <section className="spacing">
      <div className={`container ${styles.mainteam} `}>
        <div className={`row gy-5 ${styles.managemnetRow}`}>
          <div className={styles.ourManagemnet}>
            <h2> Board Australia </h2>
          </div>

          {/* <div className={`col-md-6 col-lg-4 col-xl-3 ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={shaid}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5> Shahid Bhaur </h5>
                <span>
                  President, Aalam Bibi{" "}
                  <span className="d-block"> Board,</span> Sadiqabad
                  Pakistan{" "}
                </span>
              </div>
            </div>
          </div> */}

          <div className={`  col-md-6 col-lg-4 col-xl-3  ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={gazala}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5>Ghazal Basit </h5>
                <span>
                  Director, Aalam Bibi Board, Australia.{" "}
                  <span className="d-block">
                    <a href="mailto:ghazal.basit@gmail.com">
                      ghazal.basit@gmail.com
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className={`  col-md-6 col-lg-4 col-xl-3  ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={asad}
                className={styles.asad}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5> Asad Basit </h5>
                <span>
                  Director, Aalam Bibi Board, Australia.{" "}
                  <span className="d-block">
                    <a href="mailto:asad.basit@gmail.com">
                      asad.basit@gmail.com
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className={`  col-md-6 col-lg-4 col-xl-3  ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={asifIqbal}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5> Prof Asif Iqbal </h5>
                <span>
                  {" "}
                  Director, Aalam Bibi Board, Australia.{" "}
                  <span className="d-block ">
                    <a href="mailto:asif.iqbal@sci.edu.au">
                      asif.iqbal@sci.edu.au
                    </a>
                  </span>
                  {"  "}
                </span>
              </div>
            </div>
          </div>
          <div className={`  col-md-6 col-lg-4 col-xl-3  ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={heenaPanchal}
                className={styles.asad}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5> Heena Panchal </h5>
                <span>
                  Director, Aalam Bibi Board, Australia.{" "}
                  <span className="d-block">
                    <a href="mailto:Heena.panchal@sci.edu.au">
                      Heena.panchal@sci.edu.au
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={` ${styles.newbtn}`}>
          <Link href={"/donateNow"} className={`btn ${styles.navBtn}`}>
            Donate Now
          </Link>
        </div>
      </div>    
    </section>
  );
};

export default OurSupportChapters;
