import React, { Fragment } from "react";
import { TaleemOTarbiyatProgram } from "@/lib/data/taleemOtarbiyat";
import Hero from "@/components/Construction/Hero";
import ShapesSection from "@/components/Home/ShapesSection/ShapesSection";
import styles from "./taleemOTarbiyat.module.css";
import FreeOfCharge from "@/components/FreeOfCharge/FreeOfCharge";
import { EducationalProgramshapesData } from "@/lib/data/ShapesData";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

export const metadata = {
  title: "Taleem-o-Tarbiyat | Aalam Bibi Foundation",
  description:
    "Presently, 1000 students are getting free education in two branches of ABTTS located in Lahore and Muridka from pre-school to 10th grade. The institution not only imparts quality education but also instils ethical and moral values alongside personal grooming in its students.",
};
const TaleemOTarbiyat = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <BreadCrumb title={TaleemOTarbiyatProgram.title} />
        <Hero
          title={TaleemOTarbiyatProgram.title}
          description={TaleemOTarbiyatProgram.description}
          imageUrl={TaleemOTarbiyatProgram.imageUrl}
        />
        <div className="spacing">
          <FreeOfCharge />
        </div>
        <div
          className={`spacing  bgLightYellow taleemOTarbiyatShapes ${styles.taleemOTarbiyatShapes} `}
        >
          <div className="container text-center ">
            <h2>By The Numbers</h2>
          </div>
          <ShapesSection data={EducationalProgramshapesData} />
        </div>
      </div>
    </Fragment>
  );
};

export default TaleemOTarbiyat;
