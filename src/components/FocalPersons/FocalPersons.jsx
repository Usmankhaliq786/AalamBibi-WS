import React from "react";
import SalmanRashid from "../../../public/images/SalmanRashid.png";
import DrShabbirAhmed from "../../../public/images/DrShabbirAhmed.png";
import AbdulRehman from "../../../public/images/AbdulRehman.png";
import FayyazMuhammad from "../../../public/images/FayyazMuhammad.png";
import drNaveedKureshi from "../../../public/images/drNaveedKureshi1.png";
import javedNazar from "../../../public/images/javedNazar1.png";
import wajedMalik from "../../../public/images/wajedMalik.png";
import attaUrRehman from "../../../public/images/attaUrRehman.png";
import noimg from "../../../public/images/noimg.png";
import Image from "next/image";
import styles from "./FocalPersons.module.css";

const FocalPersons = () => {
  return (
    <section className="spacing">
      <div className={`container ${styles.mainteam} `}>
        <div className={`row ${styles.managemnetRow}`}>
          <div className={styles.ourManagemnet}>
            <h2>Focal Persons</h2>
          </div>
           <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={drNaveedKureshi}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5>Dr. Naveed Kureshi</h5>
                <span>Brisbane</span>
                <p>
                  <a href="mailto:nakureshi1@gmail.com">
                    nakureshi1@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
           <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={DrShabbirAhmed}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5>Dr. Shabbir Ahmed</h5>
                <span>Brisbane</span>
                <p>
                  <a href="mailto:shabbirkasuri@gmail.com">
                    shabbirkasuri@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
            <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={javedNazar}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5>Javed Nazar</h5>
                <span>Sydney</span>
                <p>
                  <a href="mailto:javednazar123@hotmail.com">
                    javednazar123@hotmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={SalmanRashid}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5>Salman Rashid</h5>
                <span>Sydney</span>
                <p>
                  <a href="mailto:salman07@yahoo.com">
                    salman07@yahoo.com
                  </a>
                </p>
              </div>
            </div>
          </div>
         
          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={AbdulRehman}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5>Abdul Rehman</h5>
                <span>Melbourne</span>
                <p>
                  <a href="mailto:Abdul.rehman@live.com.au">
                    Abdul.rehman@live.com.au
                  </a>
                </p>
              </div>
            </div>
            
          </div>
          <div className={`col-auto ${styles.person}`}>
           <div className={styles.teamPerson}>
                <Image
                  src={wajedMalik}
                  className={styles.onlyimg}
                  width={211}
                  height={211}
                  alt="Logo"
                />
                <div className={styles.managementContent}>
                  <h5>Wajed Malik</h5>
                  <span>Melbourne</span>
                  <p>
                    <a href="mailto:wajedawan@hotmail.com">
                      wajedawan@hotmail.com
                    </a>
                  </p>
                </div>
              </div>
          </div>
           <div className={`col-auto ${styles.person}`}>
           <div className={styles.teamPerson}>
                <Image
                  src={attaUrRehman}
                  className={styles.onlyimg}
                  width={211}
                  height={211}
                  alt="Logo"
                />
                <div className={styles.managementContent}>
                  <h5>Atta ur Rehman</h5>
                  <span>Melbourne</span>
                  <p>
                    <a href="mailto:attaauck@hotmail.com">
                      attaauck@hotmail.com
                    </a>
                  </p>
                </div>
              </div>
          </div>
          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={FayyazMuhammad}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5>Fayyaz Muhammad</h5>
                <span>Canberra</span>
                <p>
                  <a href="mailto:mumtazfayyaz@gmail.com">
                    mumtazfayyaz@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={`col-auto ${styles.person}`}>
            <div className={styles.teamPerson}>
              <Image
                src={noimg}
                className={styles.onlyimg}
                width={211}
                height={211}
                alt="Logo"
              />
              <div className={styles.managementContent}>
                <h5>Sehrish Shahid </h5>
                <span>Canberra</span>
                <p>
                  <a href="mailto:sehrishahid@gmail.com">
                    sehrishahid@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocalPersons;
