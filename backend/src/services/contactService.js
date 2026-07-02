const nodemailer = require('nodemailer');
const { getMailConfig } = require('../config/mail');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildEmailHtml(payload) {
  const rows = [
    ['Name', payload.name],
    ['Email', payload.email],
    ['Project Type', payload.projectType],
    ['Message', payload.message],
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.5">
      <h2 style="margin:0 0 16px">New portfolio inquiry</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:720px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border:1px solid #ddd;font-weight:bold;width:150px;vertical-align:top">${escapeHtml(label)}</td>
                <td style="border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join('')}
      </table>
    </div>
  `;
}

async function sendContactEmail(payload) {
  const mailConfig = getMailConfig();
  const transporter = nodemailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    secure: mailConfig.secure,
    requireTLS: !mailConfig.secure,
    auth: mailConfig.auth,
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${mailConfig.from}>`,
    to: mailConfig.to,
    replyTo: payload.email,
    subject: `New portfolio inquiry from ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Project Type: ${payload.projectType}`,
      '',
      payload.message,
    ].join('\n'),
    html: buildEmailHtml(payload),
  });
}

module.exports = { sendContactEmail };
