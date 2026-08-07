import React from "react";
import explorone from "../../../public/images/explorone.png";
import explorThree from "../../../public/images/explorThree.png";
import explorTwo from "../../../public/images/explorTwo.png";

import styles from "./ExploreEducationalPrograms.module.css";
import Image from "next/image";
import Link from "next/link";

const ExploreEducationalPrograms = () => {
  return (
    <section className="spacing">
      <div className="container">
        <div className={`row g-3 ${styles.ExplorRow}`}>
          <div className={styles.ExplorHeading}>
            <h2>Explore Our Educational Programs</h2>
          </div>

          <div className={` col-lg-4  ${styles.columnWrap}`}>
            <Link href={"/educationalPrograms/taleemOTarbiyat"}>
            <div className={` ${styles.testBoxWrap}`}>
              <Image
                src={explorone}
                width={480}
                className={styles.explorImg}
                height={320}
                alt="Aalam Bibi Taleem-o-Tarbiyat Schools"
              />

              <div className={`${styles.cardText} ${styles.testbox}`}>
                <h3> Aalam Bibi Taleem-o-Tarbiyat Schools </h3>
                <span>
                  Presently, 1000 students are getting free education in two
                  branches of ABTTS located in Lahore and Muridka from...{" "}
                </span>
              </div>
            </div></Link>
          </div>

          <div className={` col-lg-4    ${styles.columnWrap}`}>
          <Link href={"/educationalPrograms/inclusiveEducationProgram"}>
            <div className={` ${styles.testBoxWrap}`}>
              <Image
                src={explorTwo}
                width={480}
                height={320}
                alt="Inclusive Education Program"
              />

              <div className={`${styles.cardText} ${styles.testbox}`}>
                <h3> Inclusive Education Program </h3>
                <span>
                The Aalam Bibi features an innovative educational paradigm dedicated to delivering high quality education...
                </span>
              </div>
            </div>
            </Link>
          </div>

          <div className={` col-lg-4 ${styles.columnWrap}`}>
          <Link href={"/educationalPrograms/vocationalTraningProgram"}>
            <div className={` ${styles.testBoxWrap}`}>
              <Image
                src={explorThree}
                width={480}
                height={320}
                alt="Higher Education and Vocational Training Program"
              />

              <div className={`${styles.cardText} ${styles.testbox}`}>
                <h3> Higher Education and Vocational Training Program </h3>
                <span>
                The Aalam Bibi features an innovative educational paradigm dedicated to delivering high quality education...
                </span>
              </div>
            </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExploreEducationalPrograms;
