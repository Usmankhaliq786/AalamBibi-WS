import styles from "./ourTeam.module.css";
import React, { Fragment } from "react";

import OurFounder from "@/components/OurFounder/OurFounder";
import OurExecutiveMembers from "@/components/OurExecutiveMembers/OurExecutiveMembers";
import OurManagement from "@/components/OurManagement/OurManagement";
import MentorOfAalam from "@/components/MentorOfAalam/MentorOfAalam";
import FoundationaBoard from "@/components/FoundationaBoard/FoundationaBoard";
import AdvisoryBoard from "@/components/AdvisoryBoard/AdvisoryBoard";
import ABTTSAcademicCouncil from "@/components/ABTTSAcademicCouncil/ABTTSAcademicCouncil";

import {
  aalamBibiFoundationBoard,
  mohsineenData,
} from "@/lib/data/teamOfAalamData";

export const metadata = {
  title: "Our Team | Aalam Bibi Foundation",
  description:
    "The Aalam Bibi Trust (ABT) is an independent, non-political, charitable institution founded by Farah Deeba Akram in 2005 with the mission to serve the less privileged by providing education, food, and health facilities and empowering them to break the vicious cycle of poverty through integrated educational, ethical and social development.",
};

const OurTeam = () => {
  return (
    <Fragment>
      <section className={styles.top_static_section}>
        <OurFounder />

        <FoundationaBoard
          data={mohsineenData}
          heading="Mohsineen of Aalam Bibi Foundation"
          showButton={false}
        />

        <FoundationaBoard
          data={aalamBibiFoundationBoard}
          heading="Aalam Bibi Foundation Board"
          showButton={false}
        />

        {/* <OurExecutiveMembers /> */}

        <MentorOfAalam />

        <AdvisoryBoard />

        <ABTTSAcademicCouncil />

        <OurManagement />
      </section>
    </Fragment>
  );
};

export default OurTeam;