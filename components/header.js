import Image from "next/image";
import "../styles/style.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="header"
      style={{ position: "relative", width: "100%", height: "65vh" }}
    >
      <Image
        className="img"
        src="/img/headerBg.jpg"
        alt="Background image"
        layout="fill"
        priority={true}
        quality={100}
      />

      <div className="header__container">
        <h1>Trust the Professionals of the Industry.</h1>
        <div>
          <Link href="/#who__are__we">
            <a className="header__white__btn">About Us</a>
          </Link>
          <Link href="/contactus">
            <a className="header__red__btn"> Get Quote</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
