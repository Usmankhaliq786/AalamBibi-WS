import React from "react";
import noimg from "../../../public/images/noimg.png";
import fakhiraTahir from "../../../public/images/fakhiraTahir1.png";
import irshadBarkat from "../../../public/images/irshadBarkat1.png";
import Image from "next/image";
import styles from "./ABTTSAcademicCouncil.module.css";

const ABTTSAcademicCouncil = () => {
  return (
    <section className="spacing">
      
      <div className={`container ${styles.mainteam} `}>
        <div className={`row ${styles.managemnetRow}`}>
          <div className={styles.ourManagemnet}>
            <h2>ABTTS Academic Council</h2>
          </div>

       
          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={fakhiraTahir}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5>Fakhira Tahir</h5>
                {/* <span>
                 Advisor
                </span> */}
              </div>
            </div>
          </div>
     
          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={irshadBarkat}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5>Irshad Barkat</h5>
                {/* <span>
                Advisor
                </span> */}
              </div>
            </div>
          </div>

        
         
        </div>
      </div>
    </section>
  );
};

export default ABTTSAcademicCouncil;
