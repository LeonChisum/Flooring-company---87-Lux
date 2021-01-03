import Footer from './footer.js';
import Navbar from './navbar.js';

import '../styles/style.scss';

export default function Layout(props) {
	return (
		<div>
			<Navbar />
			<div className='container'>{props.children}</div>
			<Footer />
		</div>
	);
}
