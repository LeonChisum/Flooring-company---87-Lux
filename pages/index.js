import Head from 'next/head';

import Footer from './footer.js';
import Navbar from './navbar.js';
import Header from './header.js';

import '../styles/style.scss';

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className='container'>
				<Header />
			</div>
			<Footer />
		</div>
	);
}
