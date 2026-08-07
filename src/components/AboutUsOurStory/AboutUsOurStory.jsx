import React from "react";
import Image from "next/image";

import story from "../../../public/images/ourStory.png";
import styles from "./AboutUsOurStory.module.css";

const AboutUsOurStory = () => {
  return (
    <section className={`spacing ${styles.bgColor}`}>
      <div className="container">
        <div className={styles.storyLayout}>
          <div className={styles.leftColumn}>
            <div className={styles.story}>
              <h2>Our Story</h2>

              <p>
                A 19-year-old undergraduate student and an aspiring writer,
                Farah Deeba Akram, used to pen down the lifestyle of people
                belonging to different strata of the society. One day while
                walking in the slums and jotting down her observations about
                life outside the posh areas of Lahore, she gave biscuits to the
                street children who were constantly looking at her bag. “I don’t
                need the biscuits”, said one of the street children. “I wish to
                have a pencil and a copy from your bag”. Farah was greatly moved
                by the quest for formal education shown by the street children
                and decided to provide them their basic right to education.
                Hence, under the shadow of a tree, the Aalam Bibi School had its
                humble beginning in 2005 when Farah made a routine to go every
                day in the industrial area of Kot Lakhpat – then notorious for
                drug addicts and street criminals.
              </p>

              <p>
                Meanwhile, she rented a small house of almost 4-marla (101 sq.
                meters) in the same locality and converted that into a school
                building. She started a door-to-door campaign for the importance
                of education and enrolled 60 students in the first batch.
                Initially, the school was run solely by her pocket money and
                funds donated by her father, Muhammad Akram. Farah was the only
                teacher and the administrator of the school. Soon, her family
                and friends joined her in the cause of Aalam Bibi and started
                volunteering at the school.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.stickyImageWrapper}>
              <Image
                className={styles.ourImg}
                src={story}
                width={685}
                height={542}
                alt="Children learning under a tree"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsOurStory;