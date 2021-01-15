import "../styles/style.scss";
import Head from "next/head";
import { useState } from "react";

import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { IconContext } from "react-icons";

const Contact = () => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
    });
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((res) => {
        const txt = res.text();
        handleResponse(res.status, txt);
      })
      .catch((err) => console.log("Contact ERROR", err));
  };

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setNewContact({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  function showHideDiv(id) {
    var e = document.getElementById(id);
    if (e.style.display == null || e.style.display == "none") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  }

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Ready for a new floor? Contact us today for a quote."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicon_package/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon_package/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon_package/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/favicon_package/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/favicon_package/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Contact Us - Request A Quote</title>
      </Head>
      <div className="contact">
        <div className="contact__hero-section">
          <h1>So, you are interested in Wood Depot</h1>
          <p>
            You can get started by contacting us and let us know any questions
            you might have, and we will get back with you within 24 hours.
            Hoping to working with you!{" "}
          </p>
        </div>
        <div className="contact__form-section">
          <div className="contact__form-section-container">
            <div className="contact__form-section-header">
              <h2>Contact Us</h2>
              <p>Please send us your questions, please don’t spam us!</p>
            </div>
            <form
              className="contact__form"
              name="Alexis Flooring Contact Inqueries"
              method="post"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
              ></input>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              ></input>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={status.submitting}
              >
                {!status.submitting
                  ? !status.submitted
                    ? "Submit"
                    : "Submitted"
                  : "Submitting..."}
              </button>
            </form>
          </div>
        </div>
      </div>
      <section className="faq">
        <h1>Frequently Asked Questions (FAQ)</h1>
        <div className="faq__container">
          <div className="faq__questions-container">
            <div
              className="faq__questions"
              onClick={() => showHideDiv("answer1")}
            >
              <h1>How does your pricing work?</h1>
              <IconContext.Provider value={{ color: "#B9B3B3" }}>
                <div>
                  <BsPlus />
                </div>
              </IconContext.Provider>
            </div>
            <p id="answer1" className="faq__answers">
              It depends on the type of Floor we install. For example, a
              Hardwood installation takes 2 days on Average. Get a Quote to know
              the approximate amount of time we take to finish the Floor
              installation.
            </p>
          </div>
          <div className="faq__questions-container">
            <div
              className="faq__questions"
              onClick={() => showHideDiv("answer2")}
            >
              <h1>How much time does it take to finish installing a Floor?</h1>
              <IconContext.Provider value={{ color: "#B9B3B3" }}>
                <div>
                  <BsPlus />
                </div>
              </IconContext.Provider>
            </div>
            <p id="answer2" className="faq__answers">
              It depends on the type of Floor we install. For example, a
              Hardwood installation takes 2 days on Average. Get a Quote to know
              the approximate amount of time we take to finish the Floor
              installation.
            </p>
          </div>
          <div className="faq__questions-container">
            <div
              className="faq__questions"
              onClick={() => showHideDiv("answer3")}
            >
              <h1>Do you provide After-sales service?</h1>
              <IconContext.Provider value={{ color: "#B9B3B3" }}>
                <div>
                  <BsPlus />
                </div>
              </IconContext.Provider>
            </div>
            <p id="answer3" className="faq__answers">
              It depends on the type of Floor we install. For example, a
              Hardwood installation takes 2 days on Average. Get a Quote to know
              the approximate amount of time we take to finish the Floor
              installation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
