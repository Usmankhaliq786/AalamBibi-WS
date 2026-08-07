import React from "react";
import Image from "next/image";
import osmanAsgharMirza from "../../../public/images/osmanAsgharMirza.png";
import nadiaAkram from "../../../public/images/nadiaAkram.png";
import styles from "./ScandinaviaBoardEur.module.css";

const ScandinaviaBoardEur = () => {
  return (
    <div className={`container ${styles.mainteam} `}>
      <div className={`row ${styles.managemnetRow}`}>
        <div className={styles.ourManagemnet}>
          <h2>Scandinavian Representatives</h2>
        </div>
        <div className={`col-auto ${styles.person}`}>
          <div className={styles.teamPerson}>
            <Image
              src={osmanAsgharMirza}
              className={styles.onlyimg}
              width={211}
              height={211}
              alt="Osman Asghar Mirza"
            />
            <div className={styles.managementContent}>
              <h5>Osman Asghar Mirza</h5>
                <p>
                  <a href="mailto:om@sund.ku.dk">
                    om@sund.ku.dk
                  </a>
                </p>
            </div>
          </div>
         
        </div>
        <div className={`col-auto ${styles.person}`}>
          <div className={styles.teamPerson}>
            <Image
              src={nadiaAkram}
              className={styles.onlyimg}
              width={211}
              height={211}
              alt="Nadia Akram"
            />
            <div className={styles.managementContent}>
              <h5>Nadia Akram</h5>
                <p>
                  <a href="mailto:nadiamamirza@gmail.com">
                    nadiamamirza@gmail.com
                  </a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScandinaviaBoardEur;
