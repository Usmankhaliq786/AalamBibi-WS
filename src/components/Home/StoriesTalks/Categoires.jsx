"use client";
import React from "react";
import styles from "./categories.module.css";
import { storiesAndTalksCategories } from "@/lib/data/storiesAndTalks";
import { storiesAndTalks } from "@/lib/data/storiesAndTalks";
const Categories = ({ activeCategory, setActiveCategory, setData }) => {
  const handleCategory = (id) => {
    let data =
      id == -1
        ? storiesAndTalks
        : storiesAndTalks.filter((item) => item.category.id === id);
    setActiveCategory(id);
    setData(data);
  };
  return (
    <div className={` ${styles.CategoriesWrap} `}>
      <div className={`categoriesSelection ${styles.categoriesSelection} `}>
        {storiesAndTalksCategories.map((item) => {
          return (
            <span
              className={`storyCategory  ${
                item.id === activeCategory ? "active" : null
              } `}
              key={item.id}
              onClick={handleCategory.bind(null, item.id)}
            >
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
