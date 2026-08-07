import React from "react";
import Image from "next/image";
import UzmaGillani from "../../../public/images/UzmaGillani.png";
import styles from "./AdvisoryBoardAus.module.css";
import ShauquettMoselmane from "../../../public/images/ShauquettMoselmane.png";

const AdvisoryBoardAus = ({ heading }) => {
  return (
    <div className={`container ${styles.mainteam} `}>
      <div className={`row ${styles.managemnetRow}`}>
        <div className={styles.ourManagemnet}>
          <h2> {heading} </h2>
        </div>
        <div className={`col-auto ${styles.person}`}>
          <div className={styles.teamPerson}>
            <Image
              src={UzmaGillani}
              className={styles.onlyimg}
              width={211}
              height={211}
              alt="Uzma Gillani"
            />
            <div className={styles.managementContent}>
              <h5>Uzma Gillani</h5>
              {/* {occupation && <span>{occupation}</span>} */}
              <span>Advisor</span>
            </div>
          </div>
         
        </div>
        <div className={`col-auto ${styles.person}`}>
          <div className={styles.teamPerson}>
            <Image
              src={ShauquettMoselmane}
              className={styles.onlyimg}
              width={211}
              height={211}
              alt="Shauquett Moselmane"
            />
            <div className={styles.managementContent}>
              <h5>Shauquett Moselmane</h5>
              {/* {occupation && <span>{occupation}</span>} */}
              <span>Advisor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoardAus;
