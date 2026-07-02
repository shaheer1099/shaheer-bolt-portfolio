const allowedProjectTypes = new Set([
  'Shopify App',
  'WordPress Plugin',
  'Ecommerce Platform',
  'API Integration',
  'Other',
]);

function createValidationError(message) {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
}

function normalize(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function validateContactRequest(req, _res, next) {
  const name = normalize(req.body.name);
  const email = normalize(req.body.email).toLowerCase();
  const projectType = normalize(req.body.projectType);
  const message = normalize(req.body.message);
  const website = normalize(req.body.website);

  if (website) {
    next(createValidationError('Invalid contact request.'));
    return;
  }

  if (!name || !email || !projectType || !message) {
    next(createValidationError('All fields are required.'));
    return;
  }

  if (name.length < 2 || name.length > 100) {
    next(createValidationError('Name must be between 2 and 100 characters.'));
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) {
    next(createValidationError('A valid email address is required.'));
    return;
  }

  if (!allowedProjectTypes.has(projectType)) {
    next(createValidationError('A valid project type is required.'));
    return;
  }

  if (message.length < 20 || message.length > 3000) {
    next(createValidationError('Message must be between 20 and 3000 characters.'));
    return;
  }

  req.body = { name, email, projectType, message };
  next();
}

module.exports = validateContactRequest;
