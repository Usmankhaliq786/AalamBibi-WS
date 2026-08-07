"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import styles from "./scholar.module.css";
const Scholars = () => {
  return (
    <section
      className={`spacing mainSwiperWraper  ${styles.mainSwiperWraper} `}
      id="scholar"
    >
      <div className="container ">
        <div className={styles.ScholarsHeading}>
          <h2>What Scholars say about us?</h2>
        </div>

        <div className="row">
          <div className="col">
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <Image
                  src={"/images/scholar_1.png"}
                  alt="Dr Arfa Syeda Zahra"
                  width={504}
                  height={468}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/scholar_2.png"}
                  alt="Ahmad Javed "
                  width={504}
                  height={468}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/scholar_3.png"}
                  alt="Rm Naeem"
                  width={504}
                  height={468}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/ScholarBanoQudsia.png"}
                  alt="Bano Qudsia "
                  width={504}
                  height={468}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/ScholarSamiyaMumtaz.png"}
                  alt="Samiya Mumtaz  "
                  width={504}
                  height={468}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/ScholarNayyarRubab.png"}
                  alt="Nayyar Rubab "
                  width={504}
                  height={468}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/ScholarAfzalAhmadSyed.png"}
                  alt="Afzal Ahmad Syed "
                  width={504}
                  height={468}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/ScholarShahidBhaur.png"}
                  alt="Shahid Bhaur "
                  width={504}
                  height={468}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/ScholarDrTariqAziz.png"}
                  alt="Dr Tariq Aziz"
                  width={504}
                  height={468}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholars;
