import React from "react";
import styles from "./volunteer.module.css";
import Accordian from "@/components/Accordian/Accordian";
import lhr from "../../../public/images/lhr.png";
import Image from "next/image";
import {
  EducationTrainingContent,
  CreativeDepartmentContent,
  HealthDepartmentContent,
  OutreachDepartmentContent,
} from "@/lib/data/VolunteerAccordian";
import VolunteerForm from "@/components/VolunteerForm/VolunteerForm";
import Popup from "@/components/Popup/Popup";

export const metadata = {
  title: "Become a Volunteer | Aalam Bibi Foundation",
  description:
    "Volunteers are vital to our mission. Join us to create real change in the community. Every skill and effort make a difference. Whether you’re sharing knowledge or gaining experience, there’s a place for you here. Make an impact today!",
};
const Volunteer = () => {
  return (
    <div className={`container ${styles.top_static_section}`} id="volunteer">
      <div className={`row ${styles.internWrap}`}>
        <div className={styles.internHeading}>
          <h2> Become a Volunteer/Intern/Ambassador </h2>
        </div>
        <div data-bs-toggle="modal" data-bs-target={`#model2`}>
          <Image src={lhr} alt="habgfty" width={1600} height={600} />
          <Popup id="model2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SNVSUwYwpNc?si=_HlSOs9yu2rzTS_5"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Popup>
        </div>
      </div>

      <div className="row">
        <div className="col-md-7">
          <Accordian
            title="Education and Training (Taleem-O-Tarbiyat)"
            data={EducationTrainingContent}
          />
          <Accordian
            title="Outreach Department"
            data={OutreachDepartmentContent}
          />
          <Accordian
            title="Creative Department"
            data={CreativeDepartmentContent}
          />
          <Accordian title="Health Department" data={HealthDepartmentContent} />
        </div>
        <div className="col-md-5">
          <VolunteerForm />
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
