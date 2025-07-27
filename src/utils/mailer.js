const nodemailer = require('nodemailer');
const { DEVELOPMENT_ENV } = require('../config/env');

const emailUser = DEVELOPMENT_ENV.emailUser;
const emailPassword = DEVELOPMENT_ENV.emailPassword;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPassword,
  },
});

/**
 * Send an email with both plain text and styled HTML content
 * @param {string} to - Recipient email address
 * @param {string} subject - Subject of the email
 * @param {string} text - Plain text version of the email
 * @param {string} html - HTML content (with styles and elements)
 */

const sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: emailUser,
    to,
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to', to);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Email sending failed');
  }
};

module.exports = { sendEmail };
