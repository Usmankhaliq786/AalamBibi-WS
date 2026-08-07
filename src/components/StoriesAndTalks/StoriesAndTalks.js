"use client";
import React, { Fragment, Suspense, useState } from "react";
import Categories from "./Categories";
import ExploreNext from "./ExploreNext";
import { storiesAndTalks } from "@/lib/data/storiesAndTalks";
import dynamic from "next/dynamic";


const TalksCard = dynamic(() => import("./TalksCard"));
const StoriesAndTalks = () => {
  const [data, setData] = useState(storiesAndTalks);
  const [activeCategory, setActiveCategory] = useState(-1);

  return (
    <Fragment>
      <div className="col-12 col-xl-3 ">

        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setData={setData}
        />
        <div className="d-none d-xl-block ">
          <ExploreNext />
        </div>
      </div>
      <div className="col-12 col-xl-9 ">
        <Suspense fallback={<div>Loading...</div>}>
          <TalksCard data={data} />
        </Suspense>
      </div>
      <div className=" d-block d-xl-none col-12  ">
        <ExploreNext />
      </div>
    </Fragment>
  );
};

export default StoriesAndTalks;
