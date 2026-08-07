import React from "react";
import video from "../../../../public/images/video.png";
import Image from "next/image";
import styles from "./Successful.module.css";
import Link from "next/link";
import Popup from "@/components/Popup/Popup";
import MotionDiv from "./MotionDiv";
const Successful = () => {
  return (
    <section className="spacing">
      <div className={`container ${styles.backgroundSuccessful}`}>
        <div className="row">
          <div className="col">
            <MotionDiv className={styles.successfulHeading}>
              <h2> Our Successful Journey Continues </h2>
            </MotionDiv>
            <div
              className={`videoTag d-flex justify-content-center pt-3 `}
              data-bs-toggle="modal"
              data-bs-target={`#model1`}
            >
              <Image
                src={video}
                width={1130}
                height={640}
                alt="our dream school building"
              />
              <Popup id="model1">
                <video
                  width="1130"
                  height="100%"
                  controls
                  preload="none"
                  className="radius my-5"
                >
                  <source src="/video/DreamSchool.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Popup>

              {/* <video width="1130" height="640" controls preload="none" className="radius my-5">
      <source src="/path/to/video.mp4" type="video/mp4" />
      <track
        src="https://youtu.be/p3RzUc7jmZU?si=FUVOwqb9B2gi7haG"
        kind="subtitles" srcLang="en" label="English" />  Your browser does not support the video tag. </video> */}
            </div>

            <div className={styles.successfulPahra}>
              <p>
                Aalam Bibi is developing a state-of-the-art, purpose-built
                campus on a 12 Kanal area in Chandri Village, Lahore. This
                sustainable campus integrates environmentally friendly features,
                including solar energy, passive cooling, and abundant natural
                light. This forward-thinking facility is intended to provide
                high-quality education while serving as a hub for community
                empowerment and support.
              </p>
            </div>

           <div className={styles.successfulBtns}>
  <Link href="/construction" className={styles.updateBtn}>
    <span>Construction Update</span>
    <span className={styles.buttonArrow} aria-hidden="true">
      →
    </span>
  </Link>

  <Link href="/donateNow" className={styles.successfuldonateBtn}>
    <span>Donate Now</span>
    <span className={styles.buttonArrow} aria-hidden="true">
      →
    </span>
  </Link>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Successful;

/*



*/
