import React from "react";
import Image from "next/image";
import Link from "next/link";

import become from "../../../../public/images/become.png";
import styles from "./becomeAVolunteer.module.css";
import VolunteerForm from "../../VolunteerForm/VolunteerForm";

const volunteerAreas = [
  {
    title: "Education and Training",
    subtitle: "Taleem-O-Tarbiyat",
    cardClass: styles.labelEducation,
  },
  {
    title: "Outreach Department",
    subtitle: "Community Engagement",
    cardClass: styles.labelOutreach,
  },
  {
    title: "Creative Department",
    subtitle: "Media & Innovation",
    cardClass: styles.labelCreative,
  },
  {
    title: "Medical Camp",
    subtitle: "Healthcare Support",
    cardClass: styles.labelMedical,
  },
];

const BecomeAVolunteer = () => {
  return (
    <section className={`spacing ${styles.volunteerSection}`}>
      <div className="container">
        <div
          className={`row align-items-stretch g-4 ${styles.around} ${styles.BecomebottomSpace}`}
        >
          <div className={`col-lg-6 ${styles.leftColumn}`}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.onlyImg}
                src={become}
                width={820}
                height={664}
                alt="Teacher with children"
                quality={100}
              />
            </div>

            <div className={styles.becomTiles}>
              {volunteerAreas.map((item) => (
                <div
                  key={item.title}
                  className={`${styles.labelCard} ${item.cardClass}`}
                >
                  <span className={styles.labelTitle}>{item.title}</span>
                  <span className={styles.labelSubtitle}>{item.subtitle}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`col-lg-6 ${styles.formColumn}`}>
            <div className={styles.VolunteerFrom}>
              <span className={styles.sectionLabel}>Join Our Mission</span>

              <h2>Become a Volunteer</h2>

              <p>
                Volunteers are vital to our mission. Join us to create real
                change in the community. Every skill and effort makes a
                difference. Whether you are sharing knowledge or gaining
                experience, there is a place for you here.
              </p>

              <Link href="/volunteer" className={styles.readMore}>
                Explore More
                <span aria-hidden="true">→</span>
              </Link>

              <div className={styles.formWrapper}>
                <VolunteerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAVolunteer;