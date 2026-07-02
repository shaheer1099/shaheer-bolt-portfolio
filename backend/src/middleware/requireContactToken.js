function requireContactToken(req, res, next) {
  const expectedToken = process.env.CONTACT_ROUTE_TOKEN;

  if (!expectedToken) {
    next();
    return;
  }

  if (req.get('x-contact-token') !== expectedToken) {
    res.status(401).json({ message: 'Unauthorized contact request.' });
    return;
  }

  next();
}

module.exports = requireContactToken;
