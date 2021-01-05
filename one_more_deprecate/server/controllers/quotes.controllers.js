const Quotes = require("../models/quotes.models");

exports.createQuote = async (req, res) => {
  const { data } = req.body;
  Quotes.create(
    {
      ...data,
    },
    (err, newQuote) => {
      if (err) return res.json({ error: err });
      return res.json({ quotes: { ...newQuote } });
    }
  );
};

exports.readQuotes = async (req, res) => {
  Quotes.find({}, (error, quotes) => {
    console.log(quotes);
    return res.json({ quotes: "here" });
  });
};
