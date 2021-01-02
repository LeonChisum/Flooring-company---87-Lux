import Head from 'next/head';

import Navbar from '../components/AllComponents.js';
import Footer from '../components/Footer.js';

export default function Home() {
	return (
		<div>
			<Navbar />
			<Footer />
		</div>
	);
}
