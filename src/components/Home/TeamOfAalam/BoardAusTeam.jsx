"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TeamOfAalam.module.css";

const BoardAusTeam = ({ data = [], showButton = true ,heading="Aalam Bibi Board Australia"}) => {
  return (
    <section className="spacing">
      <div className={`container ${styles.mainteam}`}>
        <div className={`row `}>
          <div className={styles.teamHeading}>
            <h2>  {heading}</h2>
          </div>

          {data.map((member) => (
            <div key={member.id} className={`col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 ${styles.australiaTeam}`}>
              <div className={styles.teamPerson} >
                <Image
                  src={member.image}
                  className={styles.onlyimg}
                  width={178}
                  height={435}
                  quality={100}
                  alt={member.name}
                />
                <p>{member.name}</p>
                <span className="text-center">{member.position}</span>
                 <a href={`mailto:${member.mail}`} className={styles.mail} >{member.mail}</a>
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

export default BoardAusTeam;
