const rateLimit = require('express-rate-limit');

const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: 'Too many contact attempts. Please try again later.',
  },
});

module.exports = contactRateLimit;
