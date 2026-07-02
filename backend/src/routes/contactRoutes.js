const express = require('express');
const contactController = require('../controllers/contactController');
const contactRateLimit = require('../middleware/contactRateLimit');
const requireContactToken = require('../middleware/requireContactToken');
const validateContactRequest = require('../validators/contactValidator');

const router = express.Router();

router.post(
  '/',
  contactRateLimit,
  requireContactToken,
  validateContactRequest,
  contactController.submitContact,
);

module.exports = router;
