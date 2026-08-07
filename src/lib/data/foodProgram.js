import Nutritiousfood from "../../../public/svgs/foodProgram/Nutritiousfood.svg"
import HygienicAndTasty from "../../../public/svgs/foodProgram/HygienicAndTasty.svg"
import LunchComprised from "../../../public/svgs/foodProgram/LunchComprised.svg"
import NoCost from "../../../public/svgs/foodProgram/NoCost.svg"
import MothlyRelation from "../../../public/svgs/foodProgram/MothlyRelation.svg"
export const foodProgramList = [
  {
    icon: Nutritiousfood,
    content: "Nutritious food including meat, vegetable, grains, beans, rice",
  },
  {
    icon: HygienicAndTasty,
    content: "Hygienic and Tasty",
  },
  {
    icon: NoCost,
    content: "No Cost",
  },
  {
    icon: MothlyRelation,
    content:
      "Monthly Ration Distribution (Monthly groceries are distributed to the 25 most vulnerable families in the community)",
  },
  {
    icon: LunchComprised,
    content:
      "Monthly Grand Lunch (Under Aalam Bibi Food Program, a grand lunch comprised of meat dishes is prepared for all the students in the school)",
  },
];

export const foodProgram = {
  title: "Aalam Bibi Food Program",
  imageUrl: "/images/foodProgramImg.png",
  description:
    "Aalam Bibi Foundation is serving in the area where the majority of people live below the poverty line. They strive hard for fulfilling their basic needs, many are unable to afford proper meals three times a day. Keeping in view of the poor conditions of the labor class in the vicinity, Aalam Bibi is striving to provide quality, hygienic and healthier food to the  laborers, hawkers, and other less privileged members of the community free of cost. A food shop is operational in the locality which served 300 meals every day. A large number of students attend school without breakfast because they belong to that underprivileged segment of society who is hardly able to take one meal a day. This food program provides free lunch to 150 students and takes care of their nutritious needs.",
  list: foodProgramList,
};
