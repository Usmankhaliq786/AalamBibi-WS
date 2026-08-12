import React from "react";
import managemnetOne from "../../../public/images/managemnetOne.png";
import aftab from "../../../public/images/aftab.png";
import sanaBatool from "../../../public/images/sanabatool.png";
import samia from "../../../public/images/saima.png";
import arooj from "../../../public/images/AroojTariq.png";
import jawariaIrfan from "../../../public/images/JawariaIrfan.png";
import tariq from "../../../public/images/tariq.png";
import haroon from "../../../public/images/haroon.png";
import haroonaTariq from "../../../public/images/haroonaTariq1.png";
import noimg from "../../../public/images/noimg.png";
import Image from "next/image";
import styles from "./OurManagement.module.css";

const OurManagement = () => {
  return (
    <section className="spacing">
      <div className={`container ${styles.mainteam}`}>
        <div className={`row ${styles.managemnetRow}`}>
          <div className={styles.ourManagemnet}>
            <h2>Management Team</h2>
          </div>

          {/* Dr Farah Deeba */}
          {/*
          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={managemnetOne}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Dr Farah Deeba"
              />
              <div className={styles.managementContent}>
                <h5>Dr Farah Deeba</h5>
                <span>Founder & CEO</span>
              </div>
            </div>
          </div>
          */}

          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={aftab}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Aftab Rabbani"
              />

              <div className={styles.managementContent}>
                <h5>Aftab Rabbani</h5>
                <span>
                  Director Operations &
                  <span className="d-block">
                    Community Development
                  </span>
                  <span className="d-block">
                    Projects
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Sana Batool */}
          {/*
          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={sanaBatool}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Sana Batool"
              />
              <div className={styles.managementContent}>
                <h5>Sana Batool</h5>
                <span>
                  Outreach and
                  <span className="d-block">
                    Communication Manager
                  </span>
                </span>
              </div>
            </div>
          </div>
          */}

          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={samia}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Saima Kanwal"
              />

              <div className={styles.managementContent}>
                <h5>Saima Kanwal</h5>
                <span>
                  Principal Aalam Bibi
                  <span className="d-block">
                    Taleem-o-Tarbiyat School
                  </span>
                  <span className="d-block">
                    (Lahore Campus)
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={arooj}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Arooj Tariq"
              />

              <div className={styles.managementContent}>
                <h5>Arooj Tariq</h5>
                <span>
                  Admin & Human
                  <span className="d-block">
                    Resource Associate
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={jawariaIrfan}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Jawaria Irfan"
              />

              <div className={styles.managementContent}>
                <h5>Jawaria Irfan</h5>

                <span className={styles.longDesignation}>
                  Consultant
                  <span className="d-block">
                    Higher Education &
                  </span>
                  <span className="d-block">
                    Strategic Communications
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={haroon}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Haroon Ejaz"
              />

              <div className={styles.managementContent}>
                <h5>Haroon Ejaz</h5>
                <span>Accounts Associate</span>
              </div>
            </div>
          </div>

          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={tariq}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Tariq Shahzad"
              />

              <div className={styles.managementContent}>
                <h5>Tariq Shahzad</h5>
                <span>Admin Officer</span>
              </div>
            </div>
          </div>

          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={noimg}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Campus Incharge"
              />

              <div className={styles.managementContent}>
                <h5>Campus Incharge</h5>
                <span>Muridke Campus</span>
              </div>
            </div>
          </div>

          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={haroonaTariq}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Haroona Tariq"
              />

              <div className={styles.managementContent}>
                <h5>Haroona Tariq</h5>
                <span>Child Clinical Psychologist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurManagement;