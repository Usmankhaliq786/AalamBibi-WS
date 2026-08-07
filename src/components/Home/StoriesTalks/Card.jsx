"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./card.module.css";
import { storiesAndTalks } from "@/lib/data/storiesAndTalks";
import { getThumbnailUrl } from "@/components/StoriesAndTalks/TalksCard";
import Image from "next/image";
import Popup from "@/components/Popup/Popup";

export const extractVideoId = (url) => {
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// Convert to embed URL using video ID
const convertToEmbedUrl = (url) => {
  const videoId = extractVideoId(url);
  return videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : "Invalid YouTube URL";
};

const Card = ({ data }) => {
  return (
    <Swiper
      slidesPerView={4}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1600: { slidesPerView: 4 },
      }}
    >
      {data.slice(0, 6).map((item, index) => {
        const embedUrl = convertToEmbedUrl(item.video_link);
        const modalId = `storiesAndTalks-${index}`; // Unique modal ID

        return (
          <SwiperSlide key={index}>
            <div
              className={`cursor-pointer ${styles.StoryCardWrap}`}
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`} // Use unique modal ID
            >
              <div className={`storiesCard ${styles.storiesCard}`}>
                <div className="storiesCardImgWrap">
                  <Image
                    src={getThumbnailUrl(item.video_link)}
                    width={352}
                    height={204}
                    alt={item.title}
                  />
             <svg width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.680158" y="1.3911" width="64.4787" height="64.4787" rx="32.2394" stroke="white" strokeWidth="1.11813"/>
<circle cx="32.92" cy="33.63" r="26.8351" fill="white"/>
<path d="M41.8653 34.921C42.8592 34.3472 42.8592 32.9127 41.8653 32.3388L28.4478 24.5922C27.4539 24.0184 26.2115 24.7357 26.2115 25.8833L26.2115 41.3766C26.2115 42.5242 27.4539 43.2415 28.4478 42.6677L41.8653 34.921Z" fill="#26237D"/>
</svg>

                </div>
                <div className="storyCardData">
                  <span className="storyHeading">{item.title}</span>
                </div>
              </div>
              <Popup id={modalId}>
                <iframe
                  width="560"
                  height="315"
                  src={embedUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Popup>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Card;
