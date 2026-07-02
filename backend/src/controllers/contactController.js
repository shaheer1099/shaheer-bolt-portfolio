const contactService = require('../services/contactService');

async function submitContact(req, res, next) {
  try {
    await contactService.sendContactEmail(req.body);
    res.status(202).json({ message: 'Thank you for reaching out. I will contact you shortly.' });
  } catch (error) {
    next(error);
  }
}

module.exports = { submitContact };
