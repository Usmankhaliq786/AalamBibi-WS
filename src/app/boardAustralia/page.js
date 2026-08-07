import BoardAus from '@/components/AdvisoryBoardAus/AdvisoryBoardAus'
import DonateAus from '@/components/DonateAus/DonateAus'
import TeamOfAalam from '@/components/Home/TeamOfAalam/TeamOfAalam'
import FocalPersons from "@/components/FocalPersons/FocalPersons";
import { teamOfAalamAusData } from "@/lib/data/teamOfAalamData"; 

import React from 'react'
import BoardAusTeam from '@/components/Home/TeamOfAalam/BoardAusTeam';

const BoardAustralia = () => {
  return (
    <div className="wrapper">
      <section id="advisory-board spacing" className='spacing'>
        
        <BoardAus heading={"Advisory Board Australia"}/>
      </section>
      {/* <section id="advisory-board">
        <BoardAus heading={"Advisory Board Australia"} name={"Shauquett Moselmane"} image={ShauquettMoselmane} occupation='Advisor' />
      </section> */}

      <section id="team-of-aalam">
        <BoardAusTeam data={teamOfAalamAusData} showButton={false} />
      </section>

      <section id="focal-persons">
        <FocalPersons />
      </section>

      <section id="donate-aus">
        <DonateAus />
      </section>
    </div>
  );
}

export default BoardAustralia