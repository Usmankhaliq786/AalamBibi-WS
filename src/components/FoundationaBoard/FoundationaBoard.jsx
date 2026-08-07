"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./FoundationaBoard.module.css";

const FoundationaBoard = ({
  data = [],
  showButton = false,
  heading,
}) => {
  return (
    <section className={styles.boardSection}>
      <div className={`container ${styles.mainTeam}`}>
        <div className={styles.teamHeading}>
          <h2>{heading}</h2>
        </div>

        {data.length > 0 ? (
          <div className={styles.sliderWrapper}>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={18}
              speed={750}
              loop={data.length > 4}
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
              className={styles.boardSlider}
            >
              {data.map((member) => (
                <SwiperSlide key={member.id}>
                  <article className={styles.teamPerson}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={member.image}
                        className={styles.onlyImg}
                        width={260}
                        height={320}
                        quality={100}
                        alt={member.name || "Foundation board member"}
                      />
                    </div>

                    <div className={styles.memberContent}>
                      <p>{member.name}</p>

                      {member.position && (
                        <span>{member.position}</span>
                      )}
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <p className={styles.emptyMessage}>
            Board members will be displayed here.
          </p>
        )}

        {showButton && (
          <div className={styles.extraBtn}>
            <Link className="btn nvaBtn" href="/ourTeam">
              Meet Our Team
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FoundationaBoard;