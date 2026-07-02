const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');
const { corsOptions } = require('./config/cors');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const parseOriginList = (value) =>
  (value || '')
    .split(',')
    .map((origin) => origin.trim().replace(/\/+$/, ''))
    .filter(Boolean);
const connectSources = [
  "'self'",
  ...parseOriginList(process.env.CORS_ORIGINS),
  ...parseOriginList(process.env.CSP_CONNECT_SOURCES),
];

app.disable('x-powered-by');
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'img-src': ["'self'", 'data:', 'https://upload.wikimedia.org'],
        'connect-src': connectSources,
      },
    },
  })
);
app.use(cors(corsOptions));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: false, limit: '16kb' }));

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/contact', contactRoutes);
app.use(express.static(publicPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    next();
    return;
  }

  res.sendFile(path.join(publicPath, 'index.html'), (error) => {
    if (error) {
      next();
    }
  });
});

app.use(errorHandler);

module.exports = app;
