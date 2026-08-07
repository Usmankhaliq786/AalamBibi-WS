"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TeamOfAalam.module.css";

const TeamOfAalam = ({ data = [], showButton = true ,heading="Board Australia"}) => {
  return (
    <section className="spacing">
      <div className={`container ${styles.mainteam}`}>
        <div className={`row ${styles.around}`}>
          <div className={styles.teamHeading}>
            <h2>{heading}</h2>
          </div>

          {data.map((member) => (
            <div key={member.id} className={`col-md-2 ${styles.person}`}>
              <div className={styles.teamPerson}>
                <Image
                  src={member.image}
                  className={styles.onlyimg}
                  width={255}
                  height={526}
                  quality={100}
                  alt={member.name}
                />
                <p>{member.name}</p>
                <span className="text-center">{member.position}</span>
                <a href={`mailto:${member.mail}`}>{member.mail}</a>
              </div>
            </div>
          ))}

          {showButton && (
            <div className={`d-flex justify-content-center ${styles.extrabtn}`}>
              <Link className="btn nvaBtn" href="/ourTeam">
                Meet Our Team
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamOfAalam;
