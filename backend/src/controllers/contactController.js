const contactService = require('../services/contactService');

async function submitContact(req, res, next) {
  try {
    await contactService.sendContactEmail(req.body);
    res.status(202).json({ message: 'Message received.' });
  } catch (error) {
    next(error);
  }
}

module.exports = { submitContact };
