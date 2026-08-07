import React from "react";
import gChild from "../../../../public/images/newChild.png";
import mobViewImageBoy from "../../../../public/images/mobViewImageBoy.png";
import mobViewImageGirl from "../../../../public/images/mobViewImageGirl.png";
import cboy from "../../../../public/images/socialDevelopment-2.png";
import tabViewImageBoy from "../../../../public/images/tabViewImageBoy.png";
import Image from "next/image";
import styles from "./socialDevelopment.module.css";

const SocialDevelopment = () => {
  return (
    <section className="spacing">
      <div className="container">
      <div
            id="socialDevelopment"
            className={`row gy-3 gx-lg-5 ${styles.rowGap} ${styles.mainWrapper}`}
          >
            <div className={`col-xxl-6 ${styles.leftWrapper}`}>
              <div className={styles.contentWrapper}>
                <h2 className={styles.socilHeading}>
                  Social Development Model Of Aalam Bibi Foundation
                </h2>
                <p className={styles.paragraph}>
                  The Aalam Bibi Foundation (ABF) is an independent,
                  non-political, non-profit organization founded by Farah Deeba
                  Akram in 2005 with the mission to serve the less privileged by
                  providing education, food, and health facilities and empower
                  them to break the vicious cycle of poverty through integrated
                  educational, ethical and social development.
                </p>
              </div>

              <div
                className={`${styles.socialCard} ${styles.qualityOverQuantity}`}>
                <svg width="76" height="71" viewBox="0 0 76 71" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path
                    d="M19.1501 25.3929L13.8576 42.5211L43.8444 64.4667L62.8802 32.4875L51.3409 18.8555L19.1501 25.3929ZM48.9417 22.4749L46.8975 33.6186L38.3367 24.6286L48.9417 22.4749ZM43.5588 34.5317L32.3523 36.8075L36.1001 26.7273L43.5588 34.5317ZM33.2977 25.6519L28.9823 37.1787L22.8441 27.7748L33.2977 25.6519ZM20.8492 30.2946L25.9596 38.1057L17.9119 39.7401L20.8492 30.2946ZM19.3507 42.5808L27.7742 40.8701L37.5416 55.802L19.3507 42.5808ZM42.576 58.2249L31.0696 40.5133L31.0836 40.1973L46.0497 37.158L46.1859 37.4435L46.2762 37.5033L42.576 58.2249ZM46.3568 54.0899L49.5259 36.5309L57.8744 34.8354L46.3568 54.0899ZM50.1027 33.2028L51.7766 24.0919L58.1504 31.5684L50.1027 33.2028Z"
                    fill="white"
                  />
                  <path
                    d="M30.6875 7.38867L33.6956 6.77778L35.6812 16.555L32.6731 17.1658L30.6875 7.38867Z"
                    fill="white"/>
                  <path
                    d="M62.622 6.91297L65.146 8.66053L58.9859 17.5571L56.4619 15.8096L62.622 6.91297Z"
                    fill="white"
                  />
                  <path
                    d="M4.06956 18.8074L13.2122 24.5974L11.5698 27.1911L2.42714 21.4011L4.06956 18.8074Z"
                    fill="white"
                  />
                </svg>
                <p>Quality Over Quantity</p>
              </div>
              <div
                className={`${styles.socialCard} ${styles.communityDevelopment}`}
              >
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1217_5147)">
                    <path
                      d="M48.484 8.04834L11.7568 2.54342C10.8713 2.41069 9.96932 2.63517 9.24931 3.16747C8.52931 3.69977 8.05025 4.49629 7.91752 5.38181L2.41259 42.109C2.27987 42.9945 2.50435 43.8965 3.03665 44.6165C3.56895 45.3365 4.36547 45.8156 5.25098 45.9483L41.9782 51.4532C42.8637 51.586 43.7657 51.3615 44.4857 50.8292C45.2057 50.2969 45.6848 49.5004 45.8175 48.6148L51.3224 11.8876C51.4551 11.0021 51.2307 10.1001 50.6984 9.38014C50.1661 8.66013 49.3695 8.18107 48.484 8.04834Z"
                      stroke="white"
                      strokeWidth="2.95412"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30.1207 5.29606L29.0537 12.4145C28.4297 11.6619 27.6012 11.106 26.6683 10.8139C25.7353 10.5218 24.7377 10.506 23.796 10.7684C22.8542 11.0308 22.0086 11.5602 21.3611 12.2927C20.7136 13.0251 20.2919 13.9293 20.147 14.8961C20.0021 15.863 20.1401 16.8511 20.5444 17.7412C20.9487 18.6313 21.602 19.3853 22.4254 19.9123C23.2489 20.4393 24.2072 20.7166 25.1848 20.7109C26.1624 20.7052 27.1175 20.4167 27.9347 19.8801L25.8008 34.1169C26.618 33.5803 27.5731 33.2918 28.5507 33.2861C29.5283 33.2804 30.4866 33.5577 31.3101 34.0847C32.1335 34.6117 32.7868 35.3657 33.1911 36.2559C33.5954 37.146 33.7334 38.1341 33.5885 39.1009C33.4436 40.0677 33.0219 40.9719 32.3744 41.7044C31.7269 42.4368 30.8813 42.9662 29.9395 43.2286C28.9978 43.491 28.0002 43.4752 27.0672 43.1831C26.1343 42.891 25.3058 42.3351 24.6818 41.5826L23.6148 48.701"
                      stroke="white"
                      strokeWidth="2.95412"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.16488 23.7457L12.2833 24.8126C11.5307 25.4366 10.9748 26.2651 10.6827 27.1981C10.3907 28.131 10.3749 29.1286 10.6373 30.0703C10.8997 31.0121 11.429 31.8578 12.1615 32.5053C12.8939 33.1528 13.7981 33.5744 14.765 33.7193C15.7318 33.8642 16.7199 33.7262 17.61 33.3219C18.5001 32.9176 19.2541 32.2643 19.7811 31.4409C20.3081 30.6175 20.5855 29.6591 20.5798 28.6815C20.574 27.7039 20.2855 26.7488 19.7489 25.9316L33.9857 28.0655C33.4492 27.2483 33.1606 26.2933 33.1549 25.3157C33.1492 24.338 33.4266 23.3797 33.9535 22.5563C34.4805 21.7328 35.2346 21.0795 36.1247 20.6752C37.0148 20.2709 38.0029 20.1329 38.9697 20.2778C39.9365 20.4227 40.8407 20.8444 41.5732 21.4919C42.3056 22.1394 42.835 22.9851 43.0974 23.9268C43.3598 24.8685 43.344 25.8661 43.0519 26.7991C42.7598 27.7321 42.204 28.5605 41.4514 29.1845L48.5698 30.2515"
                      stroke="white"
                      strokeWidth="2.95412"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1217_5147">
                      <rect
                        width="47.2659"
                        height="47.2659"
                        fill="white"
                        transform="translate(7 0.125) rotate(8.52443)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>Integrated Community Development</p>
              </div>
              <div className={`${styles.socialCard} ${styles.charity}`}>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.565 5.75364C46.9399 4.898 46.0747 4.24973 45.0806 3.89116C44.0859 3.5326 43.0078 3.48063 41.9831 3.74141L18.4568 9.73078C17.1652 10.0048 15.9743 11.0254 14.8944 11.9249L14.894 11.9249C14.8295 11.9811 14.7689 12.0414 14.7124 12.1058L7.18991 20.5607L7.12456 20.6322C5.3909 22.8074 4.84896 25.7058 5.67797 28.3631C5.98625 29.3783 6.78494 31.2872 7.75849 33.7L8.36983 35.176C5.59519 38.1744 4.43171 42.3335 5.24578 46.3432C6.05989 50.3523 8.75122 53.718 12.4718 55.3801C16.1929 57.0417 20.485 56.7949 23.9954 54.7174C27.5065 52.6396 29.8041 48.9871 30.1644 44.9104L30.2161 44.3195L42.3827 39.3186C43.7515 38.7724 44.9658 37.8949 45.9172 36.7645C45.9687 36.7046 46.0156 36.641 46.0582 36.5746C47.8186 33.8537 53.0522 25.424 55.2265 21.9003L55.2269 21.9003C55.787 20.9956 56.0646 19.9436 56.0251 18.8793C55.9851 17.8149 55.6292 16.7873 55.0028 15.9282L47.565 5.75364ZM20.5934 29.6625C20.4573 29.3155 20.4328 28.9342 20.5239 28.5727C20.615 28.2111 20.8173 27.8875 21.1016 27.6471L23.5698 25.5714L23.5694 25.5714C24.0498 25.1671 24.6699 24.9705 25.2936 25.0259C25.4021 25.0275 25.51 25.037 25.6171 25.0542L26.7435 25.3135C27.3218 25.4434 27.7965 25.8553 28.0086 26.4111C28.2207 26.9669 28.142 27.5929 27.7991 28.0785L26.1498 30.4757C25.8999 30.8429 25.5523 31.1322 25.1466 31.3105L22.8564 32.3006C22.3867 32.0859 21.9046 31.9005 21.4124 31.7457L20.5934 29.6625ZM16.7821 52.9125C13.6847 52.6569 10.9342 50.8268 9.49222 48.062C8.04986 45.2972 8.11683 41.9817 9.66885 39.275C11.2214 36.5683 14.043 34.8466 17.148 34.7122C15.453 35.5239 14.1178 36.9384 13.4008 38.6818C12.6479 40.4857 12.6626 42.5194 13.4414 44.3107C13.8734 45.409 14.5974 46.3663 15.5351 47.0785C16.4728 47.7904 17.5876 48.2293 18.7571 48.347C19.7558 48.4318 20.7604 48.2706 21.6832 47.8768L26.4281 45.9111C25.9499 48.057 24.7063 49.9532 22.9328 51.2422C21.159 52.5311 18.9774 53.1238 16.8001 52.908L16.7821 52.9125ZM52.1965 20.0515C50.0589 23.4955 44.9424 31.7385 43.1329 34.5447L43.1325 34.5447C42.5633 35.2037 41.8439 35.7145 41.0358 36.0337L20.3345 44.5443C19.6336 44.8284 18.8483 44.812 18.1604 44.499C17.4725 44.1855 16.9425 43.6031 16.6941 42.8863C16.3002 41.9716 16.2967 40.9345 16.6845 40.0164C17.1413 38.9602 18.0099 38.1385 19.0869 37.7444L26.525 34.5855L26.5254 34.5856C27.556 34.1455 28.4413 33.4199 29.0777 32.4932L30.7286 30.0783C31.731 28.6239 31.9515 26.7656 31.3177 25.1162C30.6839 23.4671 29.2776 22.2409 27.5629 21.843L26.4365 21.5838C24.6331 21.1644 22.7379 21.6202 21.3174 22.8142L18.8491 24.8898L18.8491 24.8902C17.9931 25.6105 17.3845 26.5837 17.1096 27.6707C16.8346 28.7578 16.9075 29.9044 17.318 30.9467L17.3803 31.1128L17.3807 31.1128C15.227 31.1183 13.1117 31.686 11.2417 32.7606L11.0559 32.3096C10.1312 30.08 9.33454 28.153 9.0719 27.2968L9.07149 27.2968C8.60831 25.7851 8.91412 24.141 9.88895 22.8981L17.2648 14.5611C17.8284 14.0187 18.4671 13.5613 19.1609 13.2031L19.2574 13.1817L42.8497 7.18607C43.1908 7.09882 43.5504 7.11617 43.8817 7.23526C44.213 7.35435 44.5016 7.57017 44.7101 7.85457L52.1486 18.0295L52.149 18.0296C52.3602 18.3217 52.4783 18.6716 52.4868 19.0328C52.4957 19.394 52.3944 19.7493 52.1973 20.0517L52.1965 20.0515Z"
                    fill="white"
                  />
                </svg>
                <p>Shift from Charity receiver to Charity giver</p>
              </div>
              <div
                className={`${styles.socialCard} ${styles.ethicalDevelopment}`}
              >
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 60 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.1992 2.04745C30.3908 3.50627 27.3048 6.07871 25.2712 9.2723C21.2841 7.94597 16.9136 7.93733 12.6532 9.56931C3.0998 13.2288 -1.75359 23.9411 1.86385 33.3848C5.48117 42.8282 16.2495 47.557 25.8027 43.8976C29.6111 42.4387 32.6971 39.8663 34.7952 36.648C38.7179 37.999 43.1527 37.983 47.3489 36.3757C56.9022 32.7162 61.7554 22.0034 58.1382 12.5601C54.521 3.11725 43.7525 -1.612 34.1993 2.04741L34.1992 2.04745ZM32.8467 31.1748C30.4019 29.6237 28.3828 27.2506 27.2586 24.3157C26.0365 21.1253 26.0495 17.6814 27.1062 14.6425C27.3627 13.9588 27.6433 13.3394 27.9243 12.7194C30.9028 14.505 33.287 17.2502 34.6313 20.7597C36.0979 24.5883 35.9976 28.5777 34.7003 32.1476C34.0772 31.8743 33.4539 31.6007 32.8468 31.1748L32.8467 31.1748ZM24.3116 40.005C16.8885 42.8485 8.52294 39.1748 5.7122 31.8371C2.9015 24.4995 6.67177 16.1771 14.095 13.3336C17.1933 12.1468 20.4247 12.0798 23.3439 12.9368C21.846 16.9496 21.7475 21.5237 23.3851 25.7988C24.8761 29.691 27.6249 32.8084 30.9196 34.8394C29.3517 37.1233 27.0869 38.9416 24.3115 40.0048L24.3116 40.005Z"
                    fill="white"
                  />
                </svg>
                <p>Equal focus on educational, social & ethical development</p>
              </div>
            </div>
            <div className={`col-xxl-6 ${styles.rightWrapper}`}>
              <div className={styles.vision}>
                <h3>Vision</h3>
                <p>
                  To create a learning space that offers equal opportunities to
                  all children without discrimination.
                </p>
              </div>
              <Image
                src={gChild}
                width={240}
                height={196}
                quality={100}
                alt="school  gird"
                className={`${styles.imageOne} d-none d-md-block`}
              />
              <Image
                src={mobViewImageGirl}
                width={100}
                height={164}
                quality={100}
                alt="school  gird"
                className={`${styles.imageOne} d-block d-md-none`}
              />
              <Image
                src={tabViewImageBoy}
                width={240}
                height={215}
                alt="school boy"
                quality={100}
                className={`${styles.imageTwo} d-none d-md-block d-xxl-none`}
              />
               <Image
                src={cboy}
                width={240}
                height={480}
                alt="school boy"
                quality={100}
                className={`${styles.imageTwo} d-none   d-xxl-block`}
              />
              <Image
                src={mobViewImageBoy}
                width={117}
                height={315}
                quality={100}
                alt="school  gird"
                className={`${styles.imageTwo} d-block d-md-none`}
              />
              <div className={styles.mission}>
                <h3>Mission</h3>
                <p>
                  To foster economic independence, nurture emotional
                  intelligence, and cultivate a sense of social responsibility
                  among economically marginalized children by providing them
                  equal opportunities through Taleem-o Tarbiyat and
                  skill-building programs.
                </p>
              </div>

      <div className={styles.coreValues}>
  <h3 className={styles.coreHeading}>
    Core Values of Aalam Bibi
  </h3>

  <div className={styles.badgesWrapper}>
    <div className={styles.valueCard}>
      <div className={styles.valueIcon}>❤️</div>
      <h5>Empathy</h5>
      <p>
        Understanding and caring for every individual with compassion.
      </p>
    </div>

    <div className={styles.valueCard}>
      <div className={styles.valueIcon}>⭐</div>
      <h5>Perseverance</h5>
      <p>
        Remaining committed to creating lasting change through dedication.
      </p>
    </div>

    <div className={styles.valueCard}>
      <div className={styles.valueIcon}>🛡️</div>
      <h5>Integrity</h5>
      <p>
        Maintaining honesty, transparency and accountability in every action.
      </p>
    </div>
  </div>
</div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default SocialDevelopment;

