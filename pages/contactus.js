import Image from 'next/image';
import '../styles/style.scss';
import Head from 'next/head';
import { useState } from 'react';

import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { IconContext } from 'react-icons';

const Contact = () => {
	const [newContact, setNewContact] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});

	const handleChange = (e) => {
		setNewContact({
			...newContact,
			[e.target.name]: e.target.value,
		});
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		fetch('/api/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newContact),
		})
			.then((res) => {
				setNewContact({
					name: '',
					email: '',
					message: '',
				});
				handleResponse(res.status, 'Thanks For Your Interest, Please Allow Time For Our Response');
			})
			.catch((err) => console.log('Contact ERROR', err));
	};

	const handleResponse = (status, msg) => {
		if (status === 200) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
		} else {
			setStatus({
				info: { error: true, msg: msg },
			});
		}
	};

	function showHideDiv(id) {
		var x = document.getElementById(id).style;

		if (x.display == null || x.display == 'none') {
			x.display = 'block';
			setExpand(true);
		} else {
			x.display = 'none';
			setExpand(false);
		}
	}

	// this changes the icon to the right of the FAQ when clicked
	const [expand, setExpand] = useState(false);

	return (
		<div>
			<Head>
				<meta name='description' content='Ready for a new floor? Contact us today for a quote.' />
				<meta
					name='keywords'
					content='flooring company, flooring, floor, floor covering, lay out, house, renovation'
				/>

				<link rel='apple-touch-icon' sizes='180x180' href='/favicon_package/apple-touch-icon.ico' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon_package/favicon-32x32.ico' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon_package/favicon-16x16.ico' />
				<link rel='manifest' href='/favicon_package/site.webmanifest' />
				<link rel='mask-icon' href='/favicon_package/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
				<title>Contact Us - Request A Quote</title>
			</Head>
			<div className='contact'>
				<div className='contact__hero-section'>
					<h1>So, you are interested in Wood Depot</h1>
					<p>
						You can get started by contacting us and let us know any questions you might have, and we will
						get back with you within 24 hours. Hoping to working with you!{' '}
					</p>
				</div>
				<div className='contact__form-section'>
					<div className='contact__form-section-container'>
						<div className='contact__form-section-header'>
							<h2>Contact Us</h2>
							<p>Please send us your questions, please don’t spam us!</p>
						</div>
						<form
							className='contact__form'
							name='Alexis Flooring Contact Inqueries'
							method='post'
							onSubmit={handleSubmit}>
							<input
								type='text'
								name='name'
								value={newContact.name}
								placeholder='Name'
								onChange={handleChange}></input>
							<input
								type='email'
								name='email'
								value={newContact.email}
								placeholder='Email'
								onChange={handleChange}></input>
							<textarea
								type='text'
								name='message'
								value={newContact.message}
								placeholder='Message'
								onChange={handleChange}></textarea>
							<button type='submit' onClick={handleSubmit} disabled={status.submitting}>
								{!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
							</button>
						</form>
						{status.info.error ? (
							<div className='error'>Error: {status.info.msg}</div>
						) : (
							<div className='success'>{status.info.msg}</div>
						)}
					</div>
				</div>
			</div>
			<section className='faq'>
				<h1>Frequently Asked Questions (FAQ)</h1>
				<div className='faq__container'>
					<div className='faq__questions-container'>
						<div className='faq__questions' onClick={() => showHideDiv('answer1')}>
							<h1>How does your pricing work?</h1>
							<IconContext.Provider value={{ color: '#B9B3B3' }}>
								<div>{expand ? <BiMinus /> : <BsPlus />}</div>
							</IconContext.Provider>
						</div>
						<p id='answer1' className='faq__answers' style={{ display: 'none' }}>
							It depends on the type of Floor we install. For example, a Hardwood installation takes 2
							days on Average. Get a Quote to know the approximate amount of time we take to finish the
							Floor installation.
						</p>
					</div>
					<div className='faq__questions-container'>
						<div className='faq__questions' onClick={() => showHideDiv('answer2')}>
							<h1>How much time does it take to finish installing a Floor?</h1>
							<IconContext.Provider value={{ color: '#B9B3B3' }}>
								<div>{expand ? <BiMinus /> : <BsPlus />}</div>
							</IconContext.Provider>
						</div>
						<p id='answer2' className='faq__answers' style={{ display: 'none' }}>
							It depends on the type of Floor we install. For example, a Hardwood installation takes 2
							days on Average. Get a Quote to know the approximate amount of time we take to finish the
							Floor installation.
						</p>
					</div>
					<div className='faq__questions-container'>
						<div className='faq__questions' onClick={() => showHideDiv('answer3')}>
							<h1>Do you provide After-sales service?</h1>
							<IconContext.Provider value={{ color: '#B9B3B3' }}>
								<div>{expand ? <BiMinus /> : <BsPlus />}</div>
							</IconContext.Provider>
						</div>
						<p id='answer3' className='faq__answers' style={{ display: 'none' }}>
							It depends on the type of Floor we install. For example, a Hardwood installation takes 2
							days on Average. Get a Quote to know the approximate amount of time we take to finish the
							Floor installation.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
