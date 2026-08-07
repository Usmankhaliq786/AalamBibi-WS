
import TeamOfAalam from "@/components/Home/TeamOfAalam/TeamOfAalam";
import Whatwe from "@/components/Home/WhatWe/Whatwe";
import SocialDevelopment from "@/components/Home/SocialDevelopment/SocialDevelopment";
import Successful from "@/components/Home/Successful/Successful";
import Collaboration from "@/components/Home/Collaboration/Collaboration";
import OurStory from "@/components/Home/OurStory/OurStory";
import ShapesSection from "@/components/Home/ShapesSection/ShapesSection";
import Sustainable from "@/components/Home/Sustainable/Sustainable";
import BecomeAVolunteer from "@/components/Home/BecomeAVolunteer/BecomeAVolunteer";
import Hero from "@/components/Home/Hero/Hero";
import Scholars from "@/components/Home/Scholars/Scholars";
import StoriesTalks from "@/components/Home/StoriesTalks/StoriesTalks";
import { LandingPageshapesData } from "@/lib/data/ShapesData";
import { teamOfAalamData } from "@/lib/data/teamOfAalamData";
import { CollaborationData } from "@/lib/data/colaboratorData";
import { CollaborationPageData } from "@/lib/data/ColaborationPageData";

export const metadata = {
  title: "Home | Aalam Bibi Foundation",
  description:
    "The Aalam Bibi Trust (ABT) is an independent, non-political, charitable institution founded by Farah Deeba Akram in 2005 with the mission to serve the less privileged  by providing education, food, and health facilities and empower them to break the vicious cycle of poverty through integrated educational, ethical and social development",
};
export default function Home() {
  return (
    <main>
      <div className="wrapper">
        <Hero />
        <ShapesSection data={LandingPageshapesData} />
        <SocialDevelopment />
        <Whatwe />
        <OurStory />
        <Successful />
        <TeamOfAalam data={teamOfAalamData} showButton={true} heading="Team of Aalam Bibi Foundation" />
        <Scholars />
        <Sustainable />
        <Collaboration collaborators={CollaborationPageData} />
        <StoriesTalks />
        <BecomeAVolunteer />
      </div>
    </main>
  );
}
