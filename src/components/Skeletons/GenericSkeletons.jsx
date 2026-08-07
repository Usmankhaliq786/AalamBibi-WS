import React from "react";
import styles from "./genericSkeletons.module.css";

const GenericSkeletons = () => {
  return (
    <section className={`spacing ${styles.bgColor}`}>
      <div className="container">
        <div className="row">
          <div className={`col-md-7   ${styles.leftColumn} `}>
            <div className={`${styles.founder}  placeholder-glow`}>
              <h2 className="placeholder col-3 d-block"></h2>

              <div>
                <span className="placeholder col-5"></span>
              </div>
              <div>
                <span className="placeholder col-7"></span>
              </div>
              <div>
                <span className="placeholder col-8"></span>
              </div>
              <div>
                <span className="placeholder col-10"></span>
              </div>
              <div>
                <span className="placeholder col-5"></span>
              </div>
              <div>
                <span className="placeholder col-7"></span>
              </div>
              <div>
                <span className="placeholder col-8"></span>
              </div>
              <div>
                <span className="placeholder col-8"></span>
              </div>
              <div>
                <span className="placeholder col-7"></span>
              </div>
              <div>
                <span className="placeholder col-1"></span>
              </div>
            </div>
          </div>

          <div className={`col-md-5  ${styles.rightColumn} `}>
            <div className={styles.storyImg}>
              <svg
                className="bd-placeholder-img card-img-top radius"
                width="700"
                height="768"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenericSkeletons;
