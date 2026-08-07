import Alumni from "@/components/Alumni/Alumni";
import EducationProgramsLayout from "@/components/EducationProgramsLayout/EducationProgramsLayout";
import { vocationalTraningProgram } from "@/lib/data/vocationalTraningProgram";
import React from "react";
import ScholarshipsAwarded from "@/components/ScholarshipsAwarded/ScholarshipsAwarded";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

export const metadata = {
  title:
    "Higher Education and Vocational Training Program | Aalam Bibi Foundation",
  description:
    "The majority of Aalam Bibi Alumni represent the first generation in their families to pursue education beyond secondary school. The Aalam Bibi provides a range of facilities to support its alumni in their pursuit of higher education and vocational trainings",
};
const VocationalTraningProgram = () => {
  return (
    <div className="wrapper">
      <BreadCrumb title={vocationalTraningProgram.title} />
      <EducationProgramsLayout
        title={vocationalTraningProgram.title}
        description={vocationalTraningProgram.description}
        imageUrl={vocationalTraningProgram.imageUrl}
        list={vocationalTraningProgram.list}
      />
      <Alumni />
      <ScholarshipsAwarded />
    </div>
  );
};

export default VocationalTraningProgram;


