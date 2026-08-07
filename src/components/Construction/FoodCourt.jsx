import React from "react";
import styles from "./foodCourt.module.css";
import Image from "next/image";
import foodCourtImg1 from "../../../public/images/foodCourtImg1.png";
import { foodCourtList } from "@/lib/data/constructionProgram";
const FoodCourt = () => {
  return (
    <section className={` spacing topGenericBanner ${styles.foodCourtWrap} `}>
      <div className="container  ">
        <div className="row">
          <div className="col-lg-6 d-md-flex align-items-center  ">
            <div className="bannerContent">
              <h2>Food Court and Kitchen</h2>
              <p>
                Catering to the nutritional needs of students, providing a space
                for communal dining and promoting a healthy lifestyle.
              </p>
              <div className="sectionInsideTags">
                {foodCourtList.map((item, index) => {
                  return (
                    <div className="sectionTag" key={index}>
                      <div className="sectionTagImg">
                        <Image
                          src={item.icon}
                          width={48}
                          height={48}
                          alt={item.content}
                        ></Image>
                      </div>
                      <span className="sectionTagContent">{item.content}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-6 topGenericBannerImg ">
            <Image
              src={foodCourtImg1}
              width={742}
              height={595}
              alt="alam bibi"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCourt;
