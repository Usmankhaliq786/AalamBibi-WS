import React from "react";
import styles from "./ourCollaborators.module.css";
import { CollaborationPageData } from "@/lib/data/ColaborationPageData";
import Collaboration from "@/components/Home/Collaboration/Collaboration";
const OurCollaborators = () => {
  return (
    <section className={styles.top_static_section}>
      <Collaboration collaborators={CollaborationPageData} />
    </section>
  );
};

export default OurCollaborators;
