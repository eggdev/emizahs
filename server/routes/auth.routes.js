const auth = require('../controllers/auth.controllers.js');

module.exports = (app) => {
  app.get('/api/auth', auth.validate);
};
