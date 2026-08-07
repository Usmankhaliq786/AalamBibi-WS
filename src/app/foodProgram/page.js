import EducationProgramsLayout from '@/components/EducationProgramsLayout/EducationProgramsLayout'
import { foodProgram } from '@/lib/data/foodProgram' 
import React from 'react'

export const metadata = {
  title: "Food Program | Aalam Bibi Foundation",
  description:
    "Aalam Bibi Foundation is serving in the area where the majority of people are living below the poverty line. They strive hard for fulfilling their basic needs but even then, unable to get the proper meals three times a day. Keeping in view of the poor conditions of the labor class in the vicinity.Aalam Bibi is striving to provide quality, hygienic and healthier food to the laborers, hawkers, and other less privileged members of the community free of cost. A food shop is operational in the locality which served 300 meals every day. A large number of students attend school without breakfast because they belong to that underprivileged segment of society who is hardly able to take one meal a day. This food program provides free lunch to 150 students and takes care of their nutritious needs.",
};
const FoodProgram = () => {
  return (
    <div className="wrapper">
      <EducationProgramsLayout
        title={foodProgram.title}
        description={foodProgram.description}
        imageUrl={foodProgram.imageUrl}
        list={foodProgram.list}
      />
    </div>
  )
}

export default FoodProgram