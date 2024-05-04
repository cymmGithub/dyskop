import { NextResponse } from 'next/server';

const nodemailer = require('nodemailer');

// Handles POST requests to /api

export async function POST(req, res) {
	const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
	const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
	const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

	const formData = await req.formData();
	const name = formData.get('name');
	const phone = formData.get('phone');
	const email = formData.get('email');
	const message = formData.get('message');
	const isBot = formData.get('bot-trap');

	if (isBot) {
		throw new Error('Hello Mr.Robot');
	}

	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		host: 'smtp.gmail.com',
		port: 465,
		tls: {
			ciphers: 'SSLv3',
			rejectUnauthorized: false,
		},

		auth: {
			user: username,
			pass: password,
		},
	});

	try {
		await transporter.sendMail({
			from: username,
			to: myEmail,
			replyTo: email,
			subject: `Formularz kontaktowy Dys-kop.pl`,
			html: `
		    <p>Imię nadawcy: ${name} </p>
		    <p>Email do kontaktu: ${email} </p>
		    <p>Numer do kontaktu: ${phone} </p>
		    <p>Wiadomość: ${message} </p>

		    `,
		});
		return NextResponse.json({
			message: 'Wiadomość wysłana, odezwiemy się niebawem!',
		});
	} catch (error) {
		console.log(error);
		return NextResponse.status(500);
	}
}
