'use client';
import React, { useState } from "react";
import Card from "./Card";
import Categories from "./Categoires";
import { storiesAndTalks } from "@/lib/data/storiesAndTalks";

const CategoriesAndCard = () => {
  const [data, setData] = useState(storiesAndTalks);
  const [activeCategory, setActiveCategory] = useState(-1);
  return (
    <div>
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setData={setData}
      />

      <Card data={data} />
    </div>
  );
};
export default CategoriesAndCard;
