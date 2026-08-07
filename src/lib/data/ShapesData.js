// shapesData.js
import {
  NumberOfYears,
  NumberOfStudents,
  MealServed,
  NumberOfBranches,
  NumberofTeachers,
  TeacherStudentRation,
} from "@/lib/svgs/svgIcons";

// shapesData.js
export const LandingPageshapesData = [
  {
    svg: <NumberOfYears classes="shapesYear" />,
    title: "Number of Years",
    steps: 2,
    animation: 19,
    number: "20+",
  },
  {
    svg: <NumberOfStudents classes="shapesStudent" />,
    title: "Number of Students",
    steps: 10,
    animation: 99,
    number: "1.5K+",
  },
  {
    svg: <MealServed classes="shapesMeal" />,
    title: "Meal Served",
    steps: 10,
    classes: "shapTextMeals",
    animation: 100,
    number: "12M+",
  },
  {
    svg: <NumberOfBranches classes="shapesNumber" />,
    title: "Number of Branches",
    steps: 1,
    animation: 2,
    number: "02",
  },
];

export const EducationalProgramshapesData = [
  {
    svg: <NumberOfBranches classes="shapesNumber" />,
    title: "Number of Branches",
    steps: 1,
    animation: 2,
    number: "02",
  },
  {
    svg: <NumberOfStudents classes="shapesStudent" />,
    title: "Number of Students",
    steps: 10,
    animation: 99,
    number: "1K+",
  },
  {
    svg: <NumberofTeachers classes="shapesYear" />,
    title: "Number of Teachers",
    steps: 5,
    animation: 40,
    number: "45",
  },
  {
    svg: <TeacherStudentRation classes="shapesMeal" />,
    title: "Tchr,Stdnt Ratio",
    steps: 1,
    classes: "shapTextMeals",
    animation: 2,
    number: "1.25",
  },
];

