import React from "react";
import styles from "./learningSpaces.module.css";
import Image from "next/image";
import learningImg1 from "../../../public/images/learningSpaces1.png";
import learningImg2 from "../../../public/images/learningSpaces2.png";
import learningImg3 from "../../../public/images/learningSpaces3.png";
import newAmphitheater from "../../../public/images/newAmphitheater.png";

const LearningSpaces = () => {
  return (
    <section className={` spacing ${styles.LearningSpaces} `}>
      <div className="container">
        <div className={styles.learningSpacesHead}>
          <h2>Recreational and Learning Spaces</h2>
          <p>
            Apart from the aforementioned blocks, the campus will include the
            following areas, intended for shared use by all educational gardens:
          </p>
        </div>
        <div className={styles.learningSpacesCardsWrap}>
          <div className="row">
            <div className="col-md-6 col-xl-3 mb-4  ">
              <div className={styles.learnigCardWrap}>
                <div className={styles.learnigCard}>
                  <span className={styles.cardImgwrap}>
                    <Image
                      src={learningImg1}
                      width={66}
                      height={66}
                      alt="learning spaces"
                    ></Image>
                  </span>
                  <span className={styles.learningSpacesHeading}>
                    Sports Halls
                  </span>
                  <span className={styles.learnigSpacesContent}>
                    Dedicated spaces to encourage physical fitness and teamwork
                    among students.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-4  ">
              <div className={styles.learnigCardWrap}>
                <div className={styles.learnigCard}>
                  <span className={styles.cardImgwrap}>
                    <Image
                      src={learningImg2}
                      width={66}
                      height={66}
                      alt="learning spaces"
                    ></Image>
                  </span>
                  <span className={styles.learningSpacesHeading}>Gardens</span>
                  <span className={styles.learnigSpacesContent}>
                    Designed to provide tranquil environments for relaxation and
                    personal growth, fostering well-being in green and healthy
                    surroundings.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3  mb-4">
              <div className={styles.learnigCardWrap}>
                <div className={styles.learnigCard}>
                  <span className={styles.cardImgwrap}>
                    <Image
                      src={learningImg3}
                      width={66}
                      height={66}
                      alt="learning spaces"
                    ></Image>
                  </span>
                  <span className={styles.learningSpacesHeading}>Labs</span>
                  <span className={styles.learnigSpacesContent}>
                    Equipped science and computer labs to facilitate hands-on
                    learning and experimentation.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-4  ">
              <div className={styles.learnigCardWrap}>
                <div className={styles.learnigCard}>
                  <span className={styles.cardImgwrap}>
                    <Image
                      src={newAmphitheater}
                      width={66}
                      height={66}
                      alt="learning spaces"
                    ></Image>
                  </span>
                  <span className={styles.learningSpacesHeading}>
                    Amphitheater
                  </span>
                  <span className={styles.learnigSpacesContent}>
                    An open-air space designed for performances, events, and
                    student activities, encouraging creative expression and
                    community interaction.{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSpaces;
