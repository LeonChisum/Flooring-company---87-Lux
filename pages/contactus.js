import '../styles/style.scss';

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact__hero-section'>
				<h1>So, you are interested in Wood Depot</h1>
				<p>
					You can get started by contacting us and let us know any questions you might have, and we will get
					back with you within 24 hours. Hoping to working with you!{' '}
				</p>
			</div>
			<div className='contact__form-section'>
				<div className='contact__form-section-container'>
					<div className='contact__form-section-header'>
						<h2>Contact Us</h2>
						<p>Please send us your questions, please don’t spam us!</p>
					</div>
					<form className='form' name='Contact Info' method='post'>
						<input type='hidden' name='form-name' value='contact' />
						<input type='text' name='name' placeholder='Name'></input>
						<input type='email' name='email' placeholder='Email'></input>
						<textarea type='text' name='message' placeholder='Enter a Message...'></textarea>
						<button>SEND</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
