import React from "react";
import styles from "./talks.module.css";
import Popup from "../Popup/Popup";
import Image from "next/image";

// Function to extract the video ID
export const extractVideoId = (url) => {
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// Generate the thumbnail URL
export const getThumbnailUrl = (url) => {
  const videoId = extractVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
};

// Convert to embed URL using video ID
const convertToEmbedUrl = (url) => {
  const videoId = extractVideoId(url);
  return videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : "Invalid YouTube URL";
};

const TalksCard = ({ data }) => {
  return (
    <div className="row">
      {data.map((item, index) => {
        const embedUrl = convertToEmbedUrl(item.video_link);
        const modalId = `modal-${index}`;

        return (
          <div
            key={index}
            className="col-md-6 col-xxl-4 d-flex justify-content-center cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target={`#${modalId}`} // Unique modal target for each card
          >
            <div className={`storiesCard ${styles.storiesCard}`}>
              <div className="storiesCardImgWrap">
                <Image
                  src={getThumbnailUrl(item.video_link)}
                  width={352}
                  height={204}
                  alt={item.title}
                />

                <svg
                  width="66"
                  height="67"
                  viewBox="0 0 66 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.680158"
                    y="1.3911"
                    width="64.4787"
                    height="64.4787"
                    rx="32.2394"
                    stroke="white"
                    strokeWidth="1.11813"
                  />
                  <circle cx="32.92" cy="33.63" r="26.8351" fill="white" />
                  <path
                    d="M41.8653 34.921C42.8592 34.3472 42.8592 32.9127 41.8653 32.3388L28.4478 24.5922C27.4539 24.0184 26.2115 24.7357 26.2115 25.8833L26.2115 41.3766C26.2115 42.5242 27.4539 43.2415 28.4478 42.6677L41.8653 34.921Z"
                    fill="#26237D"
                  />
                </svg>
              </div>
              <div className="storyCardData">
                <span className="storyHeading">{item.title}</span>
              </div>
            </div>

            {/* Popup component with unique ID */}
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
        );
      })}
    </div>
  );
};

export default TalksCard;
