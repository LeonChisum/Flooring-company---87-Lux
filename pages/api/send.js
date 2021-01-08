const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	console.log(process.env.SENDGRID_API_KEY);

	const { email, message, name } = req.body;

	const content = {
		to: 'leonchisum3306@gmail.com',
		from: 'testwebsitemoto@gmail.com',
		subject: `New Message From - ${name}`,
		text: message,
		html: `<p>${message}</p>`,
	};

	try {
		await sgMail.send(content);
		res.status(200).send('Message sent successfully.');
	} catch (error) {
		console.log('API ERROR', error);
		res.status(400).send('Message not sent.');
	}
}
