import React from "react";
import styles from "./ourTeam.module.css";
import GenericSkeletons from "@/components/Skeletons/GenericSkeletons";
const Loading = () => {
  return (
    <section className={styles.top_static_section}>
      <GenericSkeletons />
    </section>
  );
};

export default Loading;
