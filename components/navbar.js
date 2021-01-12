import React, { useEffect, useState } from "react";

import Link from "next/link";

import { BsChevronRight } from "react-icons/bs";

import "../styles/style.scss";

const Navbar = () => {
  useEffect(() => {
    // let [count, setCount] = useState(0);

    let hamburgerMenu = document.querySelector(".hamburger-menu");
    let mobileMenu = document.querySelector(".mobile-menu");
    let mobileLinks = document
      .querySelector(".mobile-menu")
      .querySelectorAll(".mobile-menu__link");

    hamburgerMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });

    // mobileLinks[0].onclick = () => {
    //   mobileMenu.classList.remove("active");
    // };

    // mobileLinks[1].onclick = () => {
    //   mobileMenu.classList.remove("active");
    // };

    // mobileLinks[2].onclick = () => {
    //   mobileMenu.classList.remove("active");
    // };

    // mobileLinks[3].onclick = () => {
    //   mobileMenu.classList.remove("active");
    // };

    // mobileLinks[4].onclick = () => {
    //   mobileMenu.classList.remove("active");
    // };

    // for (let i = 0; i < mobileLinks.length; i++) {
    //   mobileLinks[i].addEventListener("click", () => {
    //     mobileMenu.classList.remove("active");
    //   });
    // }
  });

  return (
    <div className="navbar__content">
      <h3 className="navbar__announcment">
        Check out our new offers and new services{" "}
        <BsChevronRight className="announcment__arrow" />
      </h3>
      <div className="nav__container">
        <div className="navbar">
          <div className="logo">
            <img src="../img/whiteLogo.png" alt="White Logo" />
          </div>

          <div className="navbar__links">
            <Link href="/">
              <a className="nav__link">Home</a>
            </Link>
            <Link href="/services">
              <a className="nav__link">Services</a>
            </Link>
            <Link href="/gallery">
              <a className="nav__link">Gallery</a>
            </Link>
            <Link href="/contactus">
              <a className="nav__link">Contact Us</a>
            </Link>
            <Link href="/contactus">
              <a className="nav__link button__red">Get a Quote</a>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="hamburger-menu">
            <div className="hamburger-menu__line"></div>
            <div className="hamburger-menu__line"></div>
            <div className="hamburger-menu__line"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <Link href="/">
          <a className="mobile-menu__link">Home</a>
        </Link>
        <Link href="/services">
          <a className="mobile-menu__link">Services</a>
        </Link>
        <Link href="/gallery">
          <a className="mobile-menu__link">Gallery</a>
        </Link>
        <Link href="/contactus">
          <a className="mobile-menu__link">Contact Us</a>
        </Link>
        <Link href="/contactus">
          <a className=" mobile-menu__link mobile-menu__link--red">
            Get a Quote
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
