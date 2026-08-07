import React from "react";
import memberTwo from "../../../public/images/memberTwo.png";
import memberThree from "../../../public/images/noImageExecutive.png";
import SaminaAhmad from "../../../public/images/saminaAhmad.png";
import asma from "../../../public/images/Asma.png";
import ali from "../../../public/images/alilashari.png";
import Image from "next/image";
import styles from "./OurExecutiveMembers.module.css";
import kamran from "../../../public/images/kamran.png";
import FaisalBari from "../../../public/images/FaisalBari.png";

const OurExecutiveMembers = () => {
  return (
    <section className="spacing">
      <div className={`container`}>
          <div className={styles.ExecutiveMembersHeading}>
            <h2> Board Pakistan</h2>
          </div>
        <div className={`row ${styles.executiveRow}`}>

          <div className={`col-md-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={asma}
                className={styles.onlyimg}
                width={211}
                height={526}
                quality={100}
                alt="Logo"
              />

              <h5> Mansoor Ahmad </h5>
              <span> Chairperson </span>
            </div>
          </div>

          <div className={`col-md-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={memberThree}
                className={styles.onlyimg}
                width={211}
                height={526}
                alt="Logo"
                quality={100}
              />

              <h5>Nadira Shehzad </h5>
              <span> Vice Chairperson </span>
            </div>
          </div>

          <div className={`col-md-auto  ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={kamran}
                className={styles.onlyimg}
                width={211}
                height={526}
                alt="Logo"
                quality={100}
              />

              <h5> Sajid Maruf Khan </h5>
              <span> General Secretary </span>
            </div>
          </div>

          <div className={`col-md-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={memberTwo}
                className={styles.onlyimg}
                width={211}
                height={526}
                quality={100}
                alt="Logo"
              />

              <h5>Asma Hussain</h5>
              <span>Finance Secretar </span>
            </div>
          </div>
              

          <div className={`col-md-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={FaisalBari}
                className={styles.onlyimg}
                width={211}
                height={526}
                alt="Logo"
              />

              <h5> Dr. Faisal Bari </h5>
              <span> Trustee </span>
            </div>
          </div>

          <div className={`col-md-auto  ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={SaminaAhmad}
                className={styles.onlyimg}
                width={211}
                height={526}
                alt="Logo"
                quality={100}
              />

              <h5>Samina Ahmad </h5>
              <span> Exective Member </span>
            </div>
          </div>

          <div className={`col-md-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={ali}
                className={styles.onlyimg}
                width={211}
                height={526}
                quality={100}
                alt="Logo"
              />

              <h5>Mohammad Ali Lahsari </h5>
              <span> Executive member </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExecutiveMembers;
