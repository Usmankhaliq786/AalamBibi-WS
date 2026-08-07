import React from "react";
import amin from "../../../public/images/Amin.png";
import inst from "../../../public/images/inst.png";
import bhati from "../../../public/images/bhati.png";
import lums from "../../../public/images/lums.png";
import iqbal from "../../../public/images/iaqbal.png";
import itu from "../../../public/images/itu.png";
import it from "../../../public/images/IT.png";
import pchgti from "../../../public/images/Pchgti.png";
import styles from "./TeamCollaboratorsPartners.module.css";
import Image from "next/image";

const TeamCollaboratorsPartners = () => {
  return (
    <section className="spacing">
      <div className={`container ${styles.coverImg}`}>
        <div className={`row g-4 ${styles.around}`}>
          <div className={styles.sustainHeading}>
            <h2>Our Collaborators & Partners </h2>
          </div>

          <div className="col-lg-6">
            <div
              className={`${styles.testbox} ${styles.radius} ${styles.patherColumn}`} >
              <div className={`  ${styles.collabImgWrap}`}>
                <div className={` ${styles.sameimg}`}>
                  <Image src={amin} width={64} height={64} alt="Logo" />
                </div>
                <div className={styles.patherContent}>
                  <h5> Amin Muktab </h5>
                  <p>
                    Supports faculty training for special education and helps
                    develop personalized curriculums for Aalam Bibi students.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className={`${styles.testbox} ${styles.radius} ${styles.patherColumn}`}
            >
              <div className={`  ${styles.collabImgWrap}`}>
                <div className={` ${styles.sameimg}`}>
                  <Image src={inst} width={64} height={64} alt="Logo" />
                </div>
                <div className={styles.patherContent}>
                  <h5> Ali Institute of Education </h5>
                  <p>
                   
                    Conducts teacher training and organizes Fine Arts and Essay
                    competitions for Aalam Bibi students.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className={`row g-4 ${styles.patherRow}`}>
          <div className="col-lg-6">
            <div
              className={`${styles.testbox} ${styles.radius} ${styles.patherColumn}`}
            >
              <div className={`  ${styles.collabImgWrap}`}>
                <div className={` ${styles.sameimg}`}>
                  <Image src={bhati} width={64} height={64} alt="Logo" />
                </div>
                <div className={styles.patherContent}>
                  <h5> Bhattis Photography & Studio</h5>
                  <p>
                   
                    Provides media coverage and captures significant events at
                    Aalam Bibi.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className={`${styles.testbox} ${styles.radius} ${styles.patherColumn}`}
            >
              <div className={`  ${styles.collabImgWrap}`}>
                <div className={` ${styles.sameimg}`}>
                  <Image src={lums} width={64} height={64} alt="Logo" />
                </div>
                <div className={styles.patherContent}>
                  <h5>
                   
                    Syed Ahsan Ali and Maratib Ali school of Education, LUMS{" "}
                  </h5>
                  <p>
                   
                    Collaborates on teacher training and offers internships to
                    LUMS students at Aalam Bibi.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className={`row g-4 ${styles.patherRow}`}>
          <div className="col-lg-6">
            <div
              className={`${styles.testbox} ${styles.radius} ${styles.patherColumn}`}
            >
              <div className={`  ${styles.collabImgWrap}`}>
                <div className={` ${styles.sameimg}`}>
                  <Image src={iqbal} width={64} height={64} alt="Logo" />
                </div>
                <div className={styles.patherContent}>
                  <h5> Nazriya Pakistan Trust </h5>
                  <p>
                   
                    A long-time partner supporting student talent through
                    regular activities.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className={`${styles.testbox} ${styles.radius} ${styles.patherColumn}`}
            >
              <div className={`  ${styles.collabImgWrap}`}>
                <div className={` ${styles.sameimg}`}>
                  <Image src={it} width={64} height={64} alt="Logo" />
                </div>
                <div className={styles.patherContent}>
                  <h5> Lincoln Corner, ITU </h5>
                  <p>
                   
                    Trains Aalam Bibi students in robotics and technology
                    innovation.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className={`row g-4 justify-content-center ${styles.patherRow}`}>
          <div className="col-lg-6">
            <div
              className={`${styles.testbox} ${styles.radius} ${styles.patherColumn}`}
            >
              <div className={`  ${styles.collabImgWrap}`}>
                <div className={` ${styles.sameimg}`}>
                  <Image src={pchgti} width={64} height={64} alt="Logo" />
                </div>
                <div className={styles.patherContent}>
                  <h5> Chugtai Foundation and Labs </h5>
                  <p>
                  Provides comprehensive support and remains a long-standing ally 
                  of Aalam Bibi.
                  </p>
                </div>
              </div>
            </div>
          </div>
     
        </div>



      </div>
    </section>
  );
};

export default TeamCollaboratorsPartners;
