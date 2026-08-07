import React from "react";
import styles from "./ScholarshipsAwarded.module.css";
import Image from "next/image";
import dummyImg from "../../../public/images/scholarshipDummyImg-1.png";

const ScholarshipsAwarded = () => {
  return (
    <section className={` spacing bgLightYellow ${styles.scholarshipsWrap} `}>
      <div className="container">
        <h2>150 Higher Education Scholarship Awarded</h2>
        <div className="row justify-content-center ">
          <div className="col-md-6  col-xl-3  d-flex justify-content-center ">
            <div className={styles.scholarshipCard}>
              <Image
                src={dummyImg}
                width={318}
                height={212}
                alt="aalam bibi"
              ></Image>
              <span className={styles.studentName}>Lorem Ipsum</span>
              <span className={styles.program}>BFA (Hons.) </span>
              <span className={styles.program}>
                University of Education, Lahore{" "}
              </span>
              <span className={styles.scholarshipDetails}>
                ‘’Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque
                proin dolor cras molestie cursus donec suspendisse risus.’’
              </span>
            </div>
          </div>

          <div className="col-md-6  col-xl-3  d-flex justify-content-center ">
            <div className={styles.scholarshipCard}>
              <Image
                src={dummyImg}
                width={318}
                height={212}
                alt="aalam bibi"
              ></Image>
              <span className={styles.studentName}>Anum Fatima</span>
              <span className={styles.program}>FA Intermediate </span>
              <span className={styles.program}>Lorem ipsum</span>
              <span className={styles.scholarshipDetails}>
                ‘’Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque
                proin dolor cras molestie cursus donec suspendisse risus.’’
              </span>
            </div>
          </div>
          <div className="col-md-6  col-xl-3  d-flex justify-content-center ">
            <div className={styles.scholarshipCard}>
              <Image
                src={dummyImg}
                width={318}
                height={212}
                alt="aalam bibi"
              ></Image>
              <span className={styles.studentName}>Sobia Mansha</span>
              <span className={styles.program}>B.Ed. (Hons.) </span>
              <span className={styles.program}>
                University of the Punjab, Lahore{" "}
              </span>
              <span className={styles.scholarshipDetails}>
                ‘’Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque
                proin dolor cras molestie cursus donec suspendisse risus.’’
              </span>
            </div>
          </div>
          <div className="col-md-6  col-xl-3  d-flex justify-content-center ">
            <div className={styles.scholarshipCard}>
              <Image
                src={dummyImg}
                width={318}
                height={212}
                alt="aalam bibi"
              ></Image>
              <span className={styles.studentName}>Abdur Rehman</span>
              <span className={styles.program}>BS (Software Engneering) </span>
              <span className={styles.program}>
                COMSATS, Lahore{" "}
              </span>   
              <span className={styles.scholarshipDetails}>
                ‘’Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque
                proin dolor cras molestie cursus donec suspendisse risus.’’
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsAwarded;
