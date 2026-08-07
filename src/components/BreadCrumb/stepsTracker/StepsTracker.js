import styles from './steptracker.module.css';
const StepsTracker = ({ activeOne, activeTwo, activeThree, activeFour }) => {
  return (
    // <div className={styles.stepsContainer}>
    //   <div className={styles.steps}>
        <div className={styles.stepsHolder}>
          <div className={activeOne ? `${styles.list} ${styles.active}` : `${styles.list}`}>
            <span className={styles.numberBox}>1</span>
            <div className={`${styles.stpHead}`}>Cart</div>
          </div>
          <div className={activeTwo ? `${styles.list} ${styles.active}` : `${styles.list}`}>
            <span className={styles.numberBox}>2</span>
            <div className={styles.stpHead}>Delivery Details</div>
          </div>
          <div className={activeThree ? `${styles.list} ${styles.active}` : `${styles.list}`}>
            <span className={styles.numberBox}>3</span>
            <div className={styles.stpHead}>Payment Method </div>
          </div>
          <div className={activeFour ? `${styles.list} ${styles.active}` : `${styles.list}`}>
            <span className={styles.numberBox}>4</span>
            <div className={styles.stpHead}>Done</div>
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default StepsTracker;
