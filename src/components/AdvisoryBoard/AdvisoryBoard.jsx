"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ahmedJaved from "../../../public/images/ahmedJaved1.png";
import ahsanMahmood from "../../../public/images/ahsanMahmood1.png";
import drNizamuddin from "../../../public/images/drNizamuddin1.png";
import drIrfanMuzaffar from "../../../public/images/drIrfanMuzaffar1.png";

import styles from "./AdvisoryBoard.module.css";

const advisoryMembers = [
  {
    id: 1,
    name: "Ahmed Javed",
    position: "Advisor",
    image: ahmedJaved,
  },
  {
    id: 2,
    name: "Ahsan Mahmood",
    position: "Advisor",
    image: ahsanMahmood,
  },
  {
    id: 3,
    name: "Dr. M Nizamuddin",
    position: "Advisor",
    image: drNizamuddin,
  },
  {
    id: 4,
    name: "Dr Irfan Muzaffar",
    position: "Advisor",
    image: drIrfanMuzaffar,
  },
];

const AdvisoryBoard = () => {
  return (
    <section className={styles.advisorySection}>
      <div className={`container ${styles.mainTeam}`}>
        <div className={styles.heading}>
          <h2>Advisory Board</h2>
        </div>

        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={18}
            speed={750}
            loop={advisoryMembers.length > 4}
            navigation
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className={styles.advisorySlider}
          >
            {advisoryMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <article className={styles.teamPerson}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={member.image}
                      className={styles.onlyImg}
                      width={260}
                      height={300}
                      quality={100}
                      alt={member.name}
                    />
                  </div>

                  <div className={styles.managementContent}>
                    <h5>{member.name}</h5>
                    <span>{member.position}</span>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoard;