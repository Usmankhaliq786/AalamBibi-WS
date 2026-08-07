"use client";
import React from "react";
import story from "../../../../public/images/ourStory.png";
import Image from "next/image";
import styles from "./OurStory.module.css";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers once when it enters view

  return (
    <section className={`spacing ${styles.bgColor}`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to full opacity and position when in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
          className="row justify-content-between"
        >
          <div
            className={`col-md-6 d-flex align-items-center  ${styles.leftColumn} `}
          >
            <div className={styles.story}>
              <h2>Our Story</h2>
              <p>
                A 19-year-old undergraduate student and an aspiring writer,
                Farah Deeba Akram, used to pen down the lifestyle of people
                belonging to different strata of the society. One day while
                walking in the slums and jotting down her observations about
                life outside the posh areas of Lahore, she gave biscuits to the
                street children who were constantly looking at her bag. “I don’t
                need the biscuits”, said one of the street children. “I wish to
                have a pencil and a copy from your bag”...
              </p>
              <PrimaryButton isLink={true} href={"/aboutus"}>
                Read More
              </PrimaryButton>
              {/* <button className={styles.nvaBtn}> Read More </button> */}
            </div>
          </div>

          <div className={`col-md-6  ${styles.rightColumn} `}>
            <div className={styles.storyImg}>
              <Image
                className={styles.ourImg}
                src={story}
                width={685}
                height={542}
                alt="learning under tree"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
