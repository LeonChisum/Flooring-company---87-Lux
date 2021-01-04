import Head from "next/head";

import Header from "../components/header";
import WhyWorkWithUs from "../components/whyWorkWithUs";

import "../styles/style.scss";

export default function Home(props) {
  return (
    <div>
      <Header />
      <WhyWorkWithUs />
    </div>
  );
}
