"use client";
import React, { useState, useEffect } from "react";

import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/siteLogo.png";
import PrimaryButton from "../buttons/PrimaryButton";
import desktopLogo from "../../../public/images/HeaderLogo.png";
import mobileLogo from "../../../public/images/mobileLogo1.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isNavOpen &&
        !event.target.closest(`.${styles.navbar}`) &&
        !event.target.closest(".navbar-toggler")
      ) {
        closeNav();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavOpen]);
  return (
    <header className={` site-header ${styles.siteHeader}`}>
      <nav className={` navbar navbar-expand-xl  ${styles.navbar} `}>
        <Link href="/" className={`${styles.siteLogo} `}>
          <Image
            className="d-none d-md-block "
            src={desktopLogo}
            width={166}
            height={146}
            alt="site logo"
          ></Image>
          <Image
            className=" d-block d-md-none"
            src={mobileLogo}
            width={85}
            height={74}
            alt="mobile logo"
          ></Image>
        </Link>
        <div className="container">
          {/* <a href="#" className={` d-xl-none ${styles.mobileLogo} `}></a> */}
          <button
            className={` navbar-toggler d-xl-none ${styles.navbarToggler} `}
            type="button"
            onClick={handleToggleNav}
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className={` ${styles.bar} ${styles.bar1} `}></span>
            <span className={` ${styles.bar} ${styles.bar2} `}></span>
            <span className={` ${styles.bar} ${styles.bar3} `}></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""} ${
              styles.navbar_collapse
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item" onClick={closeNav}>
                  <Link className="nav-link" aria-current="page" href="/">
                    Home
                  </Link>
                </li> */}

              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle `}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us{" "}
                </a>
                <ul className="dropdown-menu">
                  <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/aboutus">
                      Our Story
                    </Link>
                  </li>
                  <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/ourTeam">
                      Our Team
                    </Link>
                  </li>
                  {/* <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/boardAustralia">
                      Board Australia
                    </Link>
                  </li>
                  <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/aalamBibiChapters">
                      Aalam Bibi Chapters
                    </Link>
                  </li> */}

                  <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/ourCollaborators">
                      Our Collaborators
                    </Link>
                  </li>
                  <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/reports">
                      Reports & Certificate
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABF Australia
                </a>
                <ul className="dropdown-menu">
                  {/* <li onClick={closeNav}>
                    <Link
                      className="dropdown-item"
                      href="/boardAustralia#Ambassador-board"
                    >
                      Ambassador Aalam Bibi
                    </Link>
                  </li> */}
                  <li onClick={closeNav}>
                    <Link
                      className="dropdown-item"
                      href="/boardAustralia#advisory-board"
                    >
                      Advisory Board Australia
                    </Link>
                  </li>
                  <li onClick={closeNav}>
                    <Link
                      className="dropdown-item"
                      href="/boardAustralia#team-of-aalam"
                    >
                      Aalam Bibi Board Australia
                    </Link>
                  </li>
                  <li onClick={closeNav}>
                    <Link
                      className="dropdown-item"
                      href="/boardAustralia#focal-persons"
                    >
                      Focal Persons
                    </Link>
                  </li>
                  <li onClick={closeNav}>
                    <Link
                      className="dropdown-item"
                      href="/boardAustralia#donate-aus"
                    >
                      DDR Form
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABF America
                </a>
                <ul className="dropdown-menu"></ul>
              </li>

               <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABF Europe
                </a>
                <ul className="dropdown-menu">
              
                  <li onClick={closeNav}>
                    <Link
                      className="dropdown-item"
                      href="/boardEurope#scandinavian-representatives"
                    >
                      Scandinavian Representatives
                    </Link>
                  </li>
                 
                </ul>
              </li>

              <ul
                className={`navbar-nav me-auto mb-2 mb-lg-0 d-block d-xl-none ${styles.hideUl}`}
              >
                 <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Alumni
                  </a>
                  <ul className="dropdown-menu">
                    <li onClick={closeNav}>
                      <Link className="dropdown-item" href="alumni#successStories">
                        Success Stories
                      </Link>
                    </li>
                  
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    What we do
                  </a>
                  <ul className="dropdown-menu">
                    <li onClick={closeNav}>
                      <Link
                        className="dropdown-item"
                        href="/educationalPrograms"
                      >
                        Education
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item" href="/foodProgram">
                        Food Program
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item" href="/healthCareProgram">
                        Health Care Program
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item" onClick={closeNav}>
                  <Link
                    className="nav-link"
                    aria-current="page"
                    href="/stories"
                  >
                    News & Stories
                  </Link>
                </li>
              </ul>
            </ul>
          </div>

          <div className=" d-block d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-xl-flex">
               <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Alumni
                </a>
                <ul className="dropdown-menu">
                  <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/alumni#successStories">
                      Success Stories
                    </Link>
                  </li>               
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  What we do
                </a>
                <ul className="dropdown-menu">
                  <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/educationalPrograms">
                      Education
                    </Link>
                  </li>
                  <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/foodProgram">
                      Food Program
                    </Link>
                  </li>
                  <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/healthCareProgram">
                      Health Care Program
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item" onClick={closeNav}>
                <Link className="nav-link" aria-current="page" href="/stories">
                  News & Stories
                </Link>
              </li>
            </ul>

            <Link href={"/donateNow"} className={`btn ${styles.navBtn}`}>
              Donate Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
