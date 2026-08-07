"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Collaboration.module.css";

const Collaboration = ({ collaborators = [] }) => {
  return (
    <section className={`spacing ${styles.collaborationSection}`}>
      <div className="container">
        <div className={styles.sustainHeading}>
          <h2>Our Collaborators & Partners</h2>

          <p>
            Working together with trusted organizations to create a greater
            social impact.
          </p>
        </div>

        {collaborators.length > 0 ? (
          <div className={styles.sliderWrapper}>
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              slidesPerView={2}
              spaceBetween={18}
              speed={900}
              loop={collaborators.length > 4}
              allowTouchMove={true}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 22,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
                1200: {
                  slidesPerView: 6,
                  spaceBetween: 26,
                },
              }}
              className={styles.collaborationSlider}
            >
              {collaborators.map((item, index) => (
                <SwiperSlide key={item.id || item.alt || index}>
                  <div
                    className={`${styles.partnerCard} ${
                      item.extraHeight ? styles.callImgHeight : ""
                    }`}
                  >
                    <div className={styles.collabImgWrap}>
                      <Image
                        src={item.image}
                        width={item.width || 120}
                        height={item.height || 70}
                        alt={
                          item.alt ||
                          "Aalam Bibi Foundation collaborator"
                        }
                        quality={100}
                        className={styles.partnerImage}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <p className={styles.emptyMessage}>
            Collaborators will be displayed here.
          </p>
        )}
      </div>
    </section>
  );
};

export default Collaboration;