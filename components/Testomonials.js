import React from "react";

import "../styles/style.scss";

const Testomonials = () => {
  return (
    <div className="testomonials">
      <div className="testomonials__header">
        <div className="red__box"></div>
        <h1>Testomonials</h1>
        <hr />
      </div>
      <div className="all__testomonials">
        <div className="testomonial">
          <div className="user__data">
            <img src="/personImg.jpg" />
            <div>
              <h4>Joe Feriss</h4>
              <p>CEO of Infotech</p>
            </div>
          </div>
          <span>
            <span className="large__font">"</span> If you ask me for the best
            floor installation service, I would highly recommend Wood Depot
            because of their Quality work.. I would highly recommend Wood Depot
            because of their Quality work..{" "}
            <span className="large__font">"</span>
          </span>
        </div>
        <div className="testomonial">
          <div className="user__data">
            <img src="/personImg.jpg" />
            <div>
              <h4>Joe Feriss</h4>
              <p>CEO of Infotech</p>
            </div>
          </div>
          <span>
            <span className="large__font">"</span> If you ask me for the best
            floor installation service, I would highly recommend Wood Depot
            because of their Quality work.. I would highly recommend Wood Depot
            because of their Quality work..{" "}
            <span className="large__font">"</span>
          </span>
        </div>
        <div className="testomonial">
          <div className="user__data">
            <img src="/personImg.jpg" />
            <div>
              <h4>Joe Feriss</h4>
              <p>CEO of Infotech</p>
            </div>
          </div>
          <span>
            <span className="large__font">"</span> If you ask me for the best
            floor installation service, I would highly recommend Wood Depot
            because of their Quality work.. I would highly recommend Wood Depot
            because of their Quality work..{" "}
            <span className="large__font">"</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testomonials;
