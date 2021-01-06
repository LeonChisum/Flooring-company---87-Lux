import '../styles/style.scss';
import Link from 'next/link';

const Header = () => {
	return (
		<div className='header'>
			<div className='header__container'>
				<h1>Trust the Professionals of the Industry.</h1>
				<div>
					<Link href='/aboutus'>
						<a className='header__white__btn'>About Us</a>
					</Link>
					<Link href='/getaquote'>
						<a className='header__red__btn'> Get Quote</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;