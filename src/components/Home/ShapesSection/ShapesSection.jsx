import React from "react";
import styles from "./ShapesSection.module.css";
import Card from "./Card";

const ShapesSection = ({ data }) => {
  return (
    <section className={` ShapSwraper ${styles.ShapSwraper} `}>
      <div className="container">
        <div className="row gy-4 mx-lg-4 ">
          {data.map((cardData, index) => (
            <div key={index} className={`col-md-3 col-6 ${styles.ShapImg} shapesCol `}>
             {cardData.svg}
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
};

export default ShapesSection;