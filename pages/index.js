import Image from "next/image";
import Head from "next/head";

import Header from "../components/header";
import ServicesWeOffer from "../components/ServicesWeOffer";
import Testomonials from "../components/Testomonials";
import ViewOurProjects from "../components/ViewOurProjects";
import WhatMore from "../components/WhatMore";
import WhoAreWe from "../components/WhoAreWe";
import WhyWorkWithUs from "../components/WhyWorkWithUs";

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
          href="/favicon_package/apple-touch-icon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_package/favicon-32x32.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_package/favicon-16x16.ico"
        />
        <link rel="manifest" href="/favicon_package/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon_package/safari-pinned-tab.svg"
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
