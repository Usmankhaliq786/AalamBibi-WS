import Image from "next/image";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const EducationProgramsLayout = ({ title, description, list, imageUrl }) => {
  return (
    <section className={` spacing topGenericBanner  `}>
      <div className="container  ">
        <div className="row">
          <div className="col-lg-6 d-md-flex align-items-center  ">
            <div className="bannerContent">
              <h2>{title}</h2>
              <p>{description}</p>

              <div className="sectionInsideTags">
                {list.map((item, index) => {
                  const { icon } = item;
                  return (
                    <div className="sectionTag" key={index}>
                      <div className="sectionTagImg">
                        <Image
                          src={item.icon}
                          width={48}
                          height={48}
                          alt={item.content}
                        />
                      </div>
                      <span className="sectionTagContent">{item.content}</span>
                    </div>
                  );
                })}
              </div>

              <PrimaryButton isLink={true} href={"/donateNow"}>
                Donate Now
              </PrimaryButton>
            </div>
          </div>
          <div className="col-lg-6 topGenericBannerImg ">
            <Image
              src={imageUrl}
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

export default EducationProgramsLayout;
