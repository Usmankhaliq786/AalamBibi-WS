import React from "react";
import styles from "./reports.module.css";
import { reportsAndCertificates } from "@/lib/data/reportsAndCertificates";
import { DownloadPdfIconTrans } from "@/lib/svgs/svgIcons";

export const metadata = {
  title: "Reports | Aalam Bibi Foundation",
  description:
    "Transparency and accountability are at the core of our foundation. Below, you’ll find our audit reports and certificates, detailing our financial practices and commitment to ethical standards. We believe that keeping our supporters informed builds trust and reflects our dedication to our mission.",
};

const Reports = () => {
  return (
    <section className={` wrapper ${styles.pageSection}`}>
      <div className={`container ${styles.reportsSection}`}>
        <div className={styles.content}>
          <h2>Audit Reports & Certificates</h2>

          <p>
            Transparency and accountability are at the core of our foundation.
            Below, you’ll find our audit reports and certificates, detailing our
            financial practices and commitment to ethical standards. We believe
            that keeping our supporters informed builds trust and reflects our
            dedication to our mission.
          </p>
        </div>

        <div className={styles.reportsWrapper}>
          <div className={`row ${styles.reportsRowWrapper}`}>
            {reportsAndCertificates.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`col-12 ${styles.reportCol}`}
                >
                  <a
                    href={item.filePath}
                    download
                    className={styles.reportCard}
                    aria-label={`Download ${item.name}`}
                  >
                    <span className={styles.fileIcon}>
                      {item.fileExtensionIcon}
                    </span>

                    <div className={styles.reportContent}>
                      <strong title={item.name}>{item.name}</strong>
                      <p>
                        {item.noOfPages}{" "}
                        {item.noOfPages > 1 ? "Pages" : "Page"}
                      </p>
                    </div>

                    <span className={styles.downloadIcon}>
                      <DownloadPdfIconTrans />
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;