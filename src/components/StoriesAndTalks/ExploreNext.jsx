import React from "react";
import styles from "./exploreNext.module.css";
import Image from "next/image"; 
import {  storiesAndTalks } from "@/lib/data/storiesAndTalks";
import { getThumbnailUrl } from "./TalksCard";
import ExploreNextThumnailImage from "./ExploreNextThumnailImage";

const ExploreNext = () => {
  return (
    <div className={styles.categoryExploreMoreWrap}>
      <span className="StoryCategoryHead">What to explore next</span>
      <div className="row">
        {storiesAndTalks.slice(0,5).map((item,index) => {
          return (
            <div className="col-md-6 col-xl-12 mb-3 mb-xl-4" key={index}>
              <a href={item.video_link} target="_blank" className={styles.exploreMoreCard}>
                <div className={styles.ExploreMoreImg}>
                  <Image
                    src={getThumbnailUrl(item.video_link)}
                    width={90}
                    height={90}
                    alt={item.title}
                  ></Image>
                  {/* <ExploreNextThumnailImage thumbnails={item.thumbnails} title={item.title}/> */}
                </div>
                <span className={styles.exploreCardHeading}>{item.title}</span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreNext;
