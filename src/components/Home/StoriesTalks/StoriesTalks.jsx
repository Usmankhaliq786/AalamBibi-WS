import styles from "./storiesTalks.module.css";
import Image from "next/image";
import bgImg from "../../../../public/images/storiesBgImg.png";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import CategoriesAndCard from "./CategoriesAndCard";
const StoriesTalks = () => {
  
  return (
    <section id="storiesSectionWrap"
      className={` storiesSection bgLightBlue spacing ${styles.storiesSection}  `}
    >
      <Image
        className={` position-absolute ${styles.bg} ${styles.bg1} `}
        src={bgImg}
        width={607}
        height={579}
        alt="aalam bibi"
      ></Image>
      <Image
        className={` position-absolute ${styles.bg} ${styles.bg2} `}
        src={bgImg}
        width={607}
        height={579}
        alt="aalam bibi"
      ></Image>
      <div className="container">
        <h2>Stories & Talks</h2>
        <CategoriesAndCard />
        <div
          className={` d-flex justify-content-center ${styles.viewMoreBtn}  `}
        >
          {/* <a href="#" className="btn1  ">
            View more{" "}
          </a> */}
          <PrimaryButton isLink={true} href={"/stories"}>
            View more
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default StoriesTalks;
