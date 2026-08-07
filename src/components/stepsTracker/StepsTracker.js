import styles from "./steptracker.module.css";
const StepsTracker = ({ activeOne, activeTwo, activeThree, activeFour }) => {
  return (
    <div className={styles.stepsHolder}>
      {[1, 2, 3, 4].map((step) => (
        <div
          key={step}
          className={`${
            activeStep + 1 === step
              ? `${styles.list} ${styles.active}`
              : `${styles.list}`
          }
              ${activeStep + 1 > step ? styles.completed : null}
              `}
        >
          <span className={styles.numberBox}>
            {activeStep + 1 > step ? (
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5987 0.252308C16.0688 0.64013 16.1355 1.3356 15.7477 1.80569L6.28131 13.2801C6.08284 13.5207 5.72456 13.549 5.4907 13.3427L0.373395 8.82741C-0.0835679 8.42421 -0.127149 7.72691 0.276054 7.26995C0.679256 6.81298 1.37656 6.7694 1.83352 7.1726L5.66784 10.5558L14.0454 0.401262C14.4332 -0.0688251 15.1286 -0.135514 15.5987 0.252308Z"
                  fill="white"
                />
              </svg>
            ) : (
              step
            )}
            {}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StepsTracker;
