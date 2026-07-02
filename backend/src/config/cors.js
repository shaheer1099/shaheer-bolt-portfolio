const normalizeOrigin = (origin) => {
  if (!origin) {
    return '';
  }

  try {
    const parsed = new URL(origin);
    return parsed.origin;
  } catch (_error) {
    return origin.trim().replace(/\/+$/, '');
  }
};

const allowedOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map(normalizeOrigin)
  .filter(Boolean);

const corsOptions = {
  origin(origin, callback) {
    const requestOrigin = normalizeOrigin(origin);

    if (!requestOrigin || allowedOrigins.length === 0 || allowedOrigins.includes(requestOrigin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`Origin is not allowed by CORS: ${requestOrigin}`));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-contact-token'],
};

module.exports = { corsOptions };
