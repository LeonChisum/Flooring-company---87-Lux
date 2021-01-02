import Head from 'next/head';

import Footer from '../components/Footer.js';

import Navbar from '../components/Navbar.js'
import Header from '../components/Header.js'

import "../styles/style.scss"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Header/>
      </div>
      <Footer />
    </div>
  )
}
