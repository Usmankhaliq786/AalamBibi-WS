import React, { Fragment } from 'react'
// import styles from "./construction.module.css"
import Hero from '@/components/Construction/Hero'
import EducationalBlock from '@/components/Construction/EducationalBlock'
import LearningSpaces from '@/components/Construction/LearningSpaces'
import FoodCourt from '@/components/Construction/FoodCourt'
import CommunitySupportUnit from '@/components/Construction/CommunitySupportUnit'
import { ConstructionProgram } from '@/lib/data/constructionProgram'
import ConstructionStats from '@/components/Construction/ConstructionStats'
const Construction = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <Hero
          title={ConstructionProgram.title}
          description={ConstructionProgram.description}
          imageUrl={ConstructionProgram.imageUrl}
        />
        <EducationalBlock />
        <LearningSpaces />
        <FoodCourt />
        <CommunitySupportUnit />
        <ConstructionStats/>
      </div>
    </Fragment>
  );
}

export default Construction