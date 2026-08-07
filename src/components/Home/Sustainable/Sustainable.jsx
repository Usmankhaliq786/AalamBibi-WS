import React from "react";
import goals1 from "../../../../public/images/goals_1.png";
import goals2 from "../../../../public/images/goals_2.png";
import goals3 from "../../../../public/images/goals_3.png";
import goals4 from "../../../../public/images/goals_4.png";
import goals5 from "../../../../public/images/goals_5.png";
import goals10 from "../../../../public/images/goals_10.png";
import goals17 from "../../../../public/images/goals_17.png";
import styles from "./Sustainable.module.css";
import Image from "next/image";

const goals = [
  {
    image: goals1,
    alt: "No Poverty",
  },
  {
    image: goals2,
    alt: "Zero Hunger",
  },
  {
    image: goals3,
    alt: "Good Health and Well Being",
  },
  {
    image: goals4,
    alt: "Quality Education",
  },
  {
    image: goals5,
    alt: "Gender Equality",
  },
  {
    image: goals10,
    alt: "Reduced Inequalities",
  },
  {
    image: goals17,
    alt: "Partnerships For The Goals",
  },
];

const Sustainable = () => {
  return (
    <section className={`spacing ${styles.sustainableSection}`}>
      <div className="container">

        <div className={styles.sustainHeading}>
          <h2>Sustainable Development Goals</h2>
          <p>
            Our initiatives are aligned with the United Nations Sustainable
            Development Goals to build a healthier, educated and empowered
            community.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {goals.map((goal, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className={styles.goalCard}>
                <Image
                  className={styles.goalImage}
                  src={goal.image}
                  width={282}
                  height={228}
                  alt={goal.alt}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sustainable;