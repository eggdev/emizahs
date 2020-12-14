const quotes = require('../controllers/quotes.controllers');

module.exports = (app) => {
  app.get('/api/quotes', quotes.getAll);
};
