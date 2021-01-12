import "../styles/style.scss";
import { BsChevronRight } from "react-icons/bs";

const Services = () => {
  return (
    <div className="services">
      <div className="services__header">
        <h1>Services we offer</h1>
        <p>
          We offer a wide range of flooring services, and high quality
          installation services at affordable prices. The wide of services we
          offer help our customers get what they need, at the highest quality
          possible
        </p>
      </div>
      <section className="services__example">
        <img src="/img/vinyl-floor.png"></img>
        <div className="services__example__info">
          <h1>Luxury Vinyl</h1>
          <p>
            Luxury vinyl is one of the most durable flooring options out there.
            it can withstand water and moisture, as well as wear and tear. It is
            also stain and scratch resistant. This durability makes it an ideal
            flooring option.
          </p>
          <a href="/contactus">
            Book Service <BsChevronRight className="book-service-arrow" />
          </a>
        </div>
      </section>

      <div className="services__description">
        <p>
          We offer a wide range of flooring services, and high quality
          installation services at affordable prices. The wide of services we
          offer help our customers get what they need, at the highest quality
          possible.
        </p>
        <p>
          As a respectable flooring contractor our aim is to provide an
          unparalleled service through our reliable team completing projects to
          the highest standards. Our highly skilled team of flooring specialists
          will wrong alongside our clients on site to achieve the desired
          results.
        </p>
      </div>
    </div>
  );
};

export default Services;
