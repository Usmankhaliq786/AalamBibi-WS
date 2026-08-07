"use client";
import { useState } from "react";
import styles from "./accordian.module.css";
import Image from "next/image";

const Accordian = ({ title, data }) => {
  // Local state to track the currently open accordion item
  const [openItemId, setOpenItemId] = useState(null);

  const handleToggle = (id) => {
    // If the clicked item is already open, close it, otherwise open it
    setOpenItemId(openItemId === id ? null : id);
  };

  const renderAccordionItems = (accordianData) => {
    if (!Array.isArray(accordianData) || accordianData.length === 0) {
      return <p>No content available.</p>;
    }

    return accordianData.map((accordianItem) => {
      const isOpen = openItemId === accordianItem.StaticPageContentId;
      return (
        <div
          className="accordion-item mb-3"
          key={accordianItem.StaticPageContentId}
        >
          <h3 className="accordion-header">
            <button
              className={`accordion-button ${isOpen ? "" : "collapsed"}`}
              type="button"
              onClick={() => handleToggle(accordianItem.StaticPageContentId)}
              aria-expanded={isOpen}
              aria-controls={accordianItem.StaticPageContentId}
            >
              {accordianItem.Title}
            </button>
          </h3>
          <div
            id={`A${accordianItem.StaticPageContentId}`}
            className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
          >
            <div className={`${styles.acc_body} accordion-body`}>
              {accordianItem.PageContent && (
                <p
                  className="footercontent"
                  dangerouslySetInnerHTML={{
                    __html: accordianItem.PageContent,
                  }}
                ></p>
              )}
              {accordianItem.ImageUrl && (
                <Image
                  src={`/${accordianItem.ImageUrl}`}
                  alt={accordianItem.Title}
                  className={styles.image}
                  width={320}
                  height={200}
                />
              )}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className={styles.wrapper}>
      {title && <h2>{title}</h2>}

      <div className={`accordion accordion-flush `}>
        {renderAccordionItems(data)}
      </div>
    </section>
  );
};

export default Accordian;
