import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
const Hero = ({ title, description, imageUrl }) => {
  return (
    <section className={` spacing topGenericBanner ${styles.bannerWrapper} `}>
      <div className="container  ">
        <div className="row">
          <div className="col-lg-6 d-md-flex align-items-center  ">
            <div className="bannerContent">
              <h2>
                {title}
              </h2>
              <p>
                {description}
              </p>
              {/* <a href="#" className={` btn1 ${styles.btn1}  `}>
                Donate Now
              </a> */}
              <PrimaryButton isLink={true} href={"/stores"}>
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

export default Hero;
