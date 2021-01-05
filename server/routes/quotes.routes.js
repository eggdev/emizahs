const quotes = require("../controllers/quotes.controllers.js");

module.exports = (app) => {
  app.get("/api/quotes/:user", quotes.readQuotes);
  app.post("/api/quotes", quotes.createQuote);
};
