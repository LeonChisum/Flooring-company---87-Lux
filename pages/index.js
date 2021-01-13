import Head from 'next/head';

import Header from '../components/header';
import ServicesWeOffer from '../components/servicesWeOffer';
import Testomonials from '../components/Testomonials';
import ViewOurProjects from '../components/ViewOurProjects';
import WhatMore from '../components/WhatMore';
import WhoAreWe from '../components/WhoAreWe';
import WhyWorkWithUs from '../components/whyWorkWithUs';

import '../styles/style.scss';

export default function Home(props) {
	return (
		<div>
			<Head>
				<meta
					description='We pride in installing the highest quality, affordable, vinyl floor in the Tampa area.'
					content='flooring company, flooring, floor, floor covering, lay out, house, renovation, quote, estimate'
				/>
				<title>Alexis Flooring - Affordable Floore Installations</title>
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
