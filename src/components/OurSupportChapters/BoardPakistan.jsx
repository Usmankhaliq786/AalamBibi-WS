import React from "react"; 
import shaid from "../../../public/images/shahid.png"; 
import Image from "next/image";
import styles from "./OurSupportChapters.module.css";

const BoardPakistan = () => {
  return (
    <section className={`spacing ${styles.BoardSection}`}>
      <div className={`container ${styles.mainteam} `}>
        <div className={`row gy-5 ${styles.managemnetRow}`}>
          <div className={styles.ourManagemnet}>
            <h2> Aalam Bibi Chapters </h2>
          </div>

          <div className={`col-md-3 col-lg-2  ${styles.person}`}>
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
                  <span className="d-block"> Chapter, Sadiqabad </span> 
                  Pakistan{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardPakistan;
