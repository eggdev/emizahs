const Quotes = require("../models/quotes.models");

exports.getAll = async (req, res) => {
  Quotes.find({}, (err, quotes) => {
    if (err) res.status(500).end();
    return res.json({ data: quotes });
  });
};
