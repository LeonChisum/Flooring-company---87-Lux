import '../styles/style.scss';

import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

const Contact = () => {
	return (
		<div>
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
						<form className='contact__form' name='Contact Info' method='post'>
							<input type='text' name='name' placeholder='Name'></input>
							<input type='email' name='email' placeholder='Email'></input>
							<textarea type='text' name='message' placeholder='Message'></textarea>
							<button type='submit'>Submit</button>
						</form>
					</div>
				</div>
			</div>
			<section className='faq'>
				<h1>Frequently Asked Questions (FAQ)</h1>
				<div className='faq__container'>
					<div className='faq__questions-container'>
						<div className='faq__questions'>
							<h1>How does your pricing work?</h1>
							<BsPlus />
						</div>
						<p className='faq__answers'>
							It depends on the type of Floor we install. For example, a Hardwood installation takes 2
							days on Average. Get a Quote to know the approximate amount of time we take to finish the
							Floor installation.
						</p>
					</div>
					<div className='faq__questions-container'>
						<div className='faq__questions'>
							<h1>How much time does it take to finish installing a Floor?</h1>
							<BiMinus />
						</div>
						<p className='faq__answers'>
							It depends on the type of Floor we install. For example, a Hardwood installation takes 2
							days on Average. Get a Quote to know the approximate amount of time we take to finish the
							Floor installation.
						</p>
					</div>
					<div className='faq__questions-container'>
						<div className='faq__questions'>
							<h1>Do you provide After-sales service?</h1>
							<BsPlus />
						</div>
						<p className='faq__answers'>
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
