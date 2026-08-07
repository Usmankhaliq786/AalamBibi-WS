"use client";
import React from "react";
import styles from "./categories.module.css";
import { storiesAndTalksCategories } from "@/lib/data/storiesAndTalks";
import { storiesAndTalks } from "@/lib/data/storiesAndTalks";
import TextField from "../FormInputs/TextField";
import { Formik, Form } from "formik";
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
    <div className={styles.CategoriesWrap}>
      <span className="StoryCategoryHead">Search</span>
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          let data = storiesAndTalks.filter((item) =>
            item.title.toLowerCase().includes(values.name.toLowerCase())
          );

          setData(data);
        }}
      >
        {({ isSubmitting ,handleSubmit }) => (
          <Form id="searchForm">
          <div className={styles.inputwraper}> 
            <div className={styles.formField}>
              <TextField
                name="name"
                isRequired={true}
                errorMessage="required"
                placeholder="Interview"
                className={styles.inputField}
              />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleSubmit}
              >
                <path
                  d="M21.7505 20.689L16.0865 15.025C17.4475 13.391 18.1263 11.2951 17.9815 9.1734C17.8366 7.0517 16.8794 5.06752 15.3089 3.63361C13.7384 2.19971 11.6755 1.42648 9.54942 1.47479C7.42333 1.5231 5.39772 2.38922 3.89396 3.89298C2.3902 5.39674 1.52408 7.42236 1.47577 9.54844C1.42746 11.6745 2.20068 13.7374 3.63459 15.3079C5.0685 16.8784 7.05268 17.8356 9.17438 17.9805C11.2961 18.1253 13.3919 17.4466 15.026 16.0855L20.69 21.7495L21.7505 20.689ZM3.00045 9.74948C3.00045 8.41445 3.39633 7.10941 4.13803 5.99938C4.87973 4.88935 5.93394 4.02418 7.16734 3.51329C8.40074 3.0024 9.75794 2.86873 11.0673 3.12918C12.3767 3.38963 13.5794 4.0325 14.5234 4.97651C15.4674 5.92051 16.1103 7.12324 16.3708 8.43262C16.6312 9.74199 16.4975 11.0992 15.9866 12.3326C15.4757 13.566 14.6106 14.6202 13.5006 15.3619C12.3905 16.1036 11.0855 16.4995 9.75045 16.4995C7.96085 16.4975 6.24512 15.7857 4.97967 14.5203C3.71423 13.2548 3.00244 11.5391 3.00045 9.74948Z"
                  fill="#9895FA"
                />
              </svg>
            </div> </div>
          </Form>
        )}
      </Formik>
      <span className="StoryCategoryHead">Categories</span>

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
