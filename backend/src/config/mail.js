function getMailConfig() {
  const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO_EMAIL'];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing mail environment variables: ${missing.join(', ')}`);
  }

  const port = Number(process.env.SMTP_PORT);

  if (!Number.isInteger(port) || port < 1) {
    throw new Error('SMTP_PORT must be a valid port number.');
  }

  const secure =
    typeof process.env.SMTP_SECURE === 'string'
      ? String(process.env.SMTP_SECURE).toLowerCase() === 'true'
      : port === 465;

  return {
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    to: process.env.CONTACT_TO_EMAIL,
    from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
  };
}

module.exports = { getMailConfig };
