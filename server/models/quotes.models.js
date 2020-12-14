const mongoose = require('mongoose');
const QuotesModel = mongoose.Schema(
  {
    value: String,
  },
  { collection: 'quotes' },
);
module.exports = mongoose.model('Quotes', QuotesModel);
