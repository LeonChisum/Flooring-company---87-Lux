import Link from 'next/link';

import { FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';

import '../styles/style.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__content'>
				<div>
					<div className='footer__logo'>
						<img src='../img/blueLogo.png' />
					</div>
					<div className='footer__contact-info'>
						<a
							href='https://goo.gl/maps/3R43ACgtd6WxRSE37'
							target='_blank'
							rel='noopener noreferrer'
							className='footer__link'>
							625 Ripple St
						</a>
						<a href='tel:12345678910' className='footer__link'>
							(123)-4567-8910
						</a>
						<a
							href='mailto:info@wooddepot.com'
							target='_blank'
							rel='noopener noreferrer'
							className='footer__link'>
							info@wooddepot.com
						</a>
					</div>
				</div>
				<div className='footer__extra-links'>
					<h2>Extra Links</h2>
					<div>
						<Link href='/team'>
							<a className='footer__link'>Team</a>
						</Link>
						<Link href='/'>
							<a className='footer__link'>Home</a>
						</Link>
						<Link href='/services'>
							<a className='footer__link'>Services</a>
						</Link>
						<Link href='/#who__are__we'>
							<a className='footer__link'>About Us</a>
						</Link>
						<Link href='/careers'>
							<a className='footer__link'>Careers</a>
						</Link>
						<Link href='/contactus'>
							<a className='footer__link'>Contact Us</a>
						</Link>
						<Link href='/best-worker-award'>
							<a className='footer__link'>Best Worker Award</a>
						</Link>
					</div>
				</div>
			</div>
			<div className='footer__copyright-section'>
				<small>2020 &copy; All Rights Reserved</small>
				<div className='footer__icons'>
					<div className='icon'>
						<FiTwitter />
					</div>
					<div className='icon'>
						<AiOutlineInstagram />
					</div>
					<div className='icon'>
						<FiFacebook />
					</div>
					<div className='icon'>
						<FiYoutube />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
