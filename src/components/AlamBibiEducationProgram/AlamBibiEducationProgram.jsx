import React from "react";
import EducationProgramsLayout from "../EducationProgramsLayout/EducationProgramsLayout";
import { educationalProgram } from "@/lib/data/educationalProgram";

const AlamBibiEducationProgram = () => {
  return (
    <EducationProgramsLayout
      title={educationalProgram.title}
      description={educationalProgram.description}
      imageUrl={educationalProgram.imageUrl}
      list={educationalProgram.list}
    />
  );
};

export default AlamBibiEducationProgram;
