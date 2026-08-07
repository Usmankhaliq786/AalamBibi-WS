import React from "react";
import EducationProgramsLayout from "@/components/EducationProgramsLayout/EducationProgramsLayout";
import { inclusiveEcducationProgram } from "@/lib/data/inclusiveEcducationProgram";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

export const metadata = {
  title: "Inclusive Education Program | Aalam Bibi Foundation",
  description:
    "The Aalam Bibi believes that learning difficulties and disabilities should not be a barrier to any child. Thereby, Aalam Bibi established the Inclusive Education Program for differentlyabled children in collaboration with Amin Maktab. Currently, 30 students are enrolled in this program. The main aim of this program is to groom and train the student’s capabilities and strengths to enable them to live a self-sufficient life.",
};
const InclusiveEducationProgram = () => {
  return (
    <div className="wrapper">
      <BreadCrumb title={inclusiveEcducationProgram.title} />
      <EducationProgramsLayout
        title={inclusiveEcducationProgram.title}
        description={inclusiveEcducationProgram.description}
        imageUrl={inclusiveEcducationProgram.imageUrl}
        list={inclusiveEcducationProgram.list}
      />
    </div>
  );
};

export default InclusiveEducationProgram;
