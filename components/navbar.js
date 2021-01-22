import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsChevronRight } from "react-icons/bs";

import "../styles/style.scss";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="navbar__content">
        <Link href="/services">
          <a>
            <h3 className="navbar__announcment">
              Check out our new offers and new services{" "}
              <BsChevronRight className="announcment__arrow" />
            </h3>
          </a>
        </Link>

        <div className="nav__container">
          <div className="navbar">
            <div className="logo">
              <Link href="/">
                <a>
                  <Image
                    className="img"
                    src="/img/whiteLogo.png"
                    alt="White Logo"
                    width={140}
                    height={140}
                    quality={100}
                  />
                </a>
              </Link>
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

            {/* Mobile Container */}
            <div className="mobile-container">
              {/* Hamburger Menu */}
              <input
                className="hamburger-menu-checkbox"
                type="checkbox"
                id="hamburger"
              />

              <div className="hamburger-menu">
                <label className="hamburger-menu__label" htmlFor="hamburger">
                  <div className="hamburger-menu__line"></div>
                  <div className="hamburger-menu__line"></div>
                  <div className="hamburger-menu__line"></div>
                </label>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
