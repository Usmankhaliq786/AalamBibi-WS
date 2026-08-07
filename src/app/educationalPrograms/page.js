import React from 'react'
import ExploreEducationalPrograms from "@/components/ExploreEducationalPrograms/ExploreEducationalPrograms";
import AlamBibiEducationProgram from "@/components/AlamBibiEducationProgram/AlamBibiEducationProgram";

export const metadata = {
  title: "Educational Programs | Aalam Bibi Foundation",
  description:
    "The Aalam Bibi features an innovative educational paradigm dedicated to delivering high quality education to children born into underprivileged circumstances. The model revolves around the principle that a child's pursuit of life goals and aspirations should never be hindered by their socioeconomic background.Focusing on specific communities, Aalam Bibi strives to guide children from the streets to their initial school experience, offering free, quality education. ",
};

const EductionalPrograms = () => {
  return (
    <div className='wrapper'>

        <AlamBibiEducationProgram/>
        <ExploreEducationalPrograms/>

    </div>
  )
}

export default EductionalPrograms

