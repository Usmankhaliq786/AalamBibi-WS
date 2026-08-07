"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import img1 from "../../../../public/images/Education.png";
import food from "../../../../public/images/food.png";
import care from "../../../../public/images/care.png";

import styles from "./WhatWe.module.css";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const programs = [
  {
    title: "Education",
    label: "Quality Education",
    description:
      "The Aalam Bibi Foundation features an innovative educational model dedicated to delivering high-quality education to deserving children.",
    image: img1,
    alt: "Education program for children",
    href: "/educationalPrograms",
    cardClass: styles.educationCard,
  },
  {
    title: "Food",
    label: "Food Support",
    description:
      "Aalam Bibi Foundation supports communities where many families live below the poverty line and struggle to meet their daily food needs.",
    image: food,
    alt: "Food support program",
    href: "/foodProgram",
    cardClass: styles.foodCard,
  },
  {
    title: "Health",
    label: "Healthcare Support",
    description:
      "We help underserved communities access essential healthcare services when they cannot afford the cost of quality medical treatment.",
    image: care,
    alt: "Healthcare support program",
    href: "/healthCareProgram",
    cardClass: styles.healthCard,
  },
];

const Whatwe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  return (
    <section id="whatwedo" className={`spacing ${styles.whatWeSection}`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 45 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.successfulHeading}>
            <span className={styles.sectionLabel}>Our Programs</span>
            <h2>What We Do</h2>
            <p>
              Creating lasting change through education, food support and
              accessible healthcare.
            </p>
          </div>

          <div className="row g-4">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >
                <article className={`${styles.card} ${program.cardClass}`}>
                  <div className={styles.imageWrapper}>
                    <Image
                      className={styles.cardImage}
                      src={program.image}
                      width={480}
                      height={550}
                      alt={program.alt}
                      quality={95}
                    />

                    <span className={styles.programTag}>
                      {program.label}
                    </span>
                  </div>

                  <div className={styles.cardContent}>
                    <div>
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                    </div>

                    <div className={styles.btns}>
                      <a
                        className={styles.readMoreButton}
                        href={program.href}
                      >
                        Read More
                        <span aria-hidden="true">→</span>
                      </a>

                      <PrimaryButton isLink={true} href="/donateNow">
                        Donate Now
                      </PrimaryButton>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whatwe;