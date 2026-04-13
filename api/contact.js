import nodemailer from 'nodemailer';

const REQUIRED_ENV_VARS = ['MAIL_HOST', 'MAIL_PORT', 'MAIL_USER', 'MAIL_PASS'];

const sanitizeHeaderValue = (value = '') => value.toString().replace(/\r?\n/g, ' ').trim();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const missingEnvVars = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);

  if (missingEnvVars.length > 0) {
    return res.status(500).json({
      error: `Missing email configuration: ${missingEnvVars.join(', ')}`,
    });
  }

  const body =
    typeof req.body === 'string'
      ? JSON.parse(req.body || '{}')
      : (req.body || {});

  const { name = '', email = '', message = '' } = body;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const port = Number(process.env.MAIL_PORT);
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const recipient = process.env.MAIL_TO || process.env.MAIL_USER;
  const safeName = sanitizeHeaderValue(name);
  const safeEmail = sanitizeHeaderValue(email);

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.MAIL_USER}>`,
      to: recipient,
      replyTo: safeEmail,
      subject: `Portfolio inquiry from ${safeName}`,
      text: [
        `Name: ${safeName}`,
        `Email: ${safeEmail}`,
        '',
        'Message:',
        message.trim(),
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #2f2f2f;">
          <h2>New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${message.trim().replace(/\n/g, '<br />')}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Thanks! Your message has been sent.' });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to send message right now.' });
  }
}
