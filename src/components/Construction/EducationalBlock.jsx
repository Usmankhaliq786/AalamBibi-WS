import React from "react";
import styles from "./educationalBlock.module.css";
import Image from "next/image";
import eduImg1 from "../../../public/images/educationalBlockImg1.png";
import eduImg2 from "../../../public/images/educationalBlockImg2.png";
const EducationalBlock = () => {
  return (
    <section className={` spacing  ${styles.educationalBlocksWrap} `} >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mb-3 mb-xl-4 ">
            <h2>Educational Blocks</h2>
            <div
              className={` bgPurple ${styles.educationalBlocks} ${styles.educationalBlocksCustom}  `}
            >
              <div className={styles.educationalBlockInside}>
                <span>Aalam Bibi Secondary & Higher Secondary Schools</span>
                <p>
                  Focuses on financial empowerment by providing students with
                  technical education and hands-on vocational training in
                  various fields.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-sm-7 col-md-9 col-xl-7 col-xxl-8  mb-3 mb-xl-4 ">
                <div className={` bgGreen ${styles.educationalBlocks} `}>
                  <div className={styles.educationalBlockInside}>
                    <span>Vocational Training Centre</span>
                    <p>
                      Offering a well-rounded curriculum from Pre-School to
                      Matric (O-Level equivalent) and a diverse range of
                      subjects at the higher secondary level, including
                      Sciences, Arts, and Humanities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 col-md-3 col-xl-5 col-xxl-4  d-flex justify-content-center mb-3 mb-xl-4 ">
                <span>
                  <Image
                    src={eduImg2}
                    width={269}
                    height={364}
                    alt="alam bibi"
                  ></Image>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className={` col-sm-3 col-xl-5 col-xxl-4 d-flex justify-content-center d-xl-block mb-3 mb-xl-0 ${styles.artsImg} `}>
                <span>
                  <Image
                    src={eduImg1}
                    width={220}
                    height={234}
                    alt="alam bibi"
                  ></Image>
                </span>
              </div>
              <div className={` col-sm-9 col-xl-7 col-xxl-8 mb-3 mb-xl-0 ${styles.artsBlock}  `}>
                <div className={` bgBlue ${styles.educationalBlocks} `}>
                  <div className={styles.educationalBlockInside}>
                    <span>Art & Design Block</span>
                    <p>
                      A creative space for students to develop their artistic
                      talents, fostering expression and skill enhancement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className={` bgYellow ${styles.educationalBlocks} `}>
              <div className={styles.educationalBlockInside}>
                <span>Library - &apos;A Room of One&apos;s Own&apos;</span>
                <p>
                  The campus will feature a modern library, offering a dedicated
                  space for community members—especially women—who face
                  challenges studying at home. This space aims to empower
                  individuals through education, fostering personal and
                  collective growth. This new campus is designed not just to
                  educate but to serve as a beacon of community development and
                  empowerment, combining sustainability with forward-thinking
                  educational practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalBlock;

