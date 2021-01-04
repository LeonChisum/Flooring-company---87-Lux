import Link from 'next/link';

import { BsChevronRight } from 'react-icons/bs';

import '../styles/style.scss';
const Navbar = () => {
	return (
		<div className='navbar__content'>
			<h3 className='navbar__announcment'>
				Check out our new set of courses <BsChevronRight className='announcment__arrow' />
			</h3>
			<div className='nav__container'>
				<div className='navbar'>
					<div className='logo'>
						<img src='./whiteLogo.png' />
					</div>
					<div className='navbar__links'>
						<Link href='/'>
							<a className='nav__link'>Home</a>
						</Link>
						<Link href='/services'>
							<a className='nav__link'>Services</a>
						</Link>
						<Link href='/gallery'>
							<a className='nav__link'>Gallery</a>
						</Link>
						<Link href='/contactus'>
							<a className='nav__link'>Contact Us</a>
						</Link>
						<Link href='/getaquote'>
							<a className='nav__link button__red'>Get a Quote</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
