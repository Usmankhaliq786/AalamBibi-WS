import React from "react";
import founder from "../../../public/images/ourFounder.png";
import Image from "next/image";
import styles from "./OurFounder.module.css";

const OurFounder = () => {
  return (
    <section className={`spacing ${styles.bgColor}`}>
      <div className="container">
        <div className="row">
          <div className={`col-md-7   ${styles.leftColumn} `}>
            <div className={styles.founder}>
              <h2>Our Founder</h2>
              <p>
                Dr. Farah Deeba Akram is a dedicated social entrepreneur known
                for her significant contributions to community development and
                social welfare. She has founded and led the Aalam Bibi Foundation
                since 2005, demonstrating a commitment to addressing social
                issues. Her expertise extends to gender and literature, as
                evidenced by her completion of a Ph.D. in Gender and Literature
                from the University of the Punjab, Pakistan, and the Central
                European University, Hungary. Since 2012, she is serving as the
                youngest Executive Member of the Amin Maktab, a pioneer
                institute of mentally challenged children of Pakistan. Moreover,
                she has served as &quot;non-official visitor of Lahore
                Prisons,&quot; by the Government of Punjab, in which capacity
                she was able to initiate welfare programs specifically aimed at
                underprivileged prisoners, showcasing her compassion for
                marginalized individuals within the criminal justice system.
              </p>
              <p>
                She is the literacy advisor for the Democratic Commission for
                Human Development (DCHD). Furthermore, Dr. Farah Deeba Akram is
                actively engaged in academia, contributing to the fields of
                Sociology and Gender Studies. She serves as an External
                Evaluator/Examiner and is a member of the Board of Studies for
                the Sociology & Gender Studies Departments at the University of
                Home Economics Lahore and Government College University Lahore,
                Pakistan.
              </p>
            </div>
          </div>

          <div className={`col-md-5  ${styles.rightColumn} `}>
            <div className={styles.storyImg}>
              <Image
                className={styles.ourImg}
                src={founder}
                width={700}
                height={768}
                alt="Our Founder"
              />
            </div>
          </div> 
        </div>
      </div>
    </section>
   
  );
};

export default OurFounder;
