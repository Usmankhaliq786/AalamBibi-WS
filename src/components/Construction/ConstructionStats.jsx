import React from 'react'
import styles from "./constructionStats.module.css"
const ConstructionStats = () => {
  return (
    <section className={` spacing ${styles.communitySupportWrap} `} >
    <div className={` container ${styles.container} `} >
      <div className="row">
        <div className="col-lg-6 mb-3 mb-lg-4 ">
          <div className={` bgPurple ${styles.usageSummary} `}>
            <span className={styles.userSummaryHead}>Usage summary</span>
            <div className={styles.usageSummaryContent}>
              <div className={styles.usageSummaryContentInside}>
                <span className={styles.usageSummaryLeft}>Basement</span>
                <span className={styles.usageSummaryRight}>School</span>
              </div>
              <div className={styles.usageSummaryContentInside}>
                <span className={styles.usageSummaryLeft}>Gr floor</span>
                <span className={styles.usageSummaryRight}>
                  Offices, School, Dastarkhwan
                </span>
              </div>
              <div className={styles.usageSummaryContentInside}>
                <span className={styles.usageSummaryLeft}>1st floor</span>
                <span className={styles.usageSummaryRight}>
                  School, library
                </span>
              </div>
              <div className={styles.usageSummaryContentInside}>
                <span className={styles.usageSummaryLeft}>2nd floor</span>
                <span className={styles.usageSummaryRight}>
                  School, labs, workshops
                </span>
              </div>
              <div className={styles.usageSummaryContentInside}>
                <span className={styles.usageSummaryLeft}>3rd floor</span>
                <span className={styles.usageSummaryRight}>
                  Hostel and rooms for visitors
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6  mb-3 mb-lg-4    ">
          <div className={` bgGreen  ${styles.usageSummary} `}>
            <span className={styles.userSummaryHead}>Work Schedule</span>
            <div className={styles.usageSummaryContent}>
              <div className={styles.usageSummaryContentInside}>
                <span className={styles.usageSummaryLeft}>
                  Duration Phase 1
                </span>
                <span className={styles.usageSummaryRight}>18 Months</span>
              </div>
              <div className={styles.usageSummaryContentInside}>
                <span className={styles.usageSummaryLeft}>
                  Phase 1 Commencement
                </span>
                <span className={styles.usageSummaryRight}>16 Nov, 2023</span>
              </div>
              <div className={styles.usageSummaryContentInside}>
                <span className={styles.usageSummaryLeft}>
                  Phase 1 Completion
                </span>
                <span className={styles.usageSummaryRight}>15 May, 2025</span>
              </div>
              <div className={styles.usageSummaryContentInside}>
                <span className={styles.usageSummaryLeft}>
                  Duration Phase 2
                </span>
                <span className={styles.usageSummaryRight}>12 Months</span>
              </div>
              <div className={styles.usageSummaryContentInside}>
                <span className={styles.usageSummaryLeft}>3rd floor</span>
                <span className={styles.usageSummaryRight}>
                  Hostel and rooms for visitors
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4  mb-3  ">
          <div className={` bgGreen ${styles.totalAreaWrap} `}>
            <span className={styles.totalAreaHead}>Total Area:</span>
            <span className={styles.totalArea}>12 Kanals (54000 sft) </span>
          </div>
        </div>
        <div className="col-md-6 col-lg-4  mb-3   ">
          <div className={` bgYellow ${styles.totalAreaWrap} `}>
            <span className={styles.totalAreaHead}>Open Area:</span>
            <span className={styles.totalArea}>30,947 sft</span>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mx-auto   ">
          <div className={` bgBlue ${styles.totalAreaWrap} `}>
            <span className={styles.totalAreaHead}>Total Project Cost:</span>
            <span className={styles.totalArea}>RS. 706,569,098/-</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ConstructionStats