// import { Link } from "next/link";
import Link from 'next/link';
import React from 'react';

import '../styles/style.scss';

const ServicesWeOffer = () => {
	return (
		<div className='services__we__offer'>
			<div className='services__header'>
				<h2>Services We Offer</h2>
				<h4>
					We offer a wide range of flooring services, and high quality installation services at affordable
					prices.
				</h4>
			</div>
			<div className='service'>
				<img src='/img/servicesImage.png' />
				<div className='service__content'>
					<h2>Vinyl Floor Installation</h2>
					<p>
						We offer a substantial list of suppliers, some of which shown below. We provide competitive
						prices and ensure the project is completed on time, on budget and to the required standard.
					</p>
					<a href='/services'>Learn more</a>
				</div>
			</div>
		</div>
	);
};

export default ServicesWeOffer;
