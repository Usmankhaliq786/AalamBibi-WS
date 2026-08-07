import React from "react";
import styles from "./foodCourt.module.css";
import Image from "next/image";
import CommunityAcademicSupportUnit from "../../../public/images/CommunityAcademicSupportUnit.png";
import { AcademicSupportUnitList } from "@/lib/data/constructionProgram";
const CommunitySupportUnit = () => {
  return (
    <section className={` spacing topGenericBanner ${styles.foodCourtWrap} `}>
      <div className="container  ">
        <div className="row ">
          <div className="col-lg-6  ">
            <Image
              src={CommunityAcademicSupportUnit}
              width={742}
              height={595}
              alt="Community Academic Support Unit"
            ></Image>
          </div>
          <div className="col-lg-6 d-md-flex align-items-center topGenericBannerImg  ">
            <div className="CommunityContent">
              <h2>Community Academic Support Unit</h2>
              <p>
                Offers a range of services to Aalam Bibi students, alumni, and
                Chungi Amer Sidhu,  Chandri Village and Kot Lakhpat community, including
                career guidance, scholarship assistance, university admission
                support, and advice on self-employment.
              </p>
              <div className="sectionInsideTags">
                {AcademicSupportUnitList.map((item, index) => {
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
        </div>
      </div>
    </section>
  );
};

export default CommunitySupportUnit;
