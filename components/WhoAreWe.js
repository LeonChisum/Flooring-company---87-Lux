import Image from "next/image";
import React from "react";

const WhoAreWe = () => {
  return (
    <div id="who__are__we" className="who__are__we">
      <div className="who__are__we__header">
        <h1>Who are we?</h1>
        <hr />
      </div>
      <div className="who__are__we__content">
        <div className="logo">
          <Image
            className="img"
            src="/img/whiteLogo.png"
            alt="White Logo"
            width={300}
            height={460}
            quality={100}
          />
        </div>
        <div className="who__are__we__info">
          <p>
            As a respectable flooring contractor our mission is to provide an
            unparalleled service through our reliable team completing projects
            to the highest standards. Our highly skilled team of flooring
            specialists have a desire to work alongside our clients on site to
            achieve the desired result.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
