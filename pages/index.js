import Head from "next/head";

import Header from "../components/header";
import ServicesWeOffer from "../components/servicesWeOffer";
import Testomonials from "../components/Testomonials";
import ViewOurProjects from "../components/ViewOurProjects";
import WhatMore from "../components/WhatMore";
import WhoAreWe from "../components/WhoAreWe";
import WhyWorkWithUs from "../components/whyWorkWithUs";

import "../styles/style.scss";

export default function Home(props) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="We pride in installing the highest quality, affordable, vinyl flooring in the Tampa area."
        />
        <meta
          name="keywords"
          content="flooring company, flooring, floor, floor covering, lay out, house, renovation, quote, estimate"
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
        <title>Alexis Flooring - Affordable Floor Installations</title>
      </Head>
      <Header />
      <WhyWorkWithUs />
      <ServicesWeOffer />
      <Testomonials />
      <ViewOurProjects />
      <WhoAreWe />
      <WhatMore />
    </div>
  );
}
