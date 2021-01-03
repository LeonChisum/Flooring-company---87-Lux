import Footer from '../components/footer';
import Navbar from '../components/navbar';

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
