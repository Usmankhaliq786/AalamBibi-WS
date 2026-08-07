import styles from "./aboutus.module.css";
import one from "../../../public/images/2005.png";
import ab2 from "../../../public/images/ab2.png";
import ab3 from "../../../public/images/ab3.png";
import ab4 from "../../../public/images/ab4.png";
import ab5 from "../../../public/images/ab5.png";
import ab6 from "../../../public/images/ab6.png";
import ab7 from "../../../public/images/ab7.png";
import ab8 from "../../../public/images/ab8.png";
import ab9 from "../../../public/images/ab9.png";
import Image from "next/image";
import React from "react";
import AboutUsOurStory from "@/components/AboutUsOurStory/AboutUsOurStory";

export const metadata = {
  title: "Our Story | Aalam Bibi Foundation",
  description:
    "An 19-year-old undergraduate student and an aspiring writer, Farah Deeba Akram, used to pen down the lifestyle of people belonging to different strata of the society. One day while walking in the slums and jotting down her observations about life outside the posh areas of Lahore, she gave biscuits to the street children who were constantly looking at her bag. “I don’t need the biscuits”, said one of the street children. “I wish to have a pencil and a copy from your bag”. Farah was greatly moved by the quest for formal education shown by the street children and decided to provide them their basic right to education. Hence, under the shadow of a tree, the Aalam Bibi School had its humble beginning in 2005 when Farah made Farah made a routine to go every day in the industrial area of Kot Lakhpat – then notorious for drug addicts and street criminals.Meanwhile, she rented a small house of almost 4-marla (101 sq. meters) in the same locality and converted that into a school building. She started a door-to- door campaign for the importance of education and enrolled 60 students in the first batch. Initially, the school was run solely by her pocket money and funds donated by her father, Muhammad Akram. Farah was the only teacher and the administrator of the school. Soon, her family and friends joined her in the cause of Aalam Bibi and started volunteering at the school.",
};
const AboutUs = () => {
  return (
    <div className={"wrapper"}>
      <AboutUsOurStory />
      <section className={styles.wrapper}>
        <section className={`container ${styles.top_static_section}`}>
          <h2>Timeline of Aalam Bibi Foundation</h2>
          <p className={`${styles.top_static_subheading} mb-0`}>
            A journey of impact and growth from 2005 to 2024, shaped by
            resilience, growth, and purpose.
          </p>
        </section>

        <section className={`${styles.about_us_btm_sec} ${styles.bgColors}`}>
          <div className={`${styles.about_container} container-fluid`}>
            <div className={`${styles.about_box} row align-items-center`}>
              <div className={`${styles.image_box} col-md-6 `}>
                <Image
                  src={one}
                  alt="aalam bibi foundation banner"
                  width={692}
                  height={400}
                />
              </div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <h2> 2005 </h2>
                <p>
                  A 4-marla house in the suburban, industrial area of Kot
                  Lakhpat converted into a school - Batch of 60 students.
                </p>
              </div>
            </div>

            <div className={`${styles.about_box}  row align-items-center`}>
              <div className={`${styles.image_box} col-md-6 `}>
                <Image
                  src={ab2}
                  alt="A 4-marla house in the suburban, industrial area of Kot Lakhpat converted into a school - Batch of 60 students."
                  width={692}
                  height={400}
                />
              </div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <h2> 2008 </h2>
                <p>
                  {" "}
                  The renowned columnist and philanthropist Munno Bhai (late)
                  visited the school and wrote a column “Nikki jae kurri -
                  Hereafter, the utmost dedicated, selfless humanitarian work of
                  the young and determined Farah got nationwide attention. Many
                  generous donors joined this social cause.{" "}
                </p>
              </div>
            </div>

            <div className={`${styles.about_box} row align-items-center`}>
              <div className={`${styles.image_box} col-md-6 `}>
                <Image
                  src={ab3}
                  alt="A 4-marla house in the suburban, industrial area of Kot Lakhpat converted into a school - Batch of 60 students."
                  width={692}
                  height={400}
                />
              </div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <h2> 2009 </h2>
                <p>
                  {" "}
                  Aalam Bibi Parental Awareness Program initiated - to increase
                  awareness and sensitize the role of parenthood. This was a
                  success and was highly appreciated by the community.{" "}
                </p>
              </div>
            </div>

            <div className={`${styles.about_box} row align-items-center`}>
              <div className={`${styles.image_box} col-md-6 `}>
                <Image
                  src={ab4}
                  alt="people eating food "
                  width={692}
                  height={400}
                />
              </div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <h2> 2010 </h2>
                <p>
                  {" "}
                  Aalam Bibi Food Shop established - subsidizing fresh and
                  hygienic food for 250+ people every day, free of cost.
                  Vocational Training program initiated - young women learnt
                  skills of stitching and embroidery - the women who were
                  skilled enough to run their own centers, were offered interest
                  free loan for establishing their own businesses.{" "}
                </p>
              </div>
            </div>

            <div className={`${styles.about_box} row align-items-center`}>
              <div className={`${styles.image_box} col-md-6 `}>
                <Image src={ab5} alt="charity " width={692} height={400} />
              </div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <h2> 2011 </h2>
                <p>
                  {" "}
                  Aalam Bibi Prisoner Welfare Program initiated - prisoners were
                  provided with counselling and educational services those who
                  could not pay for lawyers were provided with that facility.{" "}
                </p>
              </div>
            </div>

            <div className={`${styles.about_box} row align-items-center`}>
              <div className={`${styles.image_box} col-md-6 `}>
                <Image src={ab6} alt="aalam bibi" width={692} height={400} />
              </div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <h2> 2012 </h2>
                <p>
                  {" "}
                  Aalam Bibi Health Program initiated – Munawar Shahzadi Health
                  Care Clinic established to provide health checkups for
                  students and community people at an affordable token fee of
                  Rs. 20 (no token fee for students) - Medications provided free
                  of cost.{" "}
                </p>
              </div>
            </div>

            <div className={`${styles.about_box} row align-items-center`}>
              <div className={`${styles.image_box} col-md-6 `}>
                <Image
                  src={ab7}
                  alt="foundation playing ground"
                  width={692}
                  height={400}
                />
              </div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <h2> 2019 </h2>
                <p> Aalam Bibi established a new school in Muridka. </p>
              </div>
            </div>

            <div className={`${styles.about_box} row align-items-center`}>
              <div className={`${styles.image_box} col-md-6 `}>
                <Image
                  src={ab8}
                  alt="senior management working in land"
                  width={692}
                  height={400}
                />
              </div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <h2> 2023 </h2>
                <p>
                  {" "}
                  Laid the foundation of purpose-built state-of-the-art school
                  campus on the area of 12 kanal (54000 sft).{" "}
                </p>
              </div>
            </div>

            <div className={`${styles.about_box} row align-items-center`}>
              <div className={`${styles.image_box} col-md-6 `}>
                <Image
                  src={ab9}
                  alt="under construction building"
                  width={692}
                  height={400}
                />
              </div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <h2> 2024 </h2>
                <p>
                  {" "}
                  ≈1000 students enrolled at 2 campuses, receiving early years
                  to university-level education - ≈1 million meals served.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutUs;
