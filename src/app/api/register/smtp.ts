'use server'

import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';


const emailadd = 'reidxtreme3@gmail.com';
const emailpass = 'iwpl ekgu xbwr khfw';

export async function sendMail(teamEmail: any, teamLeaderName: any) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailadd,
            pass: emailpass
        }
    });

    const mailOptions = {
        from: emailadd,
        to: teamEmail,
        subject: 'ReidXtreme 3.0 | Registration Confirmation',
        html: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333333;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        h1 {
            color: #333333;
        }

        p {
            font-size: 16px;
            margin: 0 0 10px;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #f9f9f9;
            border: 1px solid #6e988b;
            color: #000000;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }

        .button:hover {
            background-color: #9ab3ab;
        }

        .footer {
            margin-top: 20px;
            color: #636363;
            font-size: 0.9em;
        }

        .highlight {
            background-color: #b4f1d7;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="highlight">
            <h1>Thank you for registering for ReidXtreme 3.0!</h1>
        </div>
        <p>Dear ${teamLeaderName},</p>
        <p>We have received your registration and we're excited to have you join us.</p>
        <p>For more information about the event, please visit our official website:</p>
        <a href="https://reidxtreme.ucscieee.lk/" class="button">Visit ReidXtreme Website</a>
        <div class="footer">
            <p>Best Regards,</p>
            <p>The ReidXtreme Team</p>
        </div>
    </div>
</body>

</html>
    `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${teamEmail}`);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Email could not be sent');
    }
}