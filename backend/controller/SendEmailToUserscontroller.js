import nodemailer from 'nodemailer';
import UserModel from '../models/Usermodel.js';
import dotenv from 'dotenv';
dotenv.config();

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use true for port 465, false for all other ports
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    },
    debug: true // Enable debugging
});
export const sendEmailToUsers = async (subject, description) => {
    try {
        const users = await UserModel.find();

        users.forEach(user => {
            const mailOptions = {
                from: process.env.SMTP_EMAIL,
                to: user.email,
                subject: subject,
                text: description,
                // html: `
                //     <div style="padding:10px;border-style: ridge">
                //         <p>A new course has been added.</p>
                //         <h3>Course Details</h3>
                //         <ul>
                //             <li>Subject: ${subject}</li>
                //             <li>Description: ${description}</li>
                //         </ul>
                //     </div>
                // `
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9;">
                        <div style="padding-bottom: 20px; border-bottom: 1px solid #ddd; margin-bottom: 20px;">
                            <h2 style="font-size: 24px; margin: 0 0 10px; color: #333;">A new course has been added.</h2>
                            <p style="font-size: 16px; color: #666; margin: 0;">Course Details:</p>
                            <ul style="list-style: none; padding-left: 0; margin: 0;">
                                <li style="margin-bottom: 10px;"><strong style="color: #333;">Subject:</strong> ${subject}</li>
                                <li style="margin-bottom: 10px;"><strong style="color: #333;">Description:</strong> ${description}</li>
                            </ul>
                        </div>
                        <p style="font-size: 14px; color: #999; margin-top: 20px;">This is an automated email. Please do not reply.</p>
                    </div>
            `
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.error('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });
        });

        console.log("Emails sent to ${users.length} users.");
    } catch (error) {
        console.error('Error sending emails:', error);
    }
};