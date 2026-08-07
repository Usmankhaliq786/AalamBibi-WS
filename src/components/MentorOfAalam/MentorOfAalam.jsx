import React from "react";
import monoBhai from "../../../public/images/monoBhai.png";
import norHassan from "../../../public/images/norHassan.png";
import AhmadJaved from "../../../public/images/AhmadJaved.png";
import Image from "next/image";
import styles from "./MentorOfAalam.module.css";

const MentorOfAalam = () => {
  return (
    <section className="spacing">
      <div className={`container`}>




<div className={`row ${styles.mentorRow}`}>
  
  {/* Text Column */}
  <div className="col-md-8 order-2 order-md-1 mt-4 mt-md-0">
    <div
      className={`${styles.radius} ${styles.onlyMunnuBhai} ${styles.equal} ${styles.MunnuBhai}`}
    >
      <h3>Mentor of Aalam Bibi - Munnu Bhai</h3>
      <p>
        Muneer Ahmed Qureshi (6 February 1933 – 19 January 2018), better
        known as Munnu Bhai, was a Pakistani newspaper journalist,
        columnist, poet and writer. He was awarded the Pride of
        Performance Award by the President of Pakistan in 2007 for
        his services to the nation. He died on 22 January 2018 in
        Lahore, aged 84. He was also rewarded Hilal-i-Imtiaz
        (Crescent of Excellence) Award on 23 March 2018 for his
        notable literary services.
      </p>
    </div>
  </div>

  {/* Image Column */}
  <div className={`col-md-4 ${styles.socilImg} order-1 order-md-2`}>
    <Image src={monoBhai} width={551} height={412} alt="Logo" />
  </div>

</div>




        {/* <div className={`row ${styles.mentorRow}`}>
          <div className="col-md-8">
            <div
              className={`${styles.radius} ${styles.onlyMunnuBhai} ${styles.equal} ${styles.MunnuBhai}`}
            >
              <h3>Mentor of Aalam Bibi - Munnu Bhai</h3>
              <p>
               
                Muneer Ahmed Qureshi (6 February 1933 – 19 January 2018), better
                known as Munnu Bhai, was a Pakistani newspaper
                journalist, columnist, poet and writer. He was awarded the Pride
                of Performance Award by the President of Pakistan in 2007 for
                his services to the nation. He died on 22 January 2018 in
                Lahore, aged 84. He was also rewarded Hilal-i-Imtiaz (Crescent
                of Excellence) Award on 23 March 2018 for his notable literary
                services.{" "}
              </p>
            </div>
          </div>
          <div className={`col-md-4 ${styles.socilImg}`}>
            <Image src={monoBhai} width={551} height={412} alt="Logo" />
          </div>
        </div> */}

        <div className={`row ${styles.mentorRow}`}>
          <div className={`col-md-4 ${styles.socilImg}`}>
            <Image
              src={norHassan}
              className={styles.ImageNoor}
              width={551}
              height={412}
              alt="Logo"
            />
          </div>

          <div className="col-md-8">
            <div
              className={`${styles.radius} ${styles.equal} ${styles.MunnuBhai} ${styles.noorContent}`}
            >
              <h3>Good will Ambassador Noor ul Hassan</h3>
              <p>
                Noor Ul Hassan is a Pakistani actor was born on 25 February 1971
                in Lahore, television presenter, television host, and compère.
                He hosted the Ramadan transmission in 2011 and in 2014 for PTV
                Home. He appeared in acclaimed television serials such as Ishq
                Jalebi, Dar Si Jaati Hai Sila, Aangan, Ranjha Ranjha Kardi and
                Cheekh.
              </p>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default MentorOfAalam;
