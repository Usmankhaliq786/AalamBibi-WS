import React from "react";
import Image from "next/image";
import styles from "../../app/stories/stories.module.css";
import TopImg1 from "../../../public/images/storiesImg1.png";
import TopImg2 from "../../../public/images/storiesImg2.png";
import TopImg3 from "../../../public/images/storiesImg3.png";
import TopImg4 from "../../../public/images/storiesImg4.png";
import TopImg5 from "../../../public/images/storiesImg5.png";
import TopImg6 from "../../../public/images/storiesImg6.png";
import TopImg7 from "../../../public/images/storiesImg7.png";
import TopImg8 from "../../../public/images/storiesImg8.png";
import StoriesAndTalks from "@/components/StoriesAndTalks/StoriesAndTalks";
// import storyImg1 from "../"

export const metadata = {
  title: "Stories and Talks | Aalam Bibi Foundation",
  description: "Aalam Bibi Foundation Interviews",
};
const StoriesAndTalksContainer = () => {
  return (
    <section className={` wrapper ${styles.wrapper} `}>
      <div className="container">
        <div className={styles.storiesTopSection}>
          <h2>Stories and Talks</h2>
          <div
            className={` d-flex flex-wrap justify-content-center ${styles.storiesTopImgWrap} `}
          >
            <span className={styles.storiesTopImg}>
              <Image src={TopImg1} alt="News" width={155} height={155} />
            </span>
            <span className={styles.storiesTopImg}>
              <Image src={TopImg2} alt="News" width={155} height={155} />
            </span>
            <span className={styles.storiesTopImg}>
              <Image src={TopImg3} alt="News" width={155} height={155} />
            </span>
            <span className={styles.storiesTopImg}>
              <Image src={TopImg4} alt="News" width={155} height={155} />
            </span>
            <span className={styles.storiesTopImg}>
              <Image src={TopImg5} alt="News" width={155} height={155} />
            </span>
            <span className={styles.storiesTopImg}>
              <Image src={TopImg6} alt="News" width={155} height={155} />
            </span>
            <span className={styles.storiesTopImg}>
              <Image src={TopImg7} alt="News" width={155} height={155} />
            </span>
            <span className={styles.storiesTopImg}>
              <Image src={TopImg8} alt="News" width={155} height={155} />
            </span>
          </div>
        </div>
        <div className="row">
          <StoriesAndTalks />
        </div>
        {/* <Categories />
        <ExploreNext /> */}
      </div>
    </section>
  );
};

export default StoriesAndTalksContainer;
