import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
	try {
		const { name, email, subject, message } = await request.json();

		console.log("ENV CHECK:", {
			host: process.env.SMTP_HOST,
			user: process.env.SMTP_USER,
			to: process.env.CONTACT_EMAIL,
		});

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: parseInt(process.env.SMTP_PORT || "587"),
			secure: process.env.SMTP_SECURE === "true",
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD,
			},
		});

		await transporter.sendMail({
			from: `"${name}" <${process.env.SMTP_USER}>`,
			replyTo: email,
			to: process.env.CONTACT_EMAIL,
			subject: "New Contact Form Submission",
			html: `
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Subject:</strong> ${subject}</p>
				<p><strong>Message:</strong><br>${message}</p>
			`,
		});

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} catch (err: any) {
		console.error("Email send failed:", err);
		return NextResponse.json(
			{ message: "Error sending email", error: err.message },
			{ status: 500 }
		);
	}
}
